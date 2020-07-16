(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(11),i=(a(0),a(241)),l={id:"airtable",title:"Airtable Sample",sidebar_label:"Airtable Sample"},o={id:"tutorials/airtable",isDocsHomePage:!1,title:"Airtable Sample",description:"This guide will walk you through how you can use Airtable\u2019s API to add or update",source:"@site/docs/tutorials/airtable.md",permalink:"/tutorials/airtable",sidebar_label:"Airtable Sample",sidebar:"Tutorials",previous:{title:"Using an External DB",permalink:"/tutorials/external-db"},next:{title:"Freshdesk Sample",permalink:"/tutorials/freshdesk"}},b=[{value:"What You Need",id:"what-you-need",children:[]},{value:"Sending Information From Airtable to Dark",id:"sending-information-from-airtable-to-dark",children:[]},{value:"Putting Information From Airtable into a Dark Datastore",id:"putting-information-from-airtable-into-a-dark-datastore",children:[]},{value:"Sending Information From Dark to Airtable",id:"sending-information-from-dark-to-airtable",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],c={rightToc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide will walk you through how you can use Airtable\u2019s API to add or update\ninformation in Airtable. An Airtable sample canvas is available\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://darklang.com/a/sample-airtable"}),"here"),"."),Object(i.b)("h2",{id:"what-you-need"},"What You Need"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An Airtable account with a Base and table(s) already created. You will likely\nwant to plan what columns you will want to have in your Airtable ahead of\ntime."),Object(i.b)("li",{parentName:"ul"},"Access to the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://airtable.com/api"}),"Airtable API documentation"),"."),Object(i.b)("li",{parentName:"ul"},"Access to your ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://airtable.com/account"}),"Airtable API key"),".")),Object(i.b)("h2",{id:"sending-information-from-airtable-to-dark"},"Sending Information From Airtable to Dark"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a background worker to send data to Airtable."),Object(i.b)("li",{parentName:"ul"},'Add your API key, the Airtable API, and the Airtable table you\u2019re going to\nuse. An Airtable table looks something like this:\n"appYPi96qgCwabzfE/Airtable%20Sample"'),Object(i.b)("li",{parentName:"ul"},"We\u2019ll access the data over Airtable\u2019s JSON API. In Dark, we make HTTP calls\nusing ",Object(i.b)("inlineCode",{parentName:"li"},"HttpClient::get"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Headers in Dark are passed in a dict, but we have convenience functions for\nthem, like ",Object(i.b)("inlineCode",{parentName:"li"},"HttpClient::bearerToken")," and ",Object(i.b)("inlineCode",{parentName:"li"},"HttpClient::jsonContentType"),". You\ncan inspect the headers by clicking on ",Object(i.b)("inlineCode",{parentName:"li"},"header")," to see it\u2019s live value."),Object(i.b)("li",{parentName:"ul"},"To test out the API call, press the Play button."))),Object(i.b)("li",{parentName:"ul"},"If you only want one field, like the Name field, you will want to add \u201cRecord\nType\u201d to your table. To get the exact string for this, reference the Retrieve\na Record section of your\n",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://airtable.com/api"}),"Airtable API documentation"),".")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/img/airtable/image5.png",alt:"airtable/image5.png"}))),Object(i.b)("h2",{id:"putting-information-from-airtable-into-a-dark-datastore"},"Putting Information From Airtable into a Dark Datastore"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a Dark datastore and populate it with the fields you need.")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/img/airtable/image1.png",alt:"airtable/image1.png"}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Next iterate through the results - held in ",Object(i.b)("inlineCode",{parentName:"li"},"allData.body.records"),", and add\nthem to the DB using ",Object(i.b)("inlineCode",{parentName:"li"},"DB::set"),".")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/img/airtable/image4.png",alt:"airtable/image4.png"}))),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Click the play button - your datastore will update.")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/img/airtable/image2.png",alt:"airtable/image2.png"}))),Object(i.b)("h2",{id:"sending-information-from-dark-to-airtable"},"Sending Information From Dark to Airtable"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a background worker to send data to Airtable."),Object(i.b)("li",{parentName:"ul"},"Add your API key, the Airtable API, and the Airtable table you\u2019re going to\nuse. An Airtable table looks something like this:\nappYPi96qgCwabzfE/Airtable%20Sample"),Object(i.b)("li",{parentName:"ul"},"We\u2019ll access the data over Airtable\u2019s JSON API. In Dark, we make HTTP calls\nusing ",Object(i.b)("inlineCode",{parentName:"li"},"HttpClient::get"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Headers in Dark are passed in a dict, but we have convenience functions for\nthem, like ",Object(i.b)("inlineCode",{parentName:"li"},"HttpClient::bearerToken")," and ",Object(i.b)("inlineCode",{parentName:"li"},"HttpClient::jsonContentType"),". You\ncan inspect the headers by clicking on \u2018header\u2019 to see it\u2019s live value."),Object(i.b)("li",{parentName:"ul"},"To test out the API call, press the Play button."))),Object(i.b)("li",{parentName:"ul"},"Create your ",Object(i.b)("inlineCode",{parentName:"li"},"HttpClient::post")," call. Note that to add a new entry, you will\nneed to format your data using ",Object(i.b)("inlineCode",{parentName:"li"},"records")," and ",Object(i.b)("inlineCode",{parentName:"li"},"fields"),". You can click the Play\nbutton next to post to manually populate your Airtable to check if its\nworking. Here, I\u2019ve added one entry, but you can replace the strings with\nvariables to add data however you would like.")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/img/airtable/image6.png",alt:"airtable/image6.png"}))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/img/airtable/image7.png",alt:"airtable/image7.png"}))),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Field/column names in Airtable are case sensitive, so make sure your cases\nmatch everywhere."),Object(i.b)("li",{parentName:"ul"},"Airtable will send over completely empty entries, so if it looks like you\u2019re\ngetting too much data, verify that you don\u2019t have an extra row in your table,\nlike this one:")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/img/airtable/image3.png",alt:"airtable/image3.png"}))))}u.isMDXComponent=!0},241:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);