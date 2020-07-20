(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["materials_kanji7days"],{"878f":function(t,a,n){},c59c:function(t,a,n){"use strict";var s=n("878f"),i=n.n(s);i.a},f999:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("Kanji7Days")},i=[],e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",{staticClass:"box-container",attrs:{fluid:""}},[n("v-alert",{staticClass:"d-print-none",attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[t._v(" PDFを印刷してご利用ください。対象漢字は順次追加予定です。"),n("br"),t._v(" 学年と対象の漢字："),n("a",{attrs:{href:"https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/syo/koku/001.htm",target:"_blank",rel:"noopener"}},[t._v("学習指導要領「生きる力」")]),t._v("より。"),n("br"),t._v(" 漢字の情報："),n("a",{attrs:{href:"https://mojikiban.ipa.go.jp/mji/",target:"_blank",rel:"noopener"}},[t._v("IPA：MJ文字情報API")]),t._v("より。 ")]),n("v-row",{attrs:{align:"center",justify:"start",dense:""}},[n("v-col",{staticClass:"mr-auto"},[n("div",{staticClass:"headline font-weight-bold"},[t._v(" 漢字を選択！ ")])])],1),t._l(t.selGradeOptions,(function(a){return n("v-row",{key:a.GRADE,attrs:{align:"center",justify:"start",dense:""}},[n("v-col",{staticClass:"mr-auto"},[n("span",{},[t._v(" "+t._s(a.TEXT)+" ")]),t._l(a.KANJI,(function(a){return n("v-btn",{key:a,staticClass:"mx-2",attrs:{small:""},on:{click:function(n){return t.switchKanji(a)}}},[n("v-icon",{staticClass:"mx-2"},[t._v(t._s(a))])],1)}))],2)],1)})),n("v-row",{attrs:{align:"center",justify:"start",dense:""}},[n("v-col",{staticClass:"mr-auto"},[n("div",{staticClass:"headline font-weight-bold"},[t._v(" "+t._s(t.kanji)+" ")])])],1),t._l(t.work.SHEETS,(function(a){return n("v-row",{key:a.KANJI,staticClass:"lighten-5 my-1",attrs:{align:"center",justify:"start",dense:""}},[n("div",{staticClass:"font-weight-bold mx-2"},[t._v(" "+t._s(a.JUKUGO)+" "),n("v-btn",{attrs:{small:""},on:{click:function(n){return t.print(a.JUKUGO)}}},[n("v-icon",{staticClass:"mx-2"},[t._v("mdi-printer")]),t._v(" 印刷する ")],1)],1),n("div",{staticClass:"worksheet-container mx-2"},[n("iframe",{staticClass:"worksheet",attrs:{"data-jukugo":a.JUKUGO,src:"/sample/kanji7days/"+a.URL}}),n("object",{staticClass:"worksheet",attrs:{data:"/sample/kanji7days/"+a.URL,type:"application/pdf",width:"100%",height:"100%"}},[n("p",[n("b",[t._v("表示されない場合はこちらから")]),t._v(": "),n("a",{attrs:{href:"/sample/kanji7days/"+a.URL}},[t._v("PDF をダウンロード")]),t._v(".")])])])])}))],2)},r=[],o=(n("ac1f"),n("1276"),{K1:{KEY:"K1",GRADE:1,TEXT:"小学1年生",KANJI:["一","二"]},K2:{KEY:"K2",GRADE:2,TEXT:"小学2年生",KANJI:["三","四"]}}),c={"一":{KANJI:"一",SHEETS:[{JUKUGO:"一矢",URL:"二.pdf"},{JUKUGO:"一日",URL:"一.pdf"}]},"二":{KANJI:"二",SHEETS:[{JUKUGO:"二日",URL:"二.pdf"}]},"三":{KANJI:"三",SHEETS:[{JUKUGO:"",URL:""},{JUKUGO:"",URL:""},{JUKUGO:"",URL:""},{JUKUGO:"",URL:""}]},"四":{KANJI:"四",SHEETS:[{JUKUGO:"",URL:""},{JUKUGO:"",URL:""},{JUKUGO:"",URL:""},{JUKUGO:"",URL:""}]}},l={KANJI:"materials.Kanji7Days.kanji"},u={data:function(){return{selGradeOptions:[o.K1,o.K2],kanji:"一",work:c["一"],url:null}},created:function(){console.log("/");var t=this.$route.query;try{"kanji"in t&&(t.kanji=t.kanji.split(""))}catch(n){console.log(t),console.error("不正なURLパラメータ。"+n)}var a=this.$cookies.get(l.KANJI);this.kanji=t.kanji||a||"一",this.work=c[this.kanji],this.updateUrl(),this.updateTitle(),this.$cookies.set(l.KANJI,this.kanji)},methods:{switchKanji:function(t){this.kanji=t,this.work=c[this.kanji],this.updateUrl(),this.updateTitle(),this.$cookies.set(l.KANJI,this.kanji)},updateUrl:function(){var t=window.location.origin+this.$route.path;this.url=t+"?kanji="+encodeURI(this.kanji)},updateTitle:function(){document.title="7日間で新しい漢字を覚えよう！ | "+this.kanji},print:function(t){var a=document.querySelector('iframe[data-jukugo="'+t+'"]');a.focus(),a.contentWindow.print()}}},d=u,h=(n("c59c"),n("2877")),U=n("6544"),v=n.n(U),f=n("0798"),k=n("8336"),p=n("62ad"),K=n("a523"),j=n("132d"),_=n("0fd9"),w=Object(h["a"])(d,e,r,!1,null,"9487afcc",null),m=w.exports;v()(w,{VAlert:f["a"],VBtn:k["a"],VCol:p["a"],VContainer:K["a"],VIcon:j["a"],VRow:_["a"]});var J={components:{Kanji7Days:m}},y=J,E=Object(h["a"])(y,s,i,!1,null,null,null);a["default"]=E.exports}}]);
//# sourceMappingURL=materials_kanji7days.a2cb19ac.js.map