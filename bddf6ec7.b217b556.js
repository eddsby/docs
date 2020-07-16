(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(11),o=(n(0),n(241)),i={id:"slack-oauth",title:"Setting Up OAuth",sidebar_label:"Setting Up OAuth"},c={id:"slack-apps/slack-oauth",isDocsHomePage:!1,title:"Setting Up OAuth",description:"In order to install your app across multiple Slack workspaces, you will need to",source:"@site/docs/slack-apps/slack-oauth.md",permalink:"/slack-apps/slack-oauth",sidebar_label:"Setting Up OAuth",sidebar:"Slack",previous:{title:"Your First Slack App",permalink:"/slack-apps/slack-intro"},next:{title:"Slack Packages",permalink:"/slack-apps/slack-packages"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to install your app across multiple Slack workspaces, you will need to\nset up OAuth. If you're not familiar with OAuth, the basic explanation is that\nyour app needs to go through a few steps to verify that it is allowed to access\na workspace. The three steps are:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Asking for scopes"),Object(o.b)("li",{parentName:"ol"},"Waiting for a user to approve your requested scopes"),Object(o.b)("li",{parentName:"ol"},"Exchanging a temporary authorization code for an access token")),Object(o.b)("p",null,"You may be familiar with this workflow without even knowing it - it's likely\nwhat occurs anytime you see a screen this like when trying to install something:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/permissions.png",alt:"permissions.png"}))),Object(o.b)("p",null,"In order to set up OAuth on your Slack app, you will need to take a few steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to your Slack app's ",Object(o.b)("strong",{parentName:"li"},"Manage Distribution")," page and add an OAuth redirect\nURL:")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/oauthredirect.png",alt:"oauthredirect.png"}))),Object(o.b)("p",null,"This URL should be in the following format: The URL you provide will need to be\nin the following format:\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://USERNAME-CANVASNAME.builtwithdark.com/oauth-redirect"}),"https://USERNAME-CANVASNAME.builtwithdark.com/oauth-redirect")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Return to the main ",Object(o.b)("strong",{parentName:"p"},"Manage Distribution")," page, copy the Sharable URL and\nthen navigate to it. Follow the steps, making sure to finish with clicking\nAllow.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to your Dark canvas and look in your 404s list to find your\n",Object(o.b)("inlineCode",{parentName:"p"},"oauth-redirect")," handler, complete with trace. Click the ",Object(o.b)("inlineCode",{parentName:"p"},"+")," to add it to\nyour canvas.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a new Datastore called ",Object(o.b)("inlineCode",{parentName:"p"},"tokenStore"),", and add two ",Object(o.b)("inlineCode",{parentName:"p"},"String")," fields:\n",Object(o.b)("inlineCode",{parentName:"p"},"team_id")," and ",Object(o.b)("inlineCode",{parentName:"p"},"access_token"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Return to your ",Object(o.b)("inlineCode",{parentName:"p"},"oauth-redirect")," handler and call the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./slack-packages#oauth"}),Object(o.b)("inlineCode",{parentName:"a"},"Slack::oauth")," function"),". You will need your client\nID and client secret, as well as the token store you created in the previous\nstep. The final parameter is pulling the temporary code out of the request\nusing ",Object(o.b)("inlineCode",{parentName:"p"},"request.queryParams.code"),"."))),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/oauth.png",alt:"oauth.png"}))),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Hit the play button for the function. If you get an error, repeat step 2. If\neverything goes as expected, an entry will be added to your datastore, and it\nwill look locked.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/lockedtoken.png",alt:"lockedtoken.png"}))))}s.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);