(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),l=n.n(r),s=(n(9),n(2)),o=n(0);function i(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"http://pankajkumar.ml/",children:"Text editor."}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"http://pankajkumar.ml/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item "})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault ",children:"Enable Darkmode"})]})]})]})})})}n(11);function b(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h1",{children:"Enter Your text here."}),Object(o.jsxs)("div",{className:"mb-3 ",children:[Object(o.jsx)("textarea",{className:"form-control",id:"mybox",onChange:function(e){r(e.target.value)},value:c,rows:"9",style:{backgroundColor:"light"===e.mode?"white":"rgb(10, 10, 128)",color:"light"===e.mode?"black":"white"}}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){var e=c.toUpperCase();r(e)},children:"Convert to UpperCase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){for(var e=c.split("."),t=0;t<e.length;t++)e[t]=e[t][0].toUpperCase()+e[t].substr(1);var n=e.join(".");r(n)},children:"Capitalise Sentence"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){var e=c.toLowerCase();r(e)},children:"Convert to lowercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){for(var t=c.split(" "),n=" ",a=0;a<t.length;a++)t[a].endsWith(".com")&&(n=n+" "+t[a]);" "===n?(e.showalert("There Are no Links present","danger"),r(" ")):r(n)},children:"Find Links"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary my-2 mx-1",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),null===t?e.showalert("What do you want me to Copy..?","danger"):e.showalert("Text Copied to Clipboard","success")},children:"Copy"}),Object(o.jsx)("button",{className:"btn btn-danger my-2 mx-1",onClick:function(){r("")},children:"Clear"})]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Your text consists of: "}),Object(o.jsxs)("p",{children:[c.length," characters and ",c.split(" ").filter((function(e){return 0!==e.length})).length," Words."]}),Object(o.jsx)("h2",{children:"Text Preview:"}),Object(o.jsx)("p",{children:c.length>0?c:"Write some text"})]})]})}var d=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t[0].toUpperCase()+t.slice(1)}(e.alert.type)," "]})," : ",e.alert.message]})})};var m=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],r=function(e,t){c({message:e,type:t}),setTimeout((function(){c(null)}),1300)},l=Object(a.useState)("light"),m=Object(s.a)(l,2),h=m[0],j=m[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{mode:h,toggleMode:function(){"dark"===h?(j("light"),document.body.style.backgroundColor="white",document.body.style.color="#151455",r("Light mode enabled","success")):(j("dark"),document.body.style.backgroundColor="#151455",document.body.style.color="white",r(") mode enabled","dark"))},alert:n}),Object(o.jsx)(d,{alert:n}),Object(o.jsx)(b,{mode:h,showalert:r})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8545e660.chunk.js.map