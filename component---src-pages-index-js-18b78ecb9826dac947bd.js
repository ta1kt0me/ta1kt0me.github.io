(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"2rMq":function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("/SS/"),n("hHhE");var a=n("q1tI"),o=r(a),i=r(n("2rMq")),c=r(n("Gytx"));function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l=[],m=void 0;function d(){m=e(l.map((function(e){return e.props}))),f.canUseDOM?t(m):n&&(m=n(m))}var f=function(e){function t(){return s(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,l=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){l.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),d()},t.prototype.render=function(){return o.createElement(r,this.props)},t}(a.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",f.canUseDOM=i.canUseDOM,f}}},Bl7J:function(e,t,n){"use strict";var r=n("dwav"),a=n("q1tI"),o=n.n(a),i=n("Wbzz"),c=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"white",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(i.Link,{to:"/",style:{color:"black",textDecoration:"none"}},t))))};c.defaultProps={siteTitle:""};var s=c;n("8ypT"),t.a=function(e){var t=e.children,n=r.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"by ",n.site.siteMetadata.author)))}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"jangajan.com","description":"Is fun? JOY!","author":"@ta1kt0me"}}}}')},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!c(u))return!1;var l=e[u],m=t[u];if(!1===(a=n?n.call(r,l,m,u):void 0)||void 0===a&&l!==m)return!1}return!0}},JkRm:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"frontmatter":{"title":"最近お気に入りのgit alias","date":"2017-05-24 08:23:48 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2017-05-24-favarite-git-alias.md"}},{"node":{"frontmatter":{"title":"rails generateで作ったrubyファイルにfrozen string literalのコメントを追加する","date":"2017-03-04 09:59:30 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2017-03-04-add-comment-for-frozen-string-literal-in-rails-generate.md"}},{"node":{"frontmatter":{"title":"リファクタリング・ウェットウェアを読んだ","date":"2016-12-31 19:18:27 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2016-12-31-refactoring-wetwear.md"}},{"node":{"frontmatter":{"title":"macOS SierraでCap lockとcontrolのキーボードを入れ替える","date":"2016-09-22 09:10:42 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2016-09-22-keymap-sierra.md"}},{"node":{"frontmatter":{"title":"Rubyで素数計算","date":"2016-03-18 00:01:44 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2016-03-18-prime-number.md"}},{"node":{"frontmatter":{"title":"Rubyでのパフォーマンス改善","date":"2015-11-22 13:29:37 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-11-22-profile-ruby.md"}},{"node":{"frontmatter":{"title":"Rails with mysql on docker","date":"2015-08-18 01:21:56 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-08-18-docker-rails-with-mysql.md"}},{"node":{"frontmatter":{"title":"rubyとrailsのdelegate","date":"2015-08-14 02:05:49 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-08-14-ruby-rails-delegate.md"}},{"node":{"frontmatter":{"title":"HerokuからGitHub Pagesにブログを移行した","date":"2015-07-04 18:16:55 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-07-04-move-to-github-dot-io.md"}},{"node":{"frontmatter":{"title":"Warning: Each child in an array or iterator should have a unique \\"key\\" prop.","date":"2015-05-05 11:45:28 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-05-05-resolve-react-warning.md"}},{"node":{"frontmatter":{"title":"my first Bouldering","date":"2015-04-18 11:30:08 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-04-18-my-first-bouldering.md"}},{"node":{"frontmatter":{"title":"vimのcolorschemeの設定でエラー","date":"2015-03-15 01:15:11 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-03-15-vim-colorscheme.md"}},{"node":{"frontmatter":{"title":"MetaNight 第6回を開催しました","date":"2015-03-07 01:02:02 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-03-07-e-g-d-meta-night-6th.md"}},{"node":{"frontmatter":{"title":"STIを試す","date":"2015-03-06 05:43:15 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-03-06-try-sti.md"}},{"node":{"frontmatter":{"title":"Gem Reading - dotenv","date":"2015-02-16 17:27:40 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-02-17-gem-reading-dotenv.md"}},{"node":{"frontmatter":{"title":"MetaNight 第5回を開催しました","date":"2015-02-12 13:46:20 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-02-12-e-g-d-meta-night-5th.md"}},{"node":{"frontmatter":{"title":"Gem Reading - jquery-rails","date":"2015-01-21 23:14:52 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-01-21-gem-reading-jquery-rails.md"}},{"node":{"frontmatter":{"title":"Gem Reading - active_emoji","date":"2015-01-20 23:59:19 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-01-20-gem-reading-active-emoji.md"}},{"node":{"frontmatter":{"title":"Rubyのヒアドキュメント","date":"2015-01-15 19:18:55 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-01-15-rubyheredocument.md"}},{"node":{"frontmatter":{"title":"冬休みの宿題","date":"2015-01-04 21:07:32 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2015-01-04-yochiyochi-dokusyokansoubun.md"}},{"node":{"frontmatter":{"title":"よちよち.rbに参加しよう","date":"2014-12-21 06:39:32 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-12-21-letsjoinyochiyochirb.md"}},{"node":{"frontmatter":{"title":"MetaNight 第4回を開催しました","date":"2014-12-21 18:25:54 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-12-21-e-g-d-meta-night-4th.md"}},{"node":{"frontmatter":{"title":"localhostのelasticsearchにcurlしたらConnection refused","date":"2014-12-16 19:13:11 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-12-16-fail-to-curl-to-elasticsearch.md"}},{"node":{"frontmatter":{"title":"2014年反省会","date":"2014-12-12 02:36:07 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-12-12-reviewing-2014.md"}},{"node":{"frontmatter":{"title":"Rspec3のexpectとallowの違い","date":"2014-12-08 00:00:35 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-12-08-expect-and-allow-in-rspec.md"}},{"node":{"frontmatter":{"title":"MetaNight 第3回を開催しました","date":"2014-12-03 23:55:01 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-12-03-e-g-d-meta-night-3rd.md"}},{"node":{"frontmatter":{"title":"Gem:pr-commentをリリース","date":"2014-12-02 18:18:46 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-12-02-release-pr-comment.md"}},{"node":{"frontmatter":{"title":"Cucumber on Rails 入門2","date":"2014-11-26 00:01:19 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-11-26-use-cucumber-2.md"}},{"node":{"frontmatter":{"title":"Cucumber on Rails 入門1","date":"2014-11-25 14:15:41 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-11-25-use-cucumber.md"}},{"node":{"frontmatter":{"title":"MetaNight 第2回を開催しました","date":"2014-11-19 23:30:51 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-11-19-e-g-d-meta-night-2nd.md"}},{"node":{"frontmatter":{"title":"Railsのexists?とfind_byはどっちが早いのか","date":"2014-11-10 16:01:44 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-11-10-exists-or-find-by-in-rails.md"}},{"node":{"frontmatter":{"title":"Sublime Text3にMarkdown環境を作る","date":"2014-11-03 19:23:45 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-11-03-markdown-plugin-st3.md"}},{"node":{"frontmatter":{"title":"Sublime Text 3でEvernoteを使う","date":"2014-11-03 22:19:35 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-11-03-evernote-with-st3.md"}},{"node":{"frontmatter":{"title":"about MetaNight","date":"2014-11-02 22:11:20 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-11-02-about-meta-night.md"}},{"node":{"frontmatter":{"title":"MetaNight 第1回を開催しました","date":"2014-11-01 01:42:36 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-11-01-e-g-d-meta-night-1st.md"}},{"node":{"frontmatter":{"title":"Rubyでメソッドを定義しているクラスを調べたい","date":"2014-10-28 05:55:25 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-10-28-which-of-the-class-dose-have-the-method.md"}},{"node":{"frontmatter":{"title":"メモ : Array#each_with_objectの簡単な使い方","date":"2014-10-27 18:50:07 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-10-27-each-with-object-memo.md"}},{"node":{"frontmatter":{"title":"herokuで動くRailsアプリケーションにNew Relicを入れる","date":"2014-10-20 15:30:52 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-10-20-use-new-relic-in-rails4-at-heroku.md"}},{"node":{"frontmatter":{"title":"Rspecメモ","date":"2014-10-14 18:00:00 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-10-14-rspec-memo.md"}},{"node":{"frontmatter":{"title":"factorygirlの読み込みでエラー","date":"2014-10-08 14:19:07 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-10-08-require-rspec.md"}},{"node":{"frontmatter":{"title":"TodoGrowというアプリを作りました","date":"2014-10-06 20:35:42 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-10-06-todogrow.md"}},{"node":{"frontmatter":{"title":"Rails4.1でherokuへのデプロイに失敗(Missing `secret_key_base`)","date":"2014-10-05 01:14:13 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-10-05-secrets-dot-yml-on-heroku-in-rails4-dot-1.md"}},{"node":{"frontmatter":{"title":"RailsでBowerを使いHerokuにデプロイ","date":"2014-10-05 22:35:42 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-10-05-bower-and-rails-on-heroku.md"}},{"node":{"frontmatter":{"title":"Rails4でacts-as-taggable-on gemを使う","date":"2014-10-04 03:40:31 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-10-04-acts-as-taggable-on-in-rails.md"}},{"node":{"frontmatter":{"title":"ヘルパーメソッドでHaml::Helpersを使う","date":"2014-10-03 03:16:51 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-10-03-haml-helper.md"}},{"node":{"frontmatter":{"title":"bootstrap3のモーダル表示（HAMLサンプル）","date":"2014-09-29 19:50:21 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-29-haml-modal-in-bootstrap.md"}},{"node":{"frontmatter":{"title":"ページ単位のjavascriptにcontent_forを使う","date":"2014-09-27 04:14:07 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-27-content-for.md"}},{"node":{"frontmatter":{"title":"Railsでbootswitchのテーマを適用したらActionView::Template::Error","date":"2014-09-26 16:49:11 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-26-include-css-error-in-rails.md"}},{"node":{"frontmatter":{"title":"ForbiddenAttributesErrorが発生","date":"2014-09-24 02:33:27 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-24-forbiddenattributeserror-in-rails.md"}},{"node":{"frontmatter":{"title":"i18nの設定でdatetime_selectのエラー対応","date":"2014-09-12 18:25:27 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-12-perfect-rails-i18n.md"}},{"node":{"frontmatter":{"title":"i18nの設定でdatetime_selectの月表示がおかしい","date":"2014-09-12 19:09:36 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-12-perfect-rails-i18n-months.md"}},{"node":{"frontmatter":{"title":"RailsでLocaleを指定する","date":"2014-09-11 15:34:56 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-11-perfect-rails-locale.md"}},{"node":{"frontmatter":{"title":"Bootstrap3 with Rails4","date":"2014-09-10 01:40:22 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-10-perfect-rails-6-bootstrap.md"}},{"node":{"frontmatter":{"title":"sedで1行追加","date":"2014-09-09 22:41:12 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-09-sed-insert-text.md"}},{"node":{"frontmatter":{"title":"RubyのThreadを利用したWebサーバーを作る","date":"2014-09-07 03:15:15 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-07-unix-thread-socket-server-in-ruby.md"}},{"node":{"frontmatter":{"title":"RubyのProcessを利用したWebサーバーを作る","date":"2014-09-05 19:08:20 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-05-unix-process-socket-server-in-ruby.md"}},{"node":{"frontmatter":{"title":"UnixのSocketをRubyで扱う","date":"2014-09-04 03:20:37 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-04-unix-process-socket-in-ruby.md"}},{"node":{"frontmatter":{"title":"UnixのパイプをRubyで扱う","date":"2014-09-03 18:20:35 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-03-unix-process-in-ruby.md"}},{"node":{"frontmatter":{"title":"Hubotでデータを保存する","date":"2014-09-02 20:38:53 +0900"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-02-hubot-brain-sample.md"}},{"node":{"frontmatter":{"title":"YAPC::Asia 2014参加レポ","date":"2014-09-01T00:00:00.000Z"},"fileAbsolutePath":"/home/runner/work/jangajan.com/jangajan.com/src/pages/2014-09-01-yapc-asia-2014.md"}}]},"site":{"siteMetadata":{"description":"Is fun? JOY!"}}}}')},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),s=n("C/va"),u=r.RegExp,l=u,m=u.prototype,d=/a/g,f=/a/g,p=new u(d)!==d;if(n("nh4g")&&(!p||n("eeVq")((function(){return f[n("K0xU")("match")]=!1,u(d)!=d||u(f)==f||"/a/i"!=u(d,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(p?new l(r&&!o?e.source:e,t):l((r=e instanceof u)?e.source:e,r&&o?s.call(e):t),n?this:m,u)};for(var h=function(e){e in u||o(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},T=i(l),g=0;T.length>g;)h(T[g++]);m.constructor=u,u.prototype=m,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},RXBc:function(e,t,n){"use strict";n.r(t);n("pIFo"),n("KKXr");var r=n("JkRm"),a=n("q1tI"),o=n.n(a),i=n("Wbzz"),c=n("Bl7J"),s=n("vrFN");t.default=function(){var e=r.data,t=e.allMdx.edges.map((function(e){var t=e.node,n=t.fileAbsolutePath,r=t.frontmatter,a=n.split("/").pop().split(".")[0],c=r.title,s=r.date;return o.a.createElement("li",{key:a},o.a.createElement(i.Link,{to:"/"+a+"/"},c)," ",o.a.createElement("small",null,"at ",s.replace(/ \+0900/,"")))}));return o.a.createElement(c.a,null,o.a.createElement(s.a,{title:"Home"}),o.a.createElement("h2",null,e.site.siteMetadata.description),o.a.createElement("ul",null,t))}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=m(n("q1tI")),i=m(n("17x9")),c=m(n("8+s/")),s=m(n("bmMU")),u=n("v1p5"),l=n("hFT/");function m(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h,T,g,E=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),j=(h=E,g=T=function(e){function t(){return f(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case l.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case l.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case l.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=d(a,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=d(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(h,a)},a(t,null,[{key:"canUseDOM",set:function(e){h.canUseDOM=e}}]),t}(o.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=h.peek,T.rewind=function(){var e=h.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},g);j.renderStatic=j.rewind,t.Helmet=j,t.default=j},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,u,l=r(t),m=r(n);if(l&&m){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=m)return!1;var d=t instanceof Date,f=n instanceof Date;if(d!=f)return!1;if(d&&f)return t.getTime()==n.getTime();var p=t instanceof RegExp,h=n instanceof RegExp;if(p!=h)return!1;if(p&&h)return t.toString()==n.toString();var T=a(t);if((s=T.length)!==a(n).length)return!1;for(c=s;0!=c--;)if(!o.call(n,T[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(u=T[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},dwav:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"jangajan.com","author":"@ta1kt0me"}}}}')},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("q1tI")),i=s(n("MgzW")),c=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var u,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},m=function(e){var t=T(e,c.TAG_NAMES.TITLE),n=T(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=T(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return T(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},h=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],u=s.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),s=0;s<o.length;s++){var u=o[s],l=(0,i.default)({},a[u],r[u]);a[u]=l}return e}),[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},g=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){g(e)}),0)}),E=function(e){return clearTimeout(e)},j="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},y=null,w=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,m=e.styleTags,d=e.title,f=e.titleAttributes;v(c.TAG_NAMES.BODY,r),v(c.TAG_NAMES.HTML,a),S(d,f);var p={baseTag:R(c.TAG_NAMES.BASE,n),linkTags:R(c.TAG_NAMES.LINK,o),metaTags:R(c.TAG_NAMES.META,i),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,s),scriptTags:R(c.TAG_NAMES.SCRIPT,l),styleTags:R(c.TAG_NAMES.STYLE,m)},h={},T={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(T[e]=p[e].oldTags)})),t&&t(),u(e,h,T)},P=function(e){return Array.isArray(e)?e.join(""):e},S=function(e,t){void 0!==e&&document.title!==e&&(document.title=P(e)),v(c.TAG_NAMES.TITLE,t)},v=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var u=i[s],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var m=o.indexOf(u);-1!==m&&o.splice(m,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},_=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},O=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=M(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=_(n),o=P(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+l(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return _(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){y&&A(y),e.defer?y=j((function(){w(e,(function(){y=null}))})):(w(e),y=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.scriptTags,l=e.styleTags,m=e.title,d=void 0===m?"":m,f=e.titleAttributes;return{base:O(c.TAG_NAMES.BASE,t,r),bodyAttributes:O(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:O(c.ATTRIBUTE_NAMES.HTML,a,r),link:O(c.TAG_NAMES.LINK,o,r),meta:O(c.TAG_NAMES.META,i,r),noscript:O(c.TAG_NAMES.NOSCRIPT,s,r),script:O(c.TAG_NAMES.SCRIPT,u,r),style:O(c.TAG_NAMES.STYLE,l,r),title:O(c.TAG_NAMES.TITLE,{title:d,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:p([c.TAG_PROPERTIES.HREF],e),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,e),defer:T(e,c.HELMET_PROPS.DEFER),encode:T(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,e),linkTags:h(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:h(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:h(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:m(e),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=j,t.warn=b}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("EH9Q"),a=n("q1tI"),o=n.n(a),i=n("TJpk"),c=n.n(i);function s(e){var t=e.description,n=e.lang,a=e.meta,i=e.title,s=r.data.site,u=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(a)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-18b78ecb9826dac947bd.js.map