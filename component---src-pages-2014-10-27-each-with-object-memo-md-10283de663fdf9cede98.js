(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Bl7J:function(t,e,n){"use strict";var a=n("dwav"),r=n("q1tI"),c=n.n(r),i=n("Wbzz"),o=function(t){var e=t.siteTitle;return c.a.createElement("header",{style:{background:"white",marginBottom:"1.45rem"}},c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(i.Link,{to:"/",style:{color:"black",textDecoration:"none"}},e))))};o.defaultProps={siteTitle:""};var l=o;n("8ypT"),e.a=function(t){var e=t.children,n=a.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l,{siteTitle:n.site.siteMetadata.title}),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},c.a.createElement("main",null,e),c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",c.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"by ",n.site.siteMetadata.author)))}},RbFb:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return c})),n.d(e,"default",(function(){return l}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),r=n("Bl7J");var c={},i={_frontmatter:c},o=r.a;function l(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(a.b)(o,Object.assign({},i,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"each_with_objectの簡単な使い方。\n使い方は気をつけないといけないですね。"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-rb"}),"[1,2,3].each_with_object(n=[]){|v| n << v + 5}\n=> [6, 7, 8]\n# nを初期化しないで処理\n[1,2,3].each_with_object(n){|v| n << v + 5}\n=> [6, 7, 8, 6, 7, 8]\n[1,2,3].each_with_object(n){|v| n << v + 5}\n=> [6, 7, 8, 6, 7, 8, 6, 7, 8]\n# nをeach_with_objectで初期化\n[1,2,3].each_with_object(n=[]){|v| n << v + 5}\n=> [6, 7, 8]\n# nをeach_with_objectの前に宣言\nn = [10]\n=> [10]\n[1,2,3].each_with_object(n){|v| n << v + 5}\n=> [10, 6, 7, 8]\n")))}l.isMDXComponent=!0},dwav:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"jangajan.com","author":"@ta1kt0me"}}}}')}}]);
//# sourceMappingURL=component---src-pages-2014-10-27-each-with-object-memo-md-10283de663fdf9cede98.js.map