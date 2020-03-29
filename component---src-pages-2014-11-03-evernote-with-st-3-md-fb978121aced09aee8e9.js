(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Bl7J:function(e,t,n){"use strict";var a=n("dwav"),l=n("q1tI"),r=n.n(l),o=n("Wbzz"),b=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"white",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(o.Link,{to:"/",style:{color:"black",textDecoration:"none"}},t))))};b.defaultProps={siteTitle:""};var i=b;n("8ypT"),t.a=function(e){var t=e.children,n=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{siteTitle:n.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"by ",n.site.siteMetadata.author)))}},XSeF:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return i}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),l=n("Bl7J");var r={},o={_frontmatter:r},b=l.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(b,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Sublime Text 3 を Evernoteのクライアントにする方法です。\n以前にも試したのですが、使いやすいPackageがなかったので、見つかって嬉しい。"),Object(a.b)("p",null,"evernoteのアカウントを持っていることが前提です。"),Object(a.b)("h1",null,"必要なPackage"),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://sublime.wbond.net/packages/Evernote"}),"Evernote")),Object(a.b)("h1",null,"初期設定"),Object(a.b)("h2",null,"Token生成"),Object(a.b)("p",null,"Command Paletteから",Object(a.b)("inlineCode",{parentName:"p"},"Evernote Settings:Reconfigure Authorization"),"を選択。",Object(a.b)("br",{parentName:"p"}),"\n","ブラウザが起動して、EvernoteのDeveloper Tokensページが開くので、Tokenを作る。",Object(a.b)("br",{parentName:"p"}),"\n","生成した",Object(a.b)("inlineCode",{parentName:"p"},"Developer Token"),"と",Object(a.b)("inlineCode",{parentName:"p"},"NoteStore URL"),"を設定ファイルに書き込む。"),Object(a.b)("h2",null,"Evernote設定ファイル作成"),Object(a.b)("p",null,"Command Paletteから",Object(a.b)("inlineCode",{parentName:"p"},"Evernote Settings: User"),"を選択。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json",metastring:"Evernote.sublime-settings","Evernote.sublime-settings":!0}),'{\n    "noteStoreUrl": "生成したNoteStore URL",\n    "token": "生成したDeveloper Token"\n}\n')),Object(a.b)("p",null,"以上でSublime Textでの設定は完了。"),Object(a.b)("h1",null,"新規メモ作成"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"新規ノートを作成\nCommand Paletteから",Object(a.b)("inlineCode",{parentName:"li"},"Evernote:  New empty note"),"を選択。",Object(a.b)("br",{parentName:"li"}),Object(a.b)("inlineCode",{parentName:"li"},"title"),"と",Object(a.b)("inlineCode",{parentName:"li"},"notebook"),"と",Object(a.b)("inlineCode",{parentName:"li"},"tags"),"を入力。\nこのままでは保存されません。"),Object(a.b)("li",{parentName:"ol"},"ノートを保存\nCommand Paletteから",Object(a.b)("inlineCode",{parentName:"li"},"Evernote:Send to Evernote as new note"),"を選択。",Object(a.b)("br",{parentName:"li"}),"これでevernoteに保存されます。\nたまに、tokenを聞かれることがありますので、その時は、上のtokenを入力する必要があります。")),Object(a.b)("h1",null,"ノートを探す"),Object(a.b)("p",null,"とりわけ使いやすそうだったもの。\nCommand Paletteから入力します。  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Evernote:Open Evernote Note",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"notebook > titleから使いたいノートを検索"))),Object(a.b)("li",{parentName:"ul"},"Evernote:List recent notes",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"最近使ったノートを表示")))))}i.isMDXComponent=!0},dwav:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"jangajan.com","author":"@ta1kt0me"}}}}')}}]);
//# sourceMappingURL=component---src-pages-2014-11-03-evernote-with-st-3-md-fb978121aced09aee8e9.js.map