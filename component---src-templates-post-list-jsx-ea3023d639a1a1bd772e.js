(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{HmvK:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("Wbzz"),l=a("Zttt"),r=a("vrFN"),s=a("m09z"),c=a("vOnD"),d=c.a.div.withConfig({displayName:"postList__Container",componentId:"uzorsf-0"})(["margin:20px 0px;padding:0px 10px;width:90%;@media (max-width:1000px){width:100%;}"]),p=c.a.div.withConfig({displayName:"postList__LinkContainer",componentId:"uzorsf-1"})(["display:flex;justify-content:space-between;"]);t.default=function(e){var t=e.data.allMdx,a=e.pageContext,c=a.next,m=a.prev,u=a.currentPage,f=a.postTag,g=Object(n.useState)(t.nodes),x=g[0],b=(g[1],"/"),w="//"===f?"/":"tag/"+f,C="//"===f?"page/":"tag/"+f;return m&&u>2&&(w=C+(u-1)),c&&(b=C+(u+1)),i.a.createElement(l.a,null,i.a.createElement(r.a,{title:"Home"}),i.a.createElement(d,null,x.map((function(e,t){return i.a.createElement(s.a,Object.assign({key:t},e.frontmatter,a))})),i.a.createElement(p,null,m?i.a.createElement(o.Link,{to:w},"Prev"):"",c?i.a.createElement(o.Link,{to:b},"Next"):"")))}},m09z:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("vOnD"),l=a("Wbzz"),r=a("aeIv"),s=a("OL0J"),c=o.a.div.withConfig({displayName:"PostListCard__Container",componentId:"sc-16bsr72-0"})(["display:flex;justify-content:space-between;align-items:baseline;padding:40px 10px;flex-wrap:wrap;border-bottom:1px dotted #303030;&:hover{background-color:aliceblue;};"]),d=o.a.div.withConfig({displayName:"PostListCard__Heading",componentId:"sc-16bsr72-1"})(["display:flex;flex-direction:column;"]),p=o.a.h4.withConfig({displayName:"PostListCard__Title",componentId:"sc-16bsr72-2"})(["margin-top:0;font-size:30px;border-bottom:0px;font-weight:900;"]),m=o.a.div.withConfig({displayName:"PostListCard__MetaData",componentId:"sc-16bsr72-3"})(["display:flex;flex-direction:column;"]),u=o.a.div.withConfig({displayName:"PostListCard__TagContainer",componentId:"sc-16bsr72-4"})(["display:flex;flex-wrap:wrap;"]);t.a=function(e){var t=e.title,a=e.slug,n=e.subtitle,o=e.date,f=e.tags;return i.a.createElement(l.Link,{to:"/"+a,style:{textDecoration:"none",color:"inherit"}},i.a.createElement(c,null,i.a.createElement(d,null,i.a.createElement(p,null,t),i.a.createElement("p",null,n)),i.a.createElement(m,null,i.a.createElement("b",null,o),i.a.createElement(u,null,f.map((function(e,t){var a=s.filter((function(t){return t.tag===e})),n="",o="";return a&&(n=a[0].bgColor,o=a[0].fontColor),i.a.createElement(r.a,{key:t,title:e,bgColor:n,fontColor:o})}))))))}}}]);
//# sourceMappingURL=component---src-templates-post-list-jsx-ea3023d639a1a1bd772e.js.map