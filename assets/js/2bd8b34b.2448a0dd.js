(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{155:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,m=d["".concat(l,".").concat(u)]||d[u]||b[u]||o;return t?a.a.createElement(m,i(i({ref:n},p),{},{components:t})):a.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(155)),l={title:"Deploying in a Docker Swarm"},i={unversionedId:"pravega/deployment/docker-swarm",id:"pravega/deployment/docker-swarm",isDocsHomePage:!1,title:"Deploying in a Docker Swarm",description:"\x3c!--",source:"@site/docs/pravega/deployment/docker-swarm.md",slug:"/pravega/deployment/docker-swarm",permalink:"/docs/docs/pravega/deployment/docker-swarm",editUrl:"https://github.com/claudiofahey/pravega/edit/docusaurus/documentation/src/docs/deployment/docker-swarm.md",version:"current",sidebar:"mainSidebar",previous:{title:"Deploying in Kubernetes",permalink:"/docs/docs/pravega/deployment/kubernetes-install"},next:{title:"Deploying on DC/OS",permalink:"/docs/docs/pravega/deployment/dcos-install"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Network Considerations",id:"network-considerations",children:[]},{value:"Deploying (Swarm only clients)",id:"deploying-swarm-only-clients",children:[]},{value:"Deploying (External clients)",id:"deploying-external-clients",children:[]},{value:"Scaling BookKeeper",id:"scaling-bookkeeper",children:[]},{value:"Scaling Pravega Controller",id:"scaling-pravega-controller",children:[]},{value:"Scaling Pravega Segment Store (Swarm only clients)",id:"scaling-pravega-segment-store-swarm-only-clients",children:[]},{value:"Scaling Pravega Segment Store (External clients)",id:"scaling-pravega-segment-store-external-clients",children:[]},{value:"Tearing down",id:"tearing-down",children:[]}],p={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Docker Swarm can be used to quickly spin up a distributed Pravega cluster that can easily scale up and down. Unlike\n",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose"),", this is useful for more than just testing and development. In future, Docker Swarm will be suitable for production workloads."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A working single or multi-node Docker Swarm. Please refer to ",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/swarm/swarm-tutorial"},"swarm-tutorial"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"HDFS and ZooKeeper. We provide compose files for both of these, but both are single instance deploys that should only be used for testing/development."),Object(o.b)("p",{parentName:"li"},"More information to deploy our HDFS and ZooKeeper can be found ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pravega/pravega/tree/master/docker/compose/swarm"},"here"),". Please refer to ",Object(o.b)("inlineCode",{parentName:"p"},"hdfs.yml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"zookeeper.yml")," files."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker stack up --compose-file hdfs.yml pravega\ndocker stack up --compose-file zookeeper.yml pravega\n")),Object(o.b)("p",null,"This runs a single node HDFS container and single node ZooKeeper inside the ",Object(o.b)("inlineCode",{parentName:"p"},"pravega_default")," overlay network, and adds\nthem to the ",Object(o.b)("inlineCode",{parentName:"p"},"pravega")," stack."),Object(o.b)("p",null,"HDFS is reachable inside the swarm as"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"hdfs://hdfs:8020\n")),Object(o.b)("p",null,"ZooKeeper  is reachable at"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"tcp://zookeeper:2181.\n")),Object(o.b)("p",null,"Either one or both of these can be initiated for running, but serious workloads cannot be handled."),Object(o.b)("h2",{id:"network-considerations"},"Network Considerations"),Object(o.b)("p",null,"Each Pravega Segment Store needs to be directly reachable by clients. Docker Swarm runs all traffic coming into\nits overlay network through a load balancer, which makes it more or less impossible to reach a specific instance\nof a scaled service from outside the cluster. This means that Pravega clients must either run inside the swarm, or\nwe must run each Segment Store as a unique service on a distinct port."),Object(o.b)("p",null,"Both approaches are demonstrated in the below section."),Object(o.b)("h2",{id:"deploying-swarm-only-clients"},"Deploying (Swarm only clients)"),Object(o.b)("p",null,"The easiest way to deploy is to keep all traffic inside the swarm. This means your client apps must also run inside\nthe swarm."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ZK_URL=zookeeper:2181 HDFS_URL=hdfs:8020 docker stack up --compose-file pravega.yml pravega\n")),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"ZK_URL")," and ",Object(o.b)("inlineCode",{parentName:"p"},"HDFS_URL")," don't include the protocol. They have default values assigned as ",Object(o.b)("inlineCode",{parentName:"p"},"zookeeper:2181")," and ",Object(o.b)("inlineCode",{parentName:"p"},"hdfs:8020"),", when deployed using ",Object(o.b)("inlineCode",{parentName:"p"},"zookeeper.yml"),"/",Object(o.b)("inlineCode",{parentName:"p"},"hdfs.yml"),"."),Object(o.b)("p",null,"Your clients must then be deployed into the swarm, using the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker service create --name=myapp --network=pravega_default mycompany/myapp\n")),Object(o.b)("p",null,"The crucial bit being"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"--network=pravega_default.\n\n")),Object(o.b)("p",null,"Your client should talk to Pravega at"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"tcp://controller:9090.\n")),Object(o.b)("h2",{id:"deploying-external-clients"},"Deploying (External clients)"),Object(o.b)("p",null,"If you intend to run clients outside the swarm, you must provide two additional environment variables,\n",Object(o.b)("inlineCode",{parentName:"p"},"PUBLISHED_ADDRESS")," and ",Object(o.b)("inlineCode",{parentName:"p"},"LISTENING_ADDRESS"),". ",Object(o.b)("inlineCode",{parentName:"p"},"PUBLISHED_ADDRESS")," must be an IP or Hostname that resolves to one or more\nswarm nodes (or a load balancer that sits in front of them). ",Object(o.b)("inlineCode",{parentName:"p"},"LISTENING_ADDRESS")," should always be ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"0.0.0.0"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"PUBLISHED_ADDRESS=1.2.3.4 LISTENING_ADDRESS=0 ZK_URL=zookeeper:2181 HDFS_URL=hdfs:8020 docker stack up --compose-file pravega.yml pravega\n")),Object(o.b)("p",null,"As above, ",Object(o.b)("inlineCode",{parentName:"p"},"ZK_URL")," and ",Object(o.b)("inlineCode",{parentName:"p"},"HDFS_URL")," can be omitted if the services are at their default locations."),Object(o.b)("p",null,"Your client should talk to Pravega at"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"tcp://${PUBLISHED_ADDRESS}:9090`.\n")),Object(o.b)("h2",{id:"scaling-bookkeeper"},"Scaling BookKeeper"),Object(o.b)("p",null,"BookKeeper can be scaled up or down using the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker service scale pravega_bookkeeper=N\n\n")),Object(o.b)("p",null,"As configured in this package, Pravega requires at least ",Object(o.b)("strong",{parentName:"p"},"3 BookKeeper nodes, (i.e., N must be >= 3.)")),Object(o.b)("h2",{id:"scaling-pravega-controller"},"Scaling Pravega Controller"),Object(o.b)("p",null,"Pravega Controller can be scaled up or down using the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker service scale pravega_controller=N\n")),Object(o.b)("h2",{id:"scaling-pravega-segment-store-swarm-only-clients"},"Scaling Pravega Segment Store (Swarm only clients)"),Object(o.b)("p",null,"If you app will run inside the swarm and you didn't run with ",Object(o.b)("inlineCode",{parentName:"p"},"PUBLISHED_ADDRESS"),", you can scale the Segment Store\nthe usual way using the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker service scale pravega_segmentstore=N\n")),Object(o.b)("h2",{id:"scaling-pravega-segment-store-external-clients"},"Scaling Pravega Segment Store (External clients)"),Object(o.b)("p",null,"If you require access to Pravega from outside the swarm and have deployed with ",Object(o.b)("inlineCode",{parentName:"p"},"PUBLISHED_ADDRESS"),", each instance\nof the Segment Store must be deployed as a unique service. This is a cumbersome process, but we've provided a helper\nscript to make it fairly painless:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./scale_segmentstore N\n")),Object(o.b)("h2",{id:"tearing-down"},"Tearing down"),Object(o.b)("p",null,"All services, (including HDFS and ZooKeeper if you've deployed our package) can be destroyed using the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker stack down pravega\n")))}s.isMDXComponent=!0}}]);