(function(e){function a(a){for(var n,r,s=a[0],l=a[1],c=a[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(a);while(m.length)m.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],n=!0,r=1;r<t.length;r++){var s=t[r];0!==i[s]&&(n=!1)}n&&(o.splice(a--,1),e=l(l.s=t[0]))}return e}var n={},r={app:0},i={app:0},o=[];function s(e){return l.p+"js/"+({"materials_box100~materials_kanji25~materials_kanji8":"materials_box100~materials_kanji25~materials_kanji8",materials_box100:"materials_box100",materials_kanji25:"materials_kanji25",materials_kanji8:"materials_kanji8"}[e]||e)+"."+{"materials_box100~materials_kanji25~materials_kanji8":"252bab0e",materials_box100:"e8d06adf",materials_kanji25:"525e115a",materials_kanji8:"93e91988"}[e]+".js"}function l(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var a=[],t={"materials_box100~materials_kanji25~materials_kanji8":1,materials_box100:1,materials_kanji25:1,materials_kanji8:1};r[e]?a.push(r[e]):0!==r[e]&&t[e]&&a.push(r[e]=new Promise((function(a,t){for(var n="css/"+({"materials_box100~materials_kanji25~materials_kanji8":"materials_box100~materials_kanji25~materials_kanji8",materials_box100:"materials_box100",materials_kanji25:"materials_kanji25",materials_kanji8:"materials_kanji8"}[e]||e)+"."+{"materials_box100~materials_kanji25~materials_kanji8":"be44b188",materials_box100:"d7c08bb2",materials_kanji25:"88c1b374",materials_kanji8:"8d8b814b"}[e]+".css",i=l.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return a()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){c=m[s],u=c.getAttribute("data-href");if(u===n||u===i)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var n=a&&a.target&&a.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],p.parentNode.removeChild(p),t(o)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(a,t){n=i[e]=[a,t]}));a.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var m=new Error;c=function(a){u.onerror=u.onload=null,clearTimeout(p);var t=i[e];if(0!==t){if(t){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",m.name="ChunkLoadError",m.type=n,m.request=r,t[1](m)}i[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(a)},l.m=e,l.c=n,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(t,n,function(a){return e[a]}.bind(null,n));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var m=0;m<c.length;m++)a(c[m]);var p=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("v-navigation-drawer",{attrs:{absolute:"",temporary:"",app:""},model:{value:e.drawer,callback:function(a){e.drawer=a},expression:"drawer"}},[t("v-container",[t("v-list-item",[t("v-list-item-content",[t("v-list-item-title",{staticClass:"title grey--text text--darken-2"},[e._v(" メニュー ")])],1)],1),t("v-divider"),t("v-list",{attrs:{nav:"",dense:""}},e._l(e.navigations,(function(a){return t("v-list-item",{key:a.name,attrs:{to:a.path,title:a.description}},[t("v-list-item-icon",[t("v-icon",[e._v(e._s(a.icon))])],1),t("v-list-item-content",[t("v-list-item-title",[e._v(e._s(a.name))])],1)],1)})),1)],1)],1),t("v-app-bar",{staticClass:"d-print-none",attrs:{color:"primary",dark:"",dense:"",app:""}},[t("v-app-bar-nav-icon",{on:{click:function(a){e.drawer=!e.drawer}}}),t("v-toolbar-title",[e._v(e._s(e.pageTitle))]),t("v-spacer")],1),t("v-content",[t("router-view")],1),t("v-footer",{staticClass:"d-print-none",attrs:{color:"primary",dark:"",app:""}},[t("v-layout",{attrs:{"justify-center":"","align-center":""}},[e._v(" ©︎ Copyright Seekers ")])],1)],1)},i=[],o=(t("7db0"),t("b0c0"),{name:"App",data:function(){return{pageTitle:"Tiny Tips",drawer:!1,navigations:[{name:"Home",icon:"mdi-home",path:"/",pageTitle:"全てのメニュー",description:"全てのメニューを表示します。"},{name:"100マス計算",icon:"mdi-calculator-variant",path:"/materials/box100",description:"たし算、ひき算、かけ算。できるだけ早く、できるだけ正確に100マス計算。"},{name:"漢字書くのだ！",icon:"mdi-pen",path:"/materials/kanji8",description:"漢字を丁寧に書く練習。"},{name:"漢字書くのだ！（旧）",icon:"mdi-pen",path:"/materials/kanji25",description:"ボツ案"},{name:"問い合わせ",icon:"mdi-account-box",path:"/contact",description:"何か気になることがあればこちらまで。"}]}},created:function(){this.updatePageTitle()},updated:function(){this.updatePageTitle()},methods:{updatePageTitle:function(){var e=this,a=this.navigations.find((function(a){return a.path==e.$route.path}));this.pageTitle=a.pageTitle||a.name}}}),s=o,l=t("2877"),c=t("6544"),u=t.n(c),m=t("7496"),p=t("40dc"),d=t("5bc1"),f=t("a523"),v=t("a75b"),_=t("ce7e"),b=t("553a"),h=t("132d"),j=t("a722"),k=t("8860"),g=t("da13"),y=t("5d23"),x=t("34c3"),w=t("f774"),V=t("2fa4"),T=t("2a7f"),C=Object(l["a"])(s,r,i,!1,null,null,null),P=C.exports;u()(C,{VApp:m["a"],VAppBar:p["a"],VAppBarNavIcon:d["a"],VContainer:f["a"],VContent:v["a"],VDivider:_["a"],VFooter:b["a"],VIcon:h["a"],VLayout:j["a"],VList:k["a"],VListItem:g["a"],VListItemContent:y["a"],VListItemIcon:x["a"],VListItemTitle:y["b"],VNavigationDrawer:w["a"],VSpacer:V["a"],VToolbarTitle:T["a"]});t("d3b7");var I=t("8c4f"),O=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Menu")},S=[],E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-row",{attrs:{align:"center",justify:"end"}},[t("v-col",{attrs:{cols:"12"}},e._l(e.menu,(function(a){return t("v-card",{key:a.path,staticClass:"ma-2",attrs:{color:a.color,href:a.path,dark:""}},[t("v-card-title",{staticClass:"headline"},[t("v-icon",{staticClass:"ma-2"},[e._v(e._s(a.icon))]),e._v(" "+e._s(a.name)+" ")],1),t("v-card-subtitle",[e._v(" "+e._s(a.description)+" ")])],1)})),1)],1)],1)},M=[],L=(t("4de4"),[{useInMenu:!1,color:"",name:"Home",icon:"mdi-home",path:"/",pageTitle:"全てのメニュー",description:"全てのメニューを表示します。"},{useInMenu:!0,color:"blue",name:"100マス計算",icon:"mdi-calculator-variant",path:"/materials/box100",description:"たし算、ひき算、かけ算。できるだけ早く、できるだけ正確に100マス計算。"},{useInMenu:!0,color:"#952175",name:"漢字書くのだ！",icon:"mdi-pen",path:"/materials/kanji8",description:"漢字を丁寧に書く練習。"},{useInMenu:!1,color:"",name:"漢字書くのだ！（旧）",icon:"mdi-pen",path:"/materials/kanji25",description:"ボツ案"},{useInMenu:!1,color:"",name:"問い合わせ",icon:"mdi-account-box",path:"/contact",description:"何か気になることがあればこちらまで。"}]),A={computed:{menu:function(){return L.filter((function(e){return e.useInMenu}))}}},N=A,B=t("b0af"),H=t("99d9"),$=t("62ad"),D=t("0fd9"),K=Object(l["a"])(N,E,M,!1,null,null,null),q=K.exports;u()(K,{VCard:B["a"],VCardSubtitle:H["a"],VCardTitle:H["b"],VCol:$["a"],VContainer:f["a"],VIcon:h["a"],VRow:D["a"]});var F={name:"Home",components:{Menu:q}},J=F,R=Object(l["a"])(J,O,S,!1,null,null,null),U=R.exports;n["a"].use(I["a"]);var z=[{path:"/",name:"Home",component:U},{path:"/materials/box100",name:"Box100",component:function(){return Promise.all([t.e("materials_box100~materials_kanji25~materials_kanji8"),t.e("materials_box100")]).then(t.bind(null,"0ce9"))}},{path:"/materials/kanji8",name:"Kanji8",component:function(){return Promise.all([t.e("materials_box100~materials_kanji25~materials_kanji8"),t.e("materials_kanji8")]).then(t.bind(null,"b200"))}},{path:"/materials/kanji25",name:"Kanji25",component:function(){return Promise.all([t.e("materials_box100~materials_kanji25~materials_kanji8"),t.e("materials_kanji25")]).then(t.bind(null,"0375"))}}],G=new I["a"]({mode:"history",base:"/",routes:z}),Q=G,W=t("2f62");n["a"].use(W["a"]);var X=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=t("f309");n["a"].use(Y["a"]);var Z=new Y["a"]({}),ee=t("6112"),ae=t.n(ee);n["a"].config.productionTip=!1,n["a"].use(ae.a),new n["a"]({router:Q,store:X,vuetify:Z,render:function(e){return e(P)}}).$mount("#app")}});
//# sourceMappingURL=app.89942551.js.map