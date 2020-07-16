(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(11),o=(n(0),n(241)),c={id:"trace-driven-development",title:"Trace Driven Development",sidebar_label:"Trace Driven Development"},i={id:"trace-driven-development",isDocsHomePage:!1,title:"Trace Driven Development",description:"Dark flows from end user experience through to the backend components. If you",source:"@site/docs/trace-driven-development.md",permalink:"/trace-driven-development",sidebar_label:"Trace Driven Development",sidebar:"docs",previous:{title:"Components",permalink:"/dark-backend-components"},next:{title:"Structured Editing",permalink:"/structured-editing"}},l=[{value:"Sending Requests to Dark",id:"sending-requests-to-dark",children:[{value:"Using Browser &amp; Curl for Requests",id:"using-browser--curl-for-requests",children:[]}]},{value:"Live Values &amp; Play Buttons",id:"live-values--play-buttons",children:[{value:"Replay Entire Trace Button",id:"replay-entire-trace-button",children:[]}]},{value:"Return Values",id:"return-values",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Dark flows from end user experience through to the backend components. If you\nwould like to see any of the code from this document, the sample canvas that\ngoes along with it is:\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://darklang.com/a/sample-introtodark#handler=1175293748"}),"https://darklang.com/a/sample-introtodark")),Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LcQyAfKLLT0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("h2",{id:"sending-requests-to-dark"},"Sending Requests to Dark"),Object(o.b)("p",null,"Send requests to Dark ",Object(o.b)("em",{parentName:"p"},"before writing code"),". There are several ways to do this:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Build your frontend or mobile app first and point your API endpoints at Dark\n(you can host your frontend on Dark by\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/static-assets"}),"uploading your static assets")," via CLI)."),Object(o.b)("li",{parentName:"ol"},"Use another platform that makes requests via REST (Slack, Twilio, Shopify)\nand use Dark with existing webhooks or calls."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Use postman, curl, or another tool of your choice to send test data in the\ncorrect shape to your API endpoints.")," This is the easiest way to get\nstarted, and you can try it out by following the rest of this doc.")),Object(o.b)("h3",{id:"using-browser--curl-for-requests"},"Using Browser & Curl for Requests"),Object(o.b)("h4",{id:"get-requests"},"GET Requests"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open your canvas (darklang.com/a/USERNAME-CANVASNAME)."),Object(o.b)("li",{parentName:"ul"},"In another tab, visit username-canvasname.builtwithdark.com/test (ex:\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://sample-introtodark.builtwithdark.com/test"}),"https://sample-introtodark.builtwithdark.com/test"),")."),Object(o.b)("li",{parentName:"ul"},"Go back to Dark and check in the 404 section.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image9.png",alt:"trace/image9.png"}))),Object(o.b)("p",null,"You\u2019ll be able to create the endpoint and see the full request (including any\nquery params if you add them - i.e. test?name=ellen). Each request shows up as a\ntrace on the left hand side of the handler as a gray dot, or a white dot when\nselected."),Object(o.b)("p",null,'You can work with the selected trace. In this case, the handler is set to return\nthe "accept" field within the header. If the caret is in the text of \u201crequest\u201d\nyou\u2019ll see the full request, in \u201cheaders\u201d the full header, and in this case the\ncaret is in "accept," which means we see only that field to the left.'),Object(o.b)("p",null,"If you do not select a trace, you\u2019ll see spinners for all live values."),Object(o.b)("p",null,"One current limitation is that you can only write code for existing traces\n(trying to access something that doesn\u2019t exist will not allow you to write the\ncode). We\u2019re working on it."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image7.png",alt:"trace/image7.png"}))),Object(o.b)("h4",{id:"post-requests"},"POST Requests"),Object(o.b)("p",null,"Open terminal and curl:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H \'Content-Type: application/json\' https://username-canvasname.builtwithdark.com/test2 -d \'{"test":"test data","info":"test info"}\'\n')),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image11.png",alt:"trace/image11.png"}))),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image1.png",alt:"trace/image1.png"}))),Object(o.b)("p",null,"When you create the route you\u2019ll see the recent traces as white dots on the\nleft. You can select a given trace by clicking on it and then you\u2019ll see all\nexpressions evaluated for that request."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image12.png",alt:"trace/image12.png"}))),Object(o.b)("p",null,"Similarly to the get request, you can work with the real data from the trace. In\nthis case the handler shows ",Object(o.b)("inlineCode",{parentName:"p"},"request.body.info"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image3.png",alt:"trace/image3.png"}))),Object(o.b)("p",null,"You can select which trace you are using when evaluating your code. Below, there\nare three recent traces, and we\u2019re seeing the value of \u201cinfo\u201d for the most\nrecent."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image2.png",alt:"trace/image2.png"}))),Object(o.b)("h2",{id:"live-values--play-buttons"},"Live Values & Play Buttons"),Object(o.b)("p",null,"Once you have requests/traces, you can use them while writing code."),Object(o.b)("p",null,'When you write code, if you put your cursor into the code, you will always see\nthe result of that code for the selected trace on the left hand side. These\nleft-hand-side values are called "live values."'),Object(o.b)("p",null,"As seen above with ",Object(o.b)("inlineCode",{parentName:"p"},"testinfo"),", expressions will automatically show you their\nvalues to the left if they have no side effects. Below, we see the result of the\naddition:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image4.png",alt:"trace/image4.png"}))),Object(o.b)("p",null,"When an expression does have side effects (like changing a value in a datastore\nor calling an external API) it will have a green \u201cplay\u201d or \u201creplay\u201d button that\nallows the developer to ",Object(o.b)("em",{parentName:"p"},"choose")," to run it for the current traces."),Object(o.b)("p",null,"In our earlier request, if we saved ",Object(o.b)("inlineCode",{parentName:"p"},"request.body.info")," to the variable\n",Object(o.b)("inlineCode",{parentName:"p"},"request_info"),", we could then choose to insert it into a datastore. In this\ncase, there\u2019s a play button to generate a new key, and a second one to insert\nthe information:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image8.png",alt:"trace/image8.png"}))),Object(o.b)("p",null,"Once you play the ",Object(o.b)("inlineCode",{parentName:"p"},"DB::generateKey"),", you can see the resulting key, and choose\nto play the ",Object(o.b)("inlineCode",{parentName:"p"},"DB::set")," expression:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image10.png",alt:"trace/image10.png"}))),Object(o.b)("p",null,"When you play ",Object(o.b)("inlineCode",{parentName:"p"},"DB::set"),", you can see the record that was inserted:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image6.png",alt:"trace/image6.png"}))),Object(o.b)("h3",{id:"replay-entire-trace-button"},"Replay Entire Trace Button"),Object(o.b)("p",null,"If you wish to replay the entire trace, you can use the \u201creplay\u201d button next to\nthe hamburger menu in the upper right of the handler."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image14.png",alt:"trace/image14.png"}))),Object(o.b)("h2",{id:"return-values"},"Return Values"),Object(o.b)("p",null,"When on a handler, you\u2019ll also see a live value at the bottom that corresponds\nto the value a handler returns. Dark has implicit returns (more on this in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"functional-aspects"}),"Functional Aspects of Dark"),")."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/trace/image5.png",alt:"trace/image5.png"}))))}u.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(h,i(i({ref:t},s),{},{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);