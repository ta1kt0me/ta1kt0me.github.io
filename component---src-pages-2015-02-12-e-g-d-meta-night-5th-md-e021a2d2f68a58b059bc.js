(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{Bl7J:function(e,t,a){"use strict";var n=a("dwav"),l=a("q1tI"),r=a.n(l),b=a("Wbzz"),c=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"white",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(b.Link,{to:"/",style:{color:"black",textDecoration:"none"}},t))))};c.defaultProps={siteTitle:""};var u=c;a("8ypT"),t.a=function(e){var t=e.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"by ",a.site.siteMetadata.author)))}},MPaS:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("7ljp"),l=a("Bl7J");var r={},b={_frontmatter:r},c=l.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(c,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://e-g-d.doorkeeper.jp/"}),"MetaNight"),"という",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://www.amazon.co.jp/gp/product/B00N9I0RMQ/ref=as_li_ss_il?ie=UTF8&camp=247&creative=7399&creativeASIN=B00N9I0RMQ&linkCode=as2&tag=pochan0919-22"}),"Metaprogramming Ruby 2"),"の読書会の第５回目を開催しました。"),Object(n.b)("h1",null,"活動内容"),Object(n.b)("p",null,"フリーマンカフェで実施しました。",Object(n.b)("br",{parentName:"p"}),"\n","Part 1 Chapter2 の The Truth About Classesから Constantの前までやりました。",Object(n.b)("br",{parentName:"p"}),"\n","読みながらの意見とかはこちらに載せてあります。",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://trello.com/b/6JT4fy3D/metanight-5th"}),"https://trello.com/b/6JT4fy3D/metanight-5th")),Object(n.b)("h1",null,"感想"),Object(n.b)("p",null,"前回よりもかなり間が空いてしまった...(結局1月にできなかった...)",Object(n.b)("br",{parentName:"p"}),"\n","Billの図のおかげで、Rubyにおけるクラスとオブジェクトの関係性がよりはっきりわかってきました。",Object(n.b)("br",{parentName:"p"}),"\n","Billできるやつ。"),Object(n.b)("h2",null,"Classes themselves are nothing but objects"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Putting It All Together")," で表しているのですが、クラスはオブジェクトなんだよ、っていうことを語っています。そこが他の言語とは違うんだと。",Object(n.b)("br",{parentName:"p"}),"\n","Classはobject_id持ってますし、変数に代入することもできます。実際にはClassへの参照を表現している定数(Class名)を変数に代入しています。ここは、次回のConstantのところに繋がってきますね。"),Object(n.b)("p",null,"ClassとModuleの関係の話も出てきました。２つは非常によく似ているけれど、使い分け方の基準として"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"インスタンス化と継承を使いたいならClass"),Object(n.b)("li",{parentName:"ul"},"どこでもincludeできるのがModule")),Object(n.b)("p",null,"と書いてありました。インスタンス化する必要があるかどうかが、おおきな分かれ目になるのかな。"),Object(n.b)("h2",null,"英語"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Take a deep breath")),Object(n.b)("p",null,"文頭でよく見かける、一息ついて、という表現。takeの使い所ってよく分からないよね、って話が出ました。取るってニュアンスはわかるけれど、固定表現が多いのかな？"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"get away with")),Object(n.b)("p",null,"やりすごす、とか、すますことができる、とか...?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Chances are")),Object(n.b)("p",null,"多分、だろう、といった表現。なんでmaybeじゃないんだろう、特殊な意味が含まれてるのかな？",Object(n.b)("br",{parentName:"p"}),"\n","微妙なニュアンスの違いがけっこう難しいです。"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A variable can reference a class")),Object(n.b)("p",null,"referenceって形容詞だから文法的に変じゃない？って話が挙がりました。結果として、動詞としても使えるようなので、少しずつだけど、言葉が変化している面白い例なんだなと感じました。"),Object(n.b)("h2",null,"その他"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"meta_ruby = MetaRuby.newのとき、MetaRuby.instance_methods == meta_ruby.methods"),Object(n.b)("li",{parentName:"ul"},"allocate メソッド、rails(ActiveRecord)だと再定義されてる"),Object(n.b)("li",{parentName:"ul"},"Class.superclassはModule、Module.classはClass、Class.super....というループ")),Object(n.b)("p",null,"今回は初参加の方が多くて新鮮でした。人数増やしたりオンライン検討したりしたほうがいいのかなぁと思ったり。"),Object(n.b)("p",null,"第6回は2月末か、3月頭にやる。"))}u.isMDXComponent=!0},dwav:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"jangajan.com","author":"@ta1kt0me"}}}}')}}]);
//# sourceMappingURL=component---src-pages-2015-02-12-e-g-d-meta-night-5th-md-e021a2d2f68a58b059bc.js.map