---
layout: post

title: erbのyieldの挙動
subtitle: "erbのyieldが何してくれてるのかわからない"
cover_image: blog-post-cover.jpg

excerpt: "railsでerbファイルでyieldを呼び出すと読み込むコンテンツを表示しているけど"

author:
  name: talkto_me
  twitter: talkto_me
  gplus: 112523552085244928159
---

railsでerbファイルでyieldを呼び出すと読み込むコンテンツを表示しているけど、実際何がおこっているのかわからない。  
yield自体はrubyのそれだと思うんだけど。  

# block_given?の結果

yieldが実行されているということは、呼び出し時にブロック関数が渡されているんだよね、多分。  
とりあえず、pryで確認してみる。

```
[1] pry(#<#<Class:0x007ff76226d908>>)> block_given?
=> true
```

はい。ブロック関数はありますね。

# 関数のスタック

先にこっちを見た方がいいのかな。

```rb
=> #0  _app_views_layouts_application_html_erb__4523233871588515359_70350238470280 <ActionView::CompiledTemplates#_app_views_layouts_application_html_erb__4523233871588515359_70350238470280(local_assigns, output_buffer)>
   #1 [block]   block in render <ActionView::Template#render(view, locals, buffer=?, &block)>
   #2 [method]  instrument <ActiveSupport::Notifications.instrument(name, payload=?)>
   #3 [method]  render <ActionView::Template#render(view, locals, buffer=?, &block)>
   #4 [method]  render_with_layout <ActionView::TemplateRenderer#render_with_layout(path, locals)>
   #5 [method]  render_template <ActionView::TemplateRenderer#render_template(template, layout_name=?, locals=?)>
   #6 [method]  render <ActionView::TemplateRenderer#render(context, options)>
   #7 [method]  render_template <ActionView::Renderer#render_template(context, options)>
   #8 [method]  render <ActionView::Renderer#render(context, options)>
   #9 [method]  _render_template <AbstractController::Rendering#_render_template(options)>
   #10 [method]  _render_template <ActionController::Streaming#_render_template(options)>
...
```
まずは`ActionView::Template#render`から。  
`action_view/template.rb`の中にいました。
順当にいけばreturnされるのは、`&block`を引数に含んでいる`view.send`メソッドっぽい。  
`&block`は`ActionView::Template#render`の引数で渡ってきてる。  
`ActionView::TemplateRenderer#render_with_layout`が元になるのかな。  
`action_view/renderer/template_renderer.rb`の中に

```rb
layout.render(view, locals){ |*name|
  view._layout_for(*name)
}
```

それっぽいのがあった。

# ブロック内の処理

`view._layout_for`がどこで呼ばれているのか。
とりあえず、`view.class.ancestors`してみる！

```rb
[21] pry(#<ActionView::TemplateRenderer>)> view.class.ancestors
=> [#<Class:0x007f9798335bf8>,
 #<Module:0x007f9798274958>,
 #<Module:0x007f9793d33150>,
 StaticPagesHelper,
 ApplicationHelper,
 #<Module:0x007f9799261078>,
 ActionDispatch::Routing::RouteSet::MountedHelpers,
 #<Module:0x007f9793ca6278>,
 #<Module:0x007f97991b97b0>,
 ActionView::RoutingUrlFor,
 ActionDispatch::Routing::UrlFor,
 ActionDispatch::Routing::PolymorphicRoutes,
 ActionController::ModelNaming,
 ActionView::Base,
 Sprockets::Rails::Helper,
 ActionView::Helpers,
 ActionView::Helpers::TranslationHelper,
 ActionView::Helpers::RenderingHelper,
 ActionView::Helpers::RecordTagHelper,
 ActionView::RecordIdentifier,
 ActionView::Helpers::FormHelper,
 ActionView::ModelNaming,
 ActionView::Helpers::OutputSafetyHelper,
 ActionView::Helpers::NumberHelper,
 ActionView::Helpers::JavaScriptHelper,
 ActionView::Helpers::FormOptionsHelper,
 ActionView::Helpers::FormTagHelper,
 ActionView::Helpers::TextHelper,
 ActionView::Helpers::DebugHelper,
 ActionView::Helpers::SanitizeHelper,
 ActionView::Helpers::CacheHelper,
 ActionView::Helpers::AtomFeedHelper,
 ActionView::Helpers::UrlHelper,
 ActionView::Helpers::AssetTagHelper,
 ActionView::Helpers::AssetUrlHelper,
 ActionView::Helpers::ActiveModelHelper,
 ActiveSupport::Benchmarkable,
 ActionView::Helpers::TagHelper,
 ActionView::Helpers::DateHelper,
 ActionView::Helpers::CsrfHelper,
 ActionView::Helpers::ControllerHelper,
 ActionView::Helpers::CaptureHelper,
 ERB::Util,
 ActionView::Context,
 ActionView::CompiledTemplates,
 Object,
 ActiveSupport::Dependencies::Loadable,
 PP::ObjectMixin,
 JSON::Ext::Generator::GeneratorMethods::Object,
 Kernel,
 BasicObject]
```

なんかいっぱい出てきた...一個一個見てくのはつらいなぁ...  
renderメソッドの直前で、`view.view_flow.set(:layout, content)`という処理をしている。  
view_flowの中を覗いてみるとこんな感じ。

```rb
[22] pry(#<ActionView::TemplateRenderer>)> view.view_flow
=> #<ActionView::OutputFlow:0x007f9798335c70
 @content={:title=>"Home", :layout=>"<h1>Sample App</h1>\n<p>\n    This is the home page for the\n  <a href=\"http://railstutorial.jp/\">Ruby on Rails Tutorial</a>\n    sample application.\n</p>\n"}>
```

実際に埋め込まれている内容のHashじゃないか。  
この辺にあたりをつけたら`action_view/context.rb`にいた。  

```rb
def _layout_for(name=nil)
  name ||= :layout
  view_flow.get(name).html_safe
end
```

view_flowからnameのシンボルをとってきて、html_safeってメソッドを呼び出してる。これはActiveSupportのString拡張クラスで新しい文字列オブジェクト作っているだけみたい。
なので、この結果がyieldの結果になっているんですね。  
すっきりした。
