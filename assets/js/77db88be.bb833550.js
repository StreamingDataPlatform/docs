(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(155)),l={title:"Manual Installation"},i={unversionedId:"pravega/deployment/manual-install",id:"pravega/deployment/manual-install",isDocsHomePage:!1,title:"Manual Installation",description:"\x3c!--",source:"@site/docs/pravega/deployment/manual-install.md",slug:"/pravega/deployment/manual-install",permalink:"/docs/docs/pravega/deployment/manual-install",editUrl:"https://github.com/claudiofahey/pravega/edit/docusaurus/documentation/src/docs/deployment/manual-install.md",version:"current",sidebar:"mainSidebar",previous:{title:"Pravega Deployment Overview",permalink:"/docs/docs/pravega/deployment/deployment"},next:{title:"Deploying in Kubernetes",permalink:"/docs/docs/pravega/deployment/kubernetes-install"}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"HDFS",id:"hdfs",children:[]},{value:"Filesystem",id:"filesystem",children:[]},{value:"Java",id:"java",children:[]},{value:"Zookeeper",id:"zookeeper",children:[]},{value:"Bookkeeper",id:"bookkeeper",children:[]},{value:"Initializing Zookeeper paths",id:"initializing-zookeeper-paths",children:[]},{value:"Running Bookkeeper",id:"running-bookkeeper",children:[]},{value:"Running Bookkeeper with encryption enabled",id:"running-bookkeeper-with-encryption-enabled",children:[]}]},{value:"Recommendations",id:"recommendations",children:[]},{value:"All Nodes",id:"all-nodes",children:[]},{value:"Installation of the Controller",id:"installation-of-the-controller",children:[]},{value:"Installation of the Segment Store",id:"installation-of-the-segment-store",children:[]},{value:"Running a Pravega Cluster with Security enabled",id:"running-a-pravega-cluster-with-security-enabled",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page describes the prerequisites and installation steps to deploy Pravega in a multi-node production environment."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("h3",{id:"hdfs"},"HDFS"),Object(o.b)("p",null,"Setup a HDFS storage cluster running ",Object(o.b)("strong",{parentName:"p"},"HDFS version 2.7+"),". HDFS is used as Tier 2 Storage and must have\nsufficient capacity to store the contents of all the streams. The storage cluster is recommended to be run\nalongside Pravega on separate nodes."),Object(o.b)("h3",{id:"filesystem"},"Filesystem"),Object(o.b)("p",null,"If it is easier to mount a NFS share, then FILESYSTEM can be used in place of HDFS. The following configuration options are necessary to configure the FILESYSTEM as Long Term Storage.\npravegaservice.storage.impl.name = FILESYSTEM\nfilesystem.root = /mnt/tier2\nwhere /mnt/tier2 is replaced with your nfs share and FILESYSTEM is a keyword."),Object(o.b)("h3",{id:"java"},"Java"),Object(o.b)("p",null,"Install the latest Java 8 from ",Object(o.b)("a",{parentName:"p",href:"http://java.oracle.com"},"java.oracle.com"),". Packages are available\nfor all major operating systems."),Object(o.b)("h3",{id:"zookeeper"},"Zookeeper"),Object(o.b)("p",null,"Pravega requires ",Object(o.b)("strong",{parentName:"p"},"Zookeeper 3.6.1"),". At least 3 Zookeeper nodes are recommended for a quorum. No special configuration is required for Zookeeper but it is recommended to use a dedicated cluster for Pravega."),Object(o.b)("p",null,"This specific version of Zookeeper can be downloaded from Apache at ",Object(o.b)("a",{parentName:"p",href:"https://archive.apache.org/dist/zookeeper/zookeeper-3.6.1/apache-zookeeper-3.6.1.tar.gz"},"zookeeper-3.6.1"),"."),Object(o.b)("p",null,"For installing Zookeeper see the ",Object(o.b)("a",{parentName:"p",href:"http://zookeeper.apache.org/doc/r3.6.1/zookeeperStarted.html"},"Getting Started Guide"),"."),Object(o.b)("h3",{id:"bookkeeper"},"Bookkeeper"),Object(o.b)("p",null,"Pravega requires ",Object(o.b)("strong",{parentName:"p"},"Bookkeeper 4.11.1"),". At least 3 Bookkeeper servers are recommended for a quorum."),Object(o.b)("p",null,"This specific version of Bookkeeper can be downloaded from Apache at ",Object(o.b)("a",{parentName:"p",href:"https://archive.apache.org/dist/bookkeeper/bookkeeper-4.11.1/bookkeeper-server-4.11.1-bin.tar.gz"},"bookkeeper-server-4.11.1-bin.tar.gz"),"."),Object(o.b)("p",null,"For installing Bookkeeper see the ",Object(o.b)("a",{parentName:"p",href:"http://bookkeeper.apache.org/docs/4.11.1/getting-started/installation"},"Getting Started Guide"),".\nSome specific Pravega instructions are shown below. All sets are assumed to be run from the ",Object(o.b)("inlineCode",{parentName:"p"},"bookkeeper-server-4.11.1")," directory."),Object(o.b)("h4",{id:"bookkeeper-configuration"},"Bookkeeper Configuration"),Object(o.b)("p",null,"In the file ",Object(o.b)("inlineCode",{parentName:"p"},"conf/bk_server.conf"),", the following configuration options should be implemented:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"metadataServiceUri=zk://localhost:2181/pravega/bookkeeper/ledgers\n\n# Alternatively specify a different path to the storage for /bk\njournalDirectory=/bk/journal\nledgerDirectories=/bk/ledgers\nindexDirectories=/bk/index\n")),Object(o.b)("h3",{id:"initializing-zookeeper-paths"},"Initializing Zookeeper paths"),Object(o.b)("p",null,"The following paths need to be created in Zookeeper. Open the ",Object(o.b)("inlineCode",{parentName:"p"},"zookeeper-3.6.1")," directory on the Zookeeper servers and run the following paths:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"bin/zkCli.sh -server $ZK_URL create /pravega\nbin/zkCli.sh -server $ZK_URL create /pravega/bookkeeper\n")),Object(o.b)("p",null,"Replace ",Object(o.b)("inlineCode",{parentName:"p"},"<$ZK_URL>")," with the IP address of the Zookeeper nodes."),Object(o.b)("h3",{id:"running-bookkeeper"},"Running Bookkeeper"),Object(o.b)("p",null,"The bookie needs the following formatting before starting it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"bin/bookkeeper shell metaformat -nonInteractive\n")),Object(o.b)("p",null,"Start the bookie as mentioned below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"bin/bookkeeper bookie\n")),Object(o.b)("h3",{id:"running-bookkeeper-with-encryption-enabled"},"Running Bookkeeper with encryption enabled"),Object(o.b)("p",null,"Apache BookKeeper can be deployed with TLS enabled. Details can be found ",Object(o.b)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/security/tls/"},"here"),"."),Object(o.b)("hr",null),Object(o.b)("h1",{id:"installing-pravega"},"Installing Pravega"),Object(o.b)("p",null,"For non-production systems, the containers can be used that are provided by the ",Object(o.b)("a",{parentName:"p",href:"/docs/docs/pravega/deployment/docker-swarm"},"Docker")," installation to run non-production HDFS, Zookeeper or Bookkeeper."),Object(o.b)("p",null,"The following two key components of Pravega needs to be run:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Controller"),": The Control plane for Pravega. Installation requires at least one Controller. ","(","Two or more are recommended for HA",")",".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Segment Store"),": The Storage node for Pravega. Installation requires at least one Segment Store."))),Object(o.b)("p",null,"Before we start, the latest Pravega release needs to be downloaded from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pravega/pravega/releases"},"GitHub Releases page"),"."),Object(o.b)("h2",{id:"recommendations"},"Recommendations"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"For a simple 3 node cluster, the following table depicts on layout of the services:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null},"Node 1"),Object(o.b)("th",{parentName:"tr",align:null},"Node 2"),Object(o.b)("th",{parentName:"tr",align:null},"Node 3"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Zookeeper"),Object(o.b)("td",{parentName:"tr",align:null},"X"),Object(o.b)("td",{parentName:"tr",align:null},"X"),Object(o.b)("td",{parentName:"tr",align:null},"X")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Bookkeeper"),Object(o.b)("td",{parentName:"tr",align:null},"X"),Object(o.b)("td",{parentName:"tr",align:null},"X"),Object(o.b)("td",{parentName:"tr",align:null},"X")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Pravega Controller"),Object(o.b)("td",{parentName:"tr",align:null},"X"),Object(o.b)("td",{parentName:"tr",align:null},"X"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Pravega Segment Store"),Object(o.b)("td",{parentName:"tr",align:null},"X"),Object(o.b)("td",{parentName:"tr",align:null},"X"),Object(o.b)("td",{parentName:"tr",align:null},"X")))),Object(o.b)("h2",{id:"all-nodes"},"All Nodes"),Object(o.b)("p",null,"On each node, extract the distribution package to the desired directory as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"tar xfvz pravega-<version>.tgz\ncd pravega-<version>\n")),Object(o.b)("h2",{id:"installation-of-the-controller"},"Installation of the Controller"),Object(o.b)("p",null,"The controller can be run by using the following command. Replace ",Object(o.b)("inlineCode",{parentName:"p"},"<zk-ip>")," with the IP address of the Zookeeper nodes in the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ZK_URL=<zk-ip>:2181 bin/pravega-controller\n")),Object(o.b)("p",null,"Instead specifying the ",Object(o.b)("inlineCode",{parentName:"p"},"<zk-ip>")," on every startup, we can edit the ",Object(o.b)("inlineCode",{parentName:"p"},"conf/controller.conf")," file and change the zk url as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'    zk {\n      url = "<zk-ip>:2181"\n...\n    }\n')),Object(o.b)("p",null,"Then run the controller with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"bin/pravega-controller\n")),Object(o.b)("h2",{id:"installation-of-the-segment-store"},"Installation of the Segment Store"),Object(o.b)("p",null,"In the file ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config.properties"),", make the following changes as mentioned:\nReplace ",Object(o.b)("inlineCode",{parentName:"p"},"<zk-ip>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<controller-ip>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<hdfs-ip>")," with the IPs of the respective services."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"pravegaservice.zk.connect.uri=<zk-ip>:2181\nbookkeeper.zk.connect.uri=<zk-ip>:2181\nautoScale.controller.connect.uri=tcp://<controller-ip>:9090\n\n# Settings required for HDFS\nhdfs.connect.uri=<hdfs-ip>:8020\n")),Object(o.b)("p",null,"After making the configuration changes, the segment store can be run using the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"bin/pravega-segmentstore\n")),Object(o.b)("h2",{id:"running-a-pravega-cluster-with-security-enabled"},"Running a Pravega Cluster with Security enabled"),Object(o.b)("p",null,"Steps for securing a distributed mode cluster can be found ",Object(o.b)("a",{parentName:"p",href:"/docs/docs/pravega/security/securing-distributed-mode-cluster"},"here"),"."),Object(o.b)("p",null,"For detailed information about security configuration parameters for ",Object(o.b)("a",{parentName:"p",href:"/docs/docs/pravega/security/pravega-security-configurations#pravega-controller"},"Controller"),")\nand ",Object(o.b)("a",{parentName:"p",href:"/docs/docs/pravega/security/pravega-security-configurations#pravega-segment-store"},"Segment Store"),",\nsee ","[this]","((../security/pravega-security-configurations.md) document."))}b.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);