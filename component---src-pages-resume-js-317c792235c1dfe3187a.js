(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7Qib":function(e,a,t){"use strict";t.d(a,"a",(function(){return n.a})),t.d(a,"b",(function(){return r}));var n=t("ElpU"),r=(t("BYIe"),t("SRfc"),{getImageMap:function(e,a,t,n){return void 0===t&&(t=!1),void 0===n&&(n=3),e.reduce((function(e,r){var l=r.node.relativePath.match(a)[0];if(t)if(e.hasOwnProperty(l))e[l].length<=n&&e[l].push(r.node.childImageSharp.fluid);else{var i=[];i.push(r.node.childImageSharp.fluid),e[l]=i}else e[l]=r.node.childImageSharp.fluid;return e}),{})}})},F2CN:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return u}));var n=t("q1tI"),r=t.n(n),l=t("Kvkj"),i=t("7Qib"),c=t("IP2g"),d=t("7vrA");a.default=function(e){var a=e.data,t=a.allMarkdownRemark.edges||[],n=a.allFile.edges||[],u=i.b.getImageMap(n,/\/[work].*\/|$/);return r.a.createElement(l.b,null,r.a.createElement(i.a,{title:"Resume"}),r.a.createElement(l.c,{title:"Resume"}," ",r.a.createElement("a",{href:"../../resume.pdf",target:"_blank",download:!0},r.a.createElement(c.a,{style:{fontSize:"2rem"},icon:["fas","file-download"],className:"icons file"}))),r.a.createElement(d.a,{className:"mt-5 pt-3",fluid:!0},t.map((function(e){var a=e.node;return r.a.createElement("div",{key:a.id},r.a.createElement(l.e,{frontmatter:a.frontmatter,image:u[a.fields.slug],html:a.html}),r.a.createElement("hr",{className:"w-75"}))}))))};var u="2273171741"}}]);
//# sourceMappingURL=component---src-pages-resume-js-317c792235c1dfe3187a.js.map