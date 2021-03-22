(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{147:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=r,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return a?n.a.createElement(u,c(c({ref:t},p),{},{components:a})):n.a.createElement(u,c({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),o=(a(0),a(147)),i={title:"Running Pravega in Local Machine"},c={unversionedId:"pravega/deployment/run-local",id:"pravega/deployment/run-local",isDocsHomePage:!1,title:"Running Pravega in Local Machine",description:"\x3c!--",source:"@site/docs/pravega/deployment/run-local.md",slug:"/pravega/deployment/run-local",permalink:"/docs/pravega/deployment/run-local",editUrl:"https://github.com/claudiofahey/pravega/edit/docusaurus/documentation/src/docs/deployment/run-local.md",version:"current"},l=[{value:"Standalone Mode",id:"standalone-mode",children:[{value:"From Source Code",id:"from-source-code",children:[]},{value:"From Installation Package",id:"from-installation-package",children:[]}]},{value:"With Long Term Storage",id:"with-long-term-storage",children:[{value:"From Docker Image",id:"from-docker-image",children:[]}]},{value:"Docker Compose (Distributed Mode)",id:"docker-compose-distributed-mode",children:[]}],p={toc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As an alternative to running Pravega on a cluster of machines, you may run Pravega on a local/single machine. Running Pravega locally on a single host allows you to get started with Pravega quickly. Running Pravega locally is especially suitable for development and testing purposes."),Object(o.b)("p",null,"You may run Pravega on local machine using either of these two options:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#standalone-mode"},"Standalone mode")," deployment: In this option, Pravega server runs in a single process and in-memory."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#long-term-storage"},"Long Term Storage mode")," deployment: In this option, Pravega server runs as a single instance on localhost or a virtual machine with streams persisted on Tier 2"),Object(o.b)("li",{parentName:"ol"},"Distributed mode ",Object(o.b)("a",{parentName:"li",href:"#docker-compose-distributed-mode"},"Docker Compose")," deployment: In this option, Pravega components run on separate processes within the same host.")),Object(o.b)("p",null,"These options are explained in below subsections."),Object(o.b)("h2",{id:"standalone-mode"},"Standalone Mode"),Object(o.b)("p",null,"In standalone mode, the Pravega server is accessible from clients through the ",Object(o.b)("inlineCode",{parentName:"p"},"localhost")," interface only. Controller REST APIs, however, are accessible from remote hosts/machines."),Object(o.b)("p",null,"Security is off by default in Pravega. Please see ",Object(o.b)("a",{parentName:"p",href:"/docs/pravega/security/securing-standalone-mode-cluster"},"this")," document to find how to enable security in standalone mode."),Object(o.b)("p",null,"You can launch a standalone mode server using the following options:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"From ",Object(o.b)("a",{parentName:"li",href:"#from-source-code"},"source code")),Object(o.b)("li",{parentName:"ol"},"From ",Object(o.b)("a",{parentName:"li",href:"#from-installation-package"},"installation package")),Object(o.b)("li",{parentName:"ol"},"From ",Object(o.b)("a",{parentName:"li",href:"#from-docker-image"},"Docker image"))),Object(o.b)("h3",{id:"from-source-code"},"From Source Code"),Object(o.b)("p",null,"Checkout the source code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ git clone https://github.com/pravega/pravega.git\n$ cd pravega\n")),Object(o.b)("p",null,"Build the Pravega standalone mode distribution:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./gradlew startStandalone\n")),Object(o.b)("h3",{id:"from-installation-package"},"From Installation Package"),Object(o.b)("p",null,"Download the Pravega release from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pravega/pravega/releases"},"GitHub Releases"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ tar xfvz pravega-<version>.tgz\n")),Object(o.b)("p",null,"Download and extract either tarball or zip files. Follow the instructions provided for the tar files (same can be applied for zip file) to launch all the components of Pravega on your local machine."),Object(o.b)("p",null,"Run Pravega Standalone:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ pravega-<version>/bin/pravega-standalone\n")),Object(o.b)("h2",{id:"with-long-term-storage"},"With Long Term Storage"),Object(o.b)("p",null,"When the streams are required to be persisted between server restarts, a Tier 2 storage is required by Pravega. For example, a mounted NFS share can be used as Tier 2 storage. Only the Segment Store requires its host to be configured with this storage. The Controller and Segment Store are run as different processes. These steps are described in ",Object(o.b)("a",{parentName:"p",href:"/docs/pravega/deployment/manual-install"},"Manual Installation"),"."),Object(o.b)("h3",{id:"from-docker-image"},"From Docker Image"),Object(o.b)("p",null,"The below command will download and run Pravega from the container image on docker hub."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," We must replace the ",Object(o.b)("inlineCode",{parentName:"p"},"<ip>")," with the IP of our machine to connect to Pravega from our local machine. Optionally we can replace ",Object(o.b)("inlineCode",{parentName:"p"},"latest")," with the version of Pravega as per the requirement."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker run -it -e HOST_IP=<ip> -p 9090:9090 -p 12345:12345 pravega/pravega:latest standalone\n")),Object(o.b)("h2",{id:"docker-compose-distributed-mode"},"Docker Compose (Distributed Mode)"),Object(o.b)("p",null,"Unlike other options for running locally, the Docker Compose option runs a full deployment of Pravega\nin distributed mode. It contains containers for running Zookeeper, Bookkeeper and HDFS. Hence Pravega operates as if it would in production. This is the easiest way to get started with the standalone option but requires additional resources."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Ensure that your host machine meets the following prerequisites:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It has Docker ",Object(o.b)("inlineCode",{parentName:"li"},"1.12")," or later installed."),Object(o.b)("li",{parentName:"ul"},"It has Docker Compose installed."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pravega/pravega/tree/master/docker/compose/docker-compose.yml"},"docker-compose.yml")," file from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pravega/pravega"},"Pravega")," GitHub repository."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ wget https://raw.githubusercontent.com/pravega/pravega/master/docker/compose/docker-compose.yml\n")),Object(o.b)("p",{parentName:"li"},"Alternatively, clone the Pravega repository to fetch the code."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ git clone https://github.com/pravega/pravega.git\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to the directory containing Docker Compose configuration ",Object(o.b)("inlineCode",{parentName:"p"},".yml")," files."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ cd /path/to/pravega/docker/compose\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add HOST_IP as an environment variable with the value as the IP address of the host."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ export HOST_IP=<HOST_IP>\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following command to start a deployment comprising of multiple Docker containers, as specified in the\n",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ docker-compose up -d\n")),Object(o.b)("p",{parentName:"li"},"To use one of the other files in the directory, use the ",Object(o.b)("inlineCode",{parentName:"p"},"-f")," option to specify the file."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ docker-compose up -d -f docker-compose-nfs.yml\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Verify that the deployment is up and running."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ docker-compose ps\n")))),Object(o.b)("p",null,"Clients can then connect to the Controller at ",Object(o.b)("inlineCode",{parentName:"p"},"<HOST_IP>:9090"),"."),Object(o.b)("p",null,"To access the Pravega Controller ",Object(o.b)("inlineCode",{parentName:"p"},"REST")," API, invoke it using a URL of the form ",Object(o.b)("inlineCode",{parentName:"p"},"http://<HOST_IP>:10080/v1/scopes")," (where\n",Object(o.b)("inlineCode",{parentName:"p"},"/scopes")," is one of the many endpoints that the API supports)."))}s.isMDXComponent=!0}}]);