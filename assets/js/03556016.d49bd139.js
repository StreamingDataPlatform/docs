(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(t),d=n,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return t?o.a.createElement(f,c(c({ref:r},u),{},{components:t})):o.a.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(147)),i={title:"Join the Pravega Community"},c={unversionedId:"pravega/join-community",id:"pravega/join-community",isDocsHomePage:!1,title:"Join the Pravega Community",description:"\x3c!--",source:"@site/docs/pravega/join-community.md",slug:"/pravega/join-community",permalink:"/docs/pravega/join-community",editUrl:"https://github.com/claudiofahey/pravega/edit/docusaurus/documentation/src/docs/join-community.md",version:"current",sidebar:"mainSidebar",previous:{title:"Pravega Roadmap",permalink:"/docs/pravega/roadmap"},next:{title:"Overview",permalink:"/docs/flink-connectors/index"}},p=[{value:"User Groups",id:"user-groups",children:[]},{value:"Developer Mailing List",id:"developer-mailing-list",children:[]}],u={toc:p};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://pravega-io.slack.com/"},"Slack Channel")),Object(a.b)("h3",{id:"user-groups"},"User Groups"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"mailto:pravega-users@googlegroups.com"},"pravega-users@googlegroups.com")),Object(a.b)("h3",{id:"developer-mailing-list"},"Developer Mailing List"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"mailto:pravega-dev@googlegroups.com"},"pravega-dev@googlegroups.com")))}l.isMDXComponent=!0}}]);