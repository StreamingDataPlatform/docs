(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(155)),o={title:"Pravega Key Features"},s={unversionedId:"pravega/key-features",id:"pravega/key-features",isDocsHomePage:!1,title:"Pravega Key Features",description:"\x3c!--",source:"@site/docs/pravega/key-features.md",slug:"/pravega/key-features",permalink:"/docs/docs/pravega/key-features",editUrl:"https://github.com/claudiofahey/pravega/edit/docusaurus/documentation/src/docs/key-features.md",version:"current",sidebar:"mainSidebar",previous:{title:"Terminology",permalink:"/docs/docs/pravega/terminology"},next:{title:"Frequently Asked Questions",permalink:"/docs/docs/pravega/faq"}},c=[{value:"Pravega Design Principles",id:"pravega-design-principles",children:[]},{value:"Pravega: Storage Reimagined for a Streaming World",id:"pravega-storage-reimagined-for-a-streaming-world",children:[]},{value:"Exactly Once Semantics",id:"exactly-once-semantics",children:[{value:"Pravega Streams are Ordered",id:"pravega-streams-are-ordered",children:[]}]},{value:"Auto Scaling",id:"auto-scaling",children:[]},{value:"Distributed Computing Primitive",id:"distributed-computing-primitive",children:[]},{value:"Write Efficiency",id:"write-efficiency",children:[]},{value:"Read Efficiency",id:"read-efficiency",children:[]},{value:"Unlimited Retention",id:"unlimited-retention",children:[]},{value:"Storage Efficiency\xa0",id:"storage-efficiency",children:[]}],l={toc:c};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document explains some of the key features of Pravega. \xa0It may be\nadvantageous if you are already familiar with the core ",Object(i.b)("a",{parentName:"p",href:"/docs/docs/pravega/pravega-concepts"},"Pravega Concepts"),"."),Object(i.b)("h2",{id:"pravega-design-principles"},"Pravega Design Principles"),Object(i.b)("p",null,"Pravega was designed to support the new generation of streaming applications.\nApplications that deal with a large amount of data arriving continuously that\nneeds to generate an accurate analysis of that data by considering the factors like:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Delayed data,"),Object(i.b)("li",{parentName:"ul"},"Data arriving out of order,"),Object(i.b)("li",{parentName:"ul"},"Failure conditions.")),Object(i.b)("p",null,"There are several Open Source tools to enable developers to build such applications,\nincluding ",Object(i.b)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink"),", ",Object(i.b)("a",{parentName:"p",href:"https://beam.apache.org/"},"Apache Beam"),", ",Object(i.b)("a",{parentName:"p",href:"https://spark.apache.org/docs/2.2.0/streaming-programming-guide.html"},"Spark Streaming"),", etc.\nThese applications uses the following systems to ingest and store data: ",Object(i.b)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka"),", ",Object(i.b)("a",{parentName:"p",href:"http://activemq.apache.org/"},"Apache ActiveMQ"),", ",Object(i.b)("a",{parentName:"p",href:"https://www.rabbitmq.com/"},"RabbitMQ"),", ",Object(i.b)("a",{parentName:"p",href:"http://cassandra.apache.org/"},"Apache Cassandra"),", ",Object(i.b)("a",{parentName:"p",href:"https://hadoop.apache.org/"},"Apache HDFS"),"."),Object(i.b)("p",null,"Pravega focuses on both ingesting and storing Stream data. Pravega approaches streaming applications from a storage perspective. It enables applications to ingest Stream data continuously and stores it permanently. Such Stream data can be accessed with low latency (order of milliseconds) and also analyzes historical data."),Object(i.b)("p",null,"The design of Pravega incorporates lessons learned from using the ",Object(i.b)("a",{parentName:"p",href:"http://lambda-architecture.net/"},Object(i.b)("strong",{parentName:"a"},"Lambda Architecture")),"\nto build streaming applications and the challenges to deploy streaming applications\nat scale that consistently deliver accurate results in a fault tolerant manner.\nThe Pravega Architecture provides strong durability and consistency guarantees,\ndelivering a rock solid foundation to build streaming applications upon."),Object(i.b)("p",null,"With the Lambda Architecture, the developer uses a complex combination of middleware\ntools that include batch style middleware mainly influenced by ",Object(i.b)("strong",{parentName:"p"},"Hadoop")," and\ncontinuous processing tools like ",Object(i.b)("strong",{parentName:"p"},"Storm, Samza, Kafka")," and others."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Lambda",src:a(223).default})),Object(i.b)("p",null,"In this architecture, batch processing is used to deliver accurate, but potentially\nout of date analysis of data. The second path processes data as it is ingested, and\nin principle the results are inaccurate, which justifies the first\nbatch path. The programming models of the speed layer are different than those used in the\nbatch layer. An implementation of the Lambda Architecture can be difficult to maintain\nand manage in production.\xa0This style of big data application design consequently has\nbeen losing traction. A different kind of architecture has been gaining traction recently\nthat does not rely on a batch processing data path. This architecture is called ",Object(i.b)("a",{parentName:"p",href:"http://milinda.pathirage.org/kappa-architecture.com/"},Object(i.b)("strong",{parentName:"a"},"Kappa")),"."),Object(i.b)("p",null,"The Kappa Architecture style is a reaction to the complexity of the Lambda Architecture\nand relies on components that are designed for streaming, supporting stronger\nsemantics and delivering both fast and accurate data analysis. The Kappa\nArchitecture provides a simpler approach:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Kappa",src:a(224).default})),Object(i.b)("p",null,"There is only one data path to execute, and one implementation of the application logic\nto maintain.\xa0With the right tools, built for the demands of processing\nstreaming data in a fast and accurate fashion, it becomes simpler to design\nand run applications in the space of IoT:(connected cars, finance, risk management, online\nservices, etc.). Using the right tools, it is possible to build such pipelines and serve\napplications that present high volume and demand low latency."),Object(i.b)("p",null,"Applications often require more than one stage of processing. Any practical system for stream\nanalytics must be able to accommodate the composition of stages in the form of data pipelines:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Pipeline",src:a(225).default})),Object(i.b)("p",null,"With data pipelines,\xa0it is important to think of guarantees end-to-end rather than on a\nper component basis. Our goal in Pravega is to enable the design and implementation of data pipelines with strong guarantees end-to-end."),Object(i.b)("h2",{id:"pravega-storage-reimagined-for-a-streaming-world"},"Pravega: Storage Reimagined for a Streaming World"),Object(i.b)("p",null,"Pravega introduces a new storage primitive, a Stream, that matches\ncontinuous processing of unbounded data. \xa0In Pravega, a Stream is a named,\ndurable, append-only and unbounded sequence of bytes. \xa0With this primitive, and\nthe key features discussed in this document, Pravega is an ideal component to\ncombine with Stream processing engines such as ",Object(i.b)("a",{parentName:"p",href:"https://flink.apache.org/"},"Flink")," to build streaming\napplications. Because of Pravega's key features, we imagine that it will be the\nfundamental storage primitive for a new generation of streaming-oriented\nmiddleware."),Object(i.b)("p",null,"Let's examine the key features of Pravega:"),Object(i.b)("h2",{id:"exactly-once-semantics"},"Exactly Once Semantics"),Object(i.b)("p",null,"By exactly once semantics we mean that Pravega ensures that data is not duplicated\nand no event is missed despite failures. Of course, this statement comes with a\nnumber of caveats, like any other system that promises exactly-once semantics, but\nlet's not dive into the gory details here. An important consideration is that\nexactly-once semantics is a natural part of Pravega and has been a goal and part\nof the design from day zero."),Object(i.b)("p",null,"To achieve exactly once semantics, Pravega\xa0",Object(i.b)("a",{parentName:"p",href:"/docs/docs/pravega/pravega-concepts#streams"},"Streams")," are durable, ordered,\nconsistent and ",Object(i.b)("a",{parentName:"p",href:"/docs/docs/pravega/pravega-concepts#transactions"},"transactional"),".\xa0We discuss durable and transactional in separate sections below."),Object(i.b)("h3",{id:"pravega-streams-are-ordered"},"Pravega Streams are Ordered"),Object(i.b)("p",null,"By ordering, we mean that data is observed by Readers in the order it is written.\nIn Pravega, data is written along with an application-defined Routing Key. \xa0\nPravega makes ",Object(i.b)("a",{parentName:"p",href:"/docs/docs/pravega/pravega-concepts#ordering-guarantees"},"ordering guarantees")," in terms of Routing Keys. For example, two Events with the same Routing Key will always be read by a Reader in the order they were\nwritten. Pravega's\xa0ordering guarantees allow data reads to be replayed (e.g.\nwhen applications crash) and the results of replaying the reads will be the\nsame."),Object(i.b)("p",null,'By consistency, we mean all Readers see the same ordered view of data for a\ngiven Routing Key, even in the face of failure. Systems that are "mostly\nconsistent" are not sufficient for building accurate data processing.'),Object(i.b)("p",null,"Systems that provide ",Object(i.b)("strong",{parentName:"p"},'"at least once"')," semantics might present duplication. In\nsuch systems, a data producer might write the same data twice in some scenarios.\nIn Pravega, writes are idempotent, rewrites done as a result of reconnection\ndon't result in data duplication. Note that we make no guarantee when the data\ncoming from the source already contains duplicates. Written data is opaque to\nPravega and it makes no attempt to remove existing duplicates."),Object(i.b)("p",null,"Pravega has not limited the focus to exactly-once semantics for writing, however.\nWe also provide, and are actively working on extending the features, that enable\nexactly-once end-to-end for a data pipeline. The strong consistency guarantees\nthat the Pravega store provides along with the semantics of a data analytics\nengine like Flink enables such end-to-end guarantees."),Object(i.b)("h2",{id:"auto-scaling"},"Auto Scaling"),Object(i.b)("p",null,"Unlike systems with static partitioning, Pravega can automatically scale\nindividual data streams to accommodate changes in data ingestion rate."),Object(i.b)("p",null,"Imagine an IoT application with millions of devices feeding thousands of data\nstreams with information about those devices.\xa0Imagine a pipeline\xa0of Flink jobs\nthat process those Streams to derive business value from all that raw IoT data:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Predicting device failures,"),Object(i.b)("li",{parentName:"ul"},"Optimizing service delivery\xa0through those devices,"),Object(i.b)("li",{parentName:"ul"},"Tailoring a customer's experience when interacting with those devices.")),Object(i.b)("p",null,"Building such an application at\xa0scale is difficult without having the\ncomponents be able to scale automatically as the rate of data increases and\ndecreases."),Object(i.b)("p",null,"With Pravega, it is easy to\xa0elastically and independently scale data ingestion,\nstorage and processing \u2013 orchestrating the scaling of every component in a data\npipeline."),Object(i.b)("p",null,"Pravega's support of ",Object(i.b)("a",{parentName:"p",href:"/docs/docs/pravega/pravega-concepts#elastic-streams-auto-scaling"},"Auto Scaling")," starts with the idea that Streams are partitioned into Stream Segments.\xa0A Stream may have one or more Stream Segments; recall that a Stream Segment is a partition of the Stream associated with a range of Routing Keys.",Object(i.b)("br",{parentName:"p"}),"\n","Any data written into the Stream is written to the Stream Segment associated with the\ndata's Routing Key.\xa0Writers use domain specific meaningful Routing Keys (like\ncustomer ID, Timestamp, Machine ID, etc.) to group similar together. \xa0"),Object(i.b)("p",null,"A Stream Segment is the fundamental unit of parallelism in Pravega Streams.\xa0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Parallel Writes:")," A Stream with multiple Stream Segments can support more parallelism of data\nwrites; multiple Writers writing data into the different Stream Segments\npotentially involving all the Pravega Servers in the cluster.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Parallel reads:")," On the Reader side, the number of Stream Segments represents the maximum degree of read parallelism possible. If a Stream has ",Object(i.b)("em",{parentName:"p"},"N")," Stream Segments, then a Reader Group\nwith ",Object(i.b)("em",{parentName:"p"},"N")," Readers can consume from the Stream in parallel. Increase the number of\nStream Segments, you can increase the number of Readers in the Reader Group to\nincrease the scale of processing the data from that Stream. And of course if\nthe number of Stream Segments decreases, it would be a good idea to reduce the\nnumber of Readers."))),Object(i.b)("p",null,"A Stream can be configured to grow the number of Stream Segments as more data is\nwritten to the Stream, and to shrink when data volume drops off. \xa0We refer to\nthis configuration as the Stream's Service Level Objective or SLO. \xa0Pravega\nmonitors the rate of data input to the Stream and uses the SLO to add or remove\nStream Segments from a Stream. \xa0Segments are added by splitting a Segment.\n\xa0Segments are removed by merging two Segments.\xa0See\xa0",Object(i.b)("a",{parentName:"p",href:"/docs/docs/pravega/pravega-concepts#elastic-streams-auto-scaling"},"Auto Scaling")," for more detail on how\xa0Pravega manages Stream Segments."),Object(i.b)("p",null,"It is possible to coordinate the Auto Scaling of Streams in Pravega with\napplication scale out (in the works).\xa0Using metadata available from Pravega,\napplications can configure\xa0the\xa0scaling of their application components; for\nexample, to drive the number of instances of a Flink job. Alternatively, you\ncould use software such as ",Object(i.b)("a",{parentName:"p",href:"https://www.cloudfoundry.org/"},"Cloud Foundry"),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mesosphere/marathon"},"Mesos/Marathon"),", ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," or the\n",Object(i.b)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker stack")," to deploy new instances of an application to react to increased\nparallelism at the Pravega level, or to terminate instances as Pravega scales\ndown in response to reduced rate of data ingestion."),Object(i.b)("h2",{id:"distributed-computing-primitive"},"Distributed Computing Primitive"),Object(i.b)("p",null,"Pravega is great for distributed applications, such as microservices; it can be\nused as a data storage mechanism, for messaging between microservices and for\nother distributed computing services such as leader election.\xa0"),Object(i.b)("p",null,"State Synchronizer, a part of the Pravega API, is the basis of sharing state\nacross a cluster with consistency and optimistic concurrency.\xa0State Synchronizer is based on a fundamental conditional write operation in Pravega,\nso that data is written only if it would appear at a given position in the\nStream. If a conditional write operation cannot meet the condition, it fails."),Object(i.b)("p",null,"State Synchronizer is therefore a strong synchronization primitive that can be\nused for shared state in a cluster, membership management, leader election and\nother distributed computing scenarios."),Object(i.b)("p",null,"For more information, refer to ",Object(i.b)("a",{parentName:"p",href:"/docs/docs/pravega/state-synchronizer"},"State Synchronizer"),"."),Object(i.b)("h2",{id:"write-efficiency"},"Write Efficiency"),Object(i.b)("p",null,"Pravega write latency is of the order of milliseconds. It seamlessly scales\nto handle high throughput reads and writes from thousands of concurrent\nclients, making it ideal for IoT and other time sensitive applications."),Object(i.b)("p",null,"Streams are light weight, Pravega can support millions of Streams, this frees\nthe application from worrying about static configuration of Streams and preallocating\na small fixed number of Streams and limiting Stream resource."),Object(i.b)("p",null,"Write operations in Pravega are low latency, under ",Object(i.b)("em",{parentName:"p"},"10ms")," to return an\nacknowledgment is returned to a Writer. Furthermore, writes are optimized so\nthat I/O throughput is limited by network bandwidth; \xa0the persistence mechanism\nis not the bottleneck.\xa0Pravega uses Apache BookKeeper to persist all write\noperations. BookKeeper persists and protects the data very efficiently.\nBecause data is protected before the write operation is acknowledged to the\nWriter, data is always durable. As we discuss below, data durability is a\nfundamental characteristic of a storage primitive. To add further efficiency,\nwrites to BookKeeper often involve data from multiple Stream Segments, so the\ncost of persisting data to disk can be amortized over several write operations."),Object(i.b)("p",null,"There is no durability performance trade-off with Pravega."),Object(i.b)("h2",{id:"read-efficiency"},"Read Efficiency"),Object(i.b)("p",null,"A Reader can read from a Stream either at the ",Object(i.b)("strong",{parentName:"p"},"tail")," of\nthe Stream or at any part of the Stream's history. \xa0Unlike some log-based\nsystems that use the same kind of storage for tail reads and writes as well as\nreads to historical data, Pravega uses two types of storage. \xa0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The tail of the Stream is in so-called ",Object(i.b)("a",{parentName:"li",href:"/docs/docs/pravega/pravega-concepts#a-note-on-tiered-storage"},"Tier 1 storage"),"."),Object(i.b)("li",{parentName:"ul"},"The historical part of the Stream is in ",Object(i.b)("a",{parentName:"li",href:"/docs/docs/pravega/pravega-concepts#a-note-on-tiered-storage"},"Tier 2 Storage"),".")),Object(i.b)("p",null,"Pravega uses efficient in-memory read ahead cache, taking advantage of the fact\nthat Streams are usually read in large contiguous chunks and that HDFS is well\nsuited for\xa0those\xa0sort of large, high-throughput reads.\xa0It is also worth noting\nthat tail reads do not impact the performance of writes."),Object(i.b)("h2",{id:"unlimited-retention"},"Unlimited Retention"),Object(i.b)("p",null,"Data in Streams can be retained based on the application needs. It is constrained to the amount of data available, which is unbounded given the use\nof cloud storage in Tier 2. Pravega provides one convenient API to\naccess both ",Object(i.b)("strong",{parentName:"p"},"real-time")," and ",Object(i.b)("strong",{parentName:"p"},"historical data"),". With Pravega, batch and real-time\napplications can both be handled efficiently; ",Object(i.b)("em",{parentName:"p"},"yet another reason why Pravega is\na great storage primitive for Kappa architectures"),"."),Object(i.b)("p",null,"If there is a value to retain old data, why not keep it around?\xa0For example,\nin a machine learning example, you may want to periodically change the model and\ntrain the new version of the model against as much historical data as possible\nto enhance and yield more accurate predictive power of the model.\xa0With Pravega\nauto-tiering, retaining lots of historical data does not affect the performance of\ntail reads and writes.\xa0"),Object(i.b)("p",null,"Size of a stream is not limited by the storage capacity of a single server, but\nrather, it is limited only by the storage capacity of your storage cluster or cloud\nprovider. As cost of storage decreases, the economic incentive to delete data\ngoes away."),Object(i.b)("h2",{id:"storage-efficiency"},"Storage Efficiency\xa0"),Object(i.b)("p",null,"Use Pravega to build pipelines of data processing, combining batch, real-time\nand other applications without duplicating data for every step of the pipeline."),Object(i.b)("p",null,"Consider the following data processing environment:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Real time")," processing using Spark, Flink, and or Storm"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Batch")," processing using Hadoop"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Full text search")," can be performed using Lucene-based or Search mechanism like Elastic Search."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Micro-services")," apps can be supported using one (or several) NoSQL databases.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Pipeline replica",src:a(226).default})),Object(i.b)("p",null,"Using traditional approaches, one set of source data, for example, sensor data\nfrom an IoT app, would be ingested and replicated separately by each system.\nYou would end up with three replicas of the data protected in the pub/sub system, three\ncopies in HDFS, three copies in Lucene and three copies in the NoSQL database. \xa0When we\nconsider the source data is measured in TB, the cost of data replication\nseparated by middleware category becomes prohibitively expensive."),Object(i.b)("p",null,"Consider the same pipeline using Pravega and middleware adapted to use Pravega\nfor its storage:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Single Source Pipeline",src:a(227).default})),Object(i.b)("p",null,"With Pravega, the data is ingested and protected in one place; Pravega provides\nthe single source of truth for the entire pipeline.\xa0Furthermore, with the bulk\nof the data being stored in Tier 2 enabled with erasure coding to efficiently\nprotect the data, the storage cost of the data is substantially reduced."),Object(i.b)("h1",{id:"durability"},"Durability"),Object(i.b)("p",null,"With Pravega, you don't \xa0face a compromise between performance, durability and\nconsistency. Pravega\xa0provides durable storage of streaming data with strong\nconsistency, ordering guarantees and great performance."),Object(i.b)("p",null,"Durability is a fundamental storage primitive requirement. \xa0Storage that could\nlose data is not reliable storage. \xa0Systems based on such storage are not\nproduction quality."),Object(i.b)("p",null,"Once a write operation is acknowledged, the data will never be lost, even when\nfailures occur. This is because Pravega always saves data in protected,\npersistent storage before the write operation returns to the Writer."),Object(i.b)("p",null,"With Pravega, data in the Stream is protected. A Stream can be treated as a\nsystem of record, just as you would treat data stored in databases or files."),Object(i.b)("h1",{id:"transaction-support"},"Transaction Support"),Object(i.b)("p",null,"A developer uses a Pravega Transaction to ensure that a set of events are\nwritten to a Stream atomically."),Object(i.b)("p",null,"A Pravega Transaction is part of Pravega's Writer API.\xa0Data can be written to a\nStream directly through the API, or an application can write data through a\nTransaction. \xa0With Transactions, a Writer can persist data now, and later\ndecide whether the data should be appended to a Stream or abandoned."),Object(i.b)("p",null,"Using a Transaction, data is written to the Stream only when the Transaction is\ncommitted. When the Transaction is committed, all data written to the\nTransaction is atomically appended to the Stream. Because Transactions are\nimplemented in the same way as Stream Segments, data written to a Transaction is\njust as durable as data written directly to a Stream. If a Transaction is\nabandoned (e.g. if the Writer crashes) the Transaction is aborted and all data\nis discarded. Of course, an application can choose to abort the Transaction\nthrough the API if a condition occurs that suggests the Writer should discard\nthe data.\xa0"),Object(i.b)("p",null,'Transactions are key to chaining Flink jobs together. \xa0When a Flink job uses\nPravega as a sink, it\xa0can begin a Transaction, and if it successfully finishes\nprocessing, commit the Transaction, writing the data into its Pravega based\nsink. \xa0If the job fails for some reason, the Transaction times out and data is\nnot written. \xa0When the job is restarted, there is no "partial result" in the\nsink that would need to be managed or cleaned up.'),Object(i.b)("p",null,"Combining Transactions and other key features of Pravega, it is possible to\nchain Flink jobs together, having one job's Pravega based sink be the source for\na downstream Flink job. This provides the ability for an entire pipeline of\nFlink jobs to have end-to-end exactly once, guaranteed ordering of data processing."),Object(i.b)("p",null,"Of course, it is possible for Transactions across multiple Streams be\ncoordinated with Transactions, so that a Flink job can use two or more\nPravega based sinks to provide source input to downstream Flink jobs. \xa0In\naddition, it is possible for application logic to coordinate Pravega\nTransactions with external databases such as Flink's checkpoint store. For more information, see ",Object(i.b)("a",{parentName:"p",href:"/docs/docs/pravega/transactions"},"Transaction")," section."))}d.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,m=p["".concat(o,".").concat(h)]||p[h]||u[h]||i;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},223:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/lambda-4e1765ce463969434ca93ff68f5d7ee2.png"},224:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/kappa-122f0542edf507f550d591d1b45fde36.png"},225:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pipeline-3fb8314564a61ec73ac7da7a5861e364.png"},226:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pipeline.separate.replicas-c4bd3d1d0dd56b171010461bfee4c53e.png"},227:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pipeline.single.source-c69c176fee5847417c1d38d960f50545.png"}}]);