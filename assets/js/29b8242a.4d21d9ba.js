(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{147:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?r.a.createElement(b,o(o({ref:t},c),{},{components:a})):r.a.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(147)),s={title:"Streaming Data Platform",sidebar_label:"Overview",slug:"/"},o={unversionedId:"sdp/index",id:"sdp/index",isDocsHomePage:!1,title:"Streaming Data Platform",description:"Guides",source:"@site/docs/sdp/index.md",slug:"/",permalink:"/docs/",editUrl:null,version:"current",sidebar_label:"Overview",sidebar:"mainSidebar",next:{title:"About Streaming Data Platform",permalink:"/docs/sdp/about"}},l=[{value:"Guides",id:"guides",children:[]},{value:"Product summary",id:"product-summary",children:[]}],c={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"guides"},"Guides"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sdp/install/index"},"Installation and Administration Guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sdp/developer-guide/index"},"Developer's Guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sdp/security-configuration/index"},"Security Configuration Guide"))),Object(i.b)("h2",{id:"product-summary"},"Product summary"),Object(i.b)("p",null,"Dell EMC Streaming Data Platform (SDP) is an autoscaling software platform for ingesting, storing, and processing continuously\nstreaming unbounded data. The platform can process both real-time and collected historical data in the same application."),Object(i.b)("p",null,"SDP ingests and stores streaming data, such as Internet of Things (IoT) devices, web logs, industrial automation, financial data,\nlive video, social media feeds, and applications. It also ingests and stores event-based streams. It can process multiple data\nstreams from multiple sources while ensuring low latencies and high availability."),Object(i.b)("p",null,"The platform manages stream ingestion and storage, and hosts the analytic applications that process the streams. It dynamically\ndistributes processing related to data throughput and analytical jobs over the available infrastructure. It also dynamically\nautoscales storage resources to handle requirements in real time as the streaming workload changes."),Object(i.b)("p",null,"SDP supports the concept of projects and project isolation or multi-tenancy. Multiple teams of developers and analysts all use\nthe same platform, but each team has its own working environment. The applications and streams that belong to a team are\nprotected from write access by other users outside of the team. Cross-team stream data sharing is supported in read-only\nmode."),Object(i.b)("p",null,"SDP integrates the following capabilities into one software platform:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Stream ingestion\u2014The platform is an autoscaling ingesting engine. It ingests all types of streaming data, including unbounded byte streams and event-based data in real time.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Stream storage\u2014Elastic tiered storage provides instant access to real-time data, access to historical data, and near-infinite storage.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Stream processing\u2014Real-time stream processing is possible with an embedded analytics engine. Your stream processing applications can perform functions, such as:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Process real-time and historical data."),Object(i.b)("li",{parentName:"ul"},"Process a combination of real-time and historical data in the same stream."),Object(i.b)("li",{parentName:"ul"},"Create and store new streams."),Object(i.b)("li",{parentName:"ul"},"Send notifications to enterprise alerting tools."),Object(i.b)("li",{parentName:"ul"},"Send output to third-party visualization tools."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Platform management\u2014Integrated management provides data security, configuration, access control, resource management, easy upgrade process, stream metrics collection, and health and monitoring features.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run-time management\u2014A web-based User Interface (UI) allows authorized users to configure stream properties, view stream metrics, run applications, view job status, and monitor system health."))),Object(i.b)("p",null,"\xa9 2020 - 2021 Dell Inc. or its subsidiaries. All rights reserved. Dell, EMC, and other trademarks are trademarks of Dell Inc. or its subsidiaries. Other trademarks may be trademarks of their respective owners."))}u.isMDXComponent=!0}}]);