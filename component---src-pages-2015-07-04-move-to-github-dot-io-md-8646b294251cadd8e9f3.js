(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{Bl7J:function(e,t,a){"use strict";var n=a("dwav"),l=a("q1tI"),r=a.n(l),i=a("Wbzz"),o=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"white",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(i.Link,{to:"/",style:{color:"black",textDecoration:"none"}},t))))};o.defaultProps={siteTitle:""};var b=o;a("8ypT"),t.a=function(e){var t=e.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"by ",a.site.siteMetadata.author)))}},dwav:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"jangajan.com","author":"@ta1kt0me"}}}}')},uKG2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return b}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("7ljp"),l=a("Bl7J");var r={},i={_frontmatter:r},o=l.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(o,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Jekyllとoctopressで作っているブログをHerokuからGitHub Pagesに移行した(つもり)。この記事が見えていればできているはず。"),Object(n.b)("p",null,"やったことはこんな感じ。"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"github.ioのリポジトリを作成"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"github-pages")," gemのインストールと不要なgemのアンインストール"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"bundle exec rake setup_github_pages"),"を実行"),Object(n.b)("li",{parentName:"ol"},"source/CNAME にdomain情報を追加する"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"bundle exec rake gen_deploy"),"を実行"),Object(n.b)("li",{parentName:"ol"},"cloudflareのDNSの設定をHerokuからGitHab Pagesに変更")),Object(n.b)("p",null,"github.ioのリポジトリを作った時に、",Object(n.b)("inlineCode",{parentName:"p"},"rake setup_github_pages"),"を実行する前にGitHub Pagesのリポジトリにpushしちゃって、",Object(n.b)("inlineCode",{parentName:"p"},"rake deploy"),"を実行する前に",Object(n.b)("inlineCode",{parentName:"p"},"push"),"コマンドに",Object(n.b)("inlineCode",{parentName:"p"},"-f"),"オプションつけたりした。(ちゃんと後で元に戻した)"),Object(n.b)("p",null,"5の時に、CNAMEを設定したファイルが必要になるんだけど、プロジェクトホーム直下において",Object(n.b)("inlineCode",{parentName:"p"},"rake deploy"),"しても反映されない..."),Object(n.b)("p",null,"実は、プロジェクトホーム直下に",Object(n.b)("inlineCode",{parentName:"p"},"_deploy"),"というディレクトリができて、そこがGitHub Pagesのリポジトリと同期とることになることに気がついてややこしいなって思った。"),Object(n.b)("p",null,"Herokuを使っている場合はDNSの設定をちゃんと消しましょう。"),Object(n.b)("p",null,"とりあえず移行できてよかった〜。"))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-2015-07-04-move-to-github-dot-io-md-8646b294251cadd8e9f3.js.map