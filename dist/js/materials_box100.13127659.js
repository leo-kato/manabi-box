(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["materials_box100"],{"0ce9":function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Box100")},a=[],i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",{staticClass:"box-container",class:{"display-answer":t.displayAnswer}},[e("v-alert",{staticClass:"d-print-none",attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[t._v(" 印刷してご利用ください。"),e("br"),t._v(" 「解答を表示/隠す」ボタンから解答付き・なしを切り替えて印刷ができます。 ")]),e("v-row",{attrs:{align:"center",justify:"start",dense:""}},[e("v-col",{staticClass:"mr-auto"},[e("div",{staticClass:"headline font-weight-bold"},[t._v(" "+t._s(t.operator.TEXT)+" ")]),e("div",{staticClass:"subtitle-1"},[t._v(" No. "+t._s(t.no)+" ")]),e("div",{staticClass:"overline d-print-none"},[e("div",[t._v(" 問題の印刷: "+t._s(t.printed?"済み":"未")+" ")]),e("div",[t._v(" 解答の印刷: "+t._s(t.printedWithAnswer?"済み":"未")+" ")])])]),e("v-col",{staticClass:"d-print-none"},[e("v-row",{staticClass:"ml-auto ",attrs:{dense:""}},[e("v-col",{staticClass:"d-flex justify-end align-center"},[e("v-select",{staticClass:"mx-2",attrs:{items:t.selOperatorOptions,"item-text":"TEXT","item-value":"KEY","return-object":""},model:{value:t.selOperator,callback:function(s){t.selOperator=s},expression:"selOperator"}}),e("v-btn",{staticClass:"ma-2",attrs:{small:""},on:{click:t.switchOperator}},[t._v(" にチャレンジ！ ")])],1),e("v-col",{staticClass:"d-print-none d-flex justify-end align-center"},[e("v-btn",{staticClass:"mx-2",attrs:{small:""},on:{click:t.print}},[e("v-icon",[t._v("mdi-printer")]),t._v(" 印刷する ")],1),e("v-btn",{staticClass:"mx-2",attrs:{small:""},on:{click:t.toggleAnswer}},[e("v-icon",[t._v("mdi-eye")]),t._v(" 解答を"),t.displayAnswer?e("span",[t._v("隠す")]):e("span",[t._v("表示")])],1),e("v-btn",{staticClass:"mx-2",attrs:{small:""},on:{click:t.refresh}},[e("v-icon",[t._v("mdi-refresh")]),e("div",[t._v(" 問題を交換 ")])],1)],1)],1)],1),e("v-col",{staticClass:"ml-auto flex-grow-0 align-center"},[e("qriously",{attrs:{value:t.url,size:100}})],1)],1),e("BasicInput"),e("v-row",{staticClass:"grey lighten-5"},[e("v-col",{attrs:{cols:"12"}},[e("v-row",{staticClass:"flex-nowrap",attrs:{align:"center",justify:"center"}},[e("v-card",{staticClass:"box-cell",attrs:{outlined:"",tile:""}},[e("v-icon",{staticStyle:{"font-size":"1.2rem"}},[t._v(t._s(t.operator.ICON))])],1),t._l(t.cols,(function(s){return e("v-card",{key:s,staticClass:"box-cell",attrs:{outlined:"",tile:""}},[t._v(" "+t._s(s)+" ")])}))],2),t._l(t.rows,(function(s,r){return e("v-row",{key:r,staticClass:"flex-nowrap",attrs:{align:"center",justify:"center"}},[e("v-card",{staticClass:"box-cell",attrs:{outlined:"",tile:""}},[t._v(" "+t._s(s)+" ")]),t._l(t.cols,(function(r,a){return e("v-card",{key:a,staticClass:"box-cell",attrs:{outlined:"",tile:""}},[e("span",{staticClass:"box-cell-answer"},[t._v(" "+t._s(t.operator.CALC(s,r))+" ")])])}))],2)}))],2)],1)],1)},n=[],o=(e("d81d"),e("fb6a"),e("d3b7"),e("ac1f"),e("25f0"),e("1276"),e("ddb0"),e("2909")),l=e("383a"),c={ADDITION:{KEY:"ADDITION",ICON:"mdi-plus",TEXT:"たし算",ROW_NUMBERS:Object(o["a"])(Array(10).keys()),COL_NUMBERS:Object(o["a"])(Array(10).keys()),CALC:function(t,s){return t+s}},ADDITION_EX:{KEY:"ADDITION_EX",ICON:"mdi-plus",TEXT:"たし算(2桁まで)",ROW_NUMBERS:Object(o["a"])(Array(20).keys()),COL_NUMBERS:Object(o["a"])(Array(20).keys()),CALC:function(t,s){return t+s}},SUBTRACT:{KEY:"SUBTRACT",ICON:"mdi-minus",TEXT:"ひき算",ROW_NUMBERS:Object(o["a"])(Array(10).keys()),COL_NUMBERS:Object(o["a"])(Array(10).keys()).map((function(t){return t+9})),CALC:function(t,s){return s-t}},MULTIPLY:{KEY:"MULTIPLY",ICON:"mdi-close",TEXT:"かけ算",ROW_NUMBERS:Object(o["a"])(Array(9).keys()).map((function(t){return t+1})),COL_NUMBERS:Object(o["a"])(Array(9).keys()).map((function(t){return t+1})),CALC:function(t,s){return t*s}}},u={OPERATOR:"materials.Box100.operator"},p={components:{BasicInput:l["a"]},data:function(){return{no:0,displayAnswer:!1,rows:c.ADDITION.ROW_NUMBERS,cols:c.ADDITION.COL_NUMBERS,operator:c.ADDITION,selOperator:c.ADDITION,selOperatorOptions:[c.ADDITION,c.ADDITION_EX,c.SUBTRACT,c.MULTIPLY],printed:!1,printedWithAnswer:!1,url:null}},created:function(){var t=this.$route.query;try{"rows"in t&&(t.rows=t.rows.split(",").map((function(t){return parseInt(t)}))),"cols"in t&&(t.cols=t.cols.split(",").map((function(t){return parseInt(t)})))}catch(e){console.error("不正なURLパラメータ。"+e)}var s=this.$cookies.get(u.OPERATOR);this.operator=c[t.operator]||c[s]||c.ADDITION,this.selOperator=this.operator,this.rows=t.rows||this._randomize(this.operator.ROW_NUMBERS),this.cols=t.cols||this._randomize(this.operator.COL_NUMBERS),this.displayAnswer="answer"in t,this.updateNo(),this.updateUrl(),this.updateTitle(),this.$cookies.set(u.OPERATOR,this.operator.KEY)},methods:{print:function(){window.print(),this.displayAnswer?this.printedWithAnswer=!0:this.printed=!0},toggleAnswer:function(){this.displayAnswer=!this.displayAnswer,this.updateTitle()},switchOperator:function(){this.operator.KEY!=this.selOperator.KEY&&(this.operator=this.selOperator||this.operator,this.refresh())},refresh:function(){this.displayAnswer=!1,this.printed=!1,this.printedWithAnswer=!1,this.rows=this._randomize(this.operator.ROW_NUMBERS),this.cols=this._randomize(this.operator.COL_NUMBERS),this.updateNo(),this.updateUrl(),this.updateTitle(),this.$cookies.set(u.OPERATOR,this.operator.KEY)},updateNo:function(){var t=new Date,s=String(t.getTime()-new Date(t.getFullYear()-1,0,1).getTime());this.no=String(t.getFullYear()%2e3)+s},updateUrl:function(){var t=window.location.origin+this.$route.path;this.url=t+"?rows="+this.rows.toString()+"&cols="+this.cols.toString()+"&operator="+this.operator.KEY+"&answer"},updateTitle:function(){document.title="100マス計算 | "+this.operator.TEXT+(this.displayAnswer?" 解答 ":" 問題 ")+this.no},_randomize:function(t,s){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),a=t[e];t[e]=t[r],t[r]=a}var i=s||10;return t.length>i?t.slice(1,i+1):t}}},d=p,f=(e("846c"),e("2877")),v=e("6544"),h=e.n(v),O=e("0798"),C=e("8336"),_=e("b0af"),w=e("62ad"),m=e("a523"),y=e("132d"),A=e("0fd9"),T=e("b974"),x=Object(f["a"])(d,i,n,!1,null,"6c0817f0",null),E=x.exports;h()(x,{VAlert:O["a"],VBtn:C["a"],VCard:_["a"],VCol:w["a"],VContainer:m["a"],VIcon:y["a"],VRow:A["a"],VSelect:T["a"]});var b={components:{Box100:E}},I=b,R=Object(f["a"])(I,r,a,!1,null,null,null);s["default"]=R.exports},"383a":function(t,s,e){"use strict";var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-row",{staticClass:"basic-input",attrs:{dense:""}},[e("v-row",{staticClass:"ml-auto ",attrs:{justify:"end",dense:""}},[e("v-spacer"),e("v-col",{staticClass:"py-0"},[e("v-text-field",{attrs:{prefix:"名前："}})],1)],1),e("v-row",{staticClass:"ml-auto ",attrs:{justify:"end",dense:""}},[e("v-col",{staticClass:"d-flex py-0"},[e("v-text-field",{attrs:{suffix:"月"}}),e("v-text-field",{attrs:{suffix:"日"}}),e("v-text-field",{attrs:{prefix:"（",suffix:"）"}})],1),e("v-col",{staticClass:"d-flex py-0"},[e("v-text-field",{attrs:{suffix:"分"}}),e("v-text-field",{attrs:{suffix:"秒"}})],1),e("v-col",{staticClass:"d-flex py-0"},[e("v-text-field",{attrs:{suffix:"点"}})],1)],1)],1)},a=[],i=e("2877"),n=e("6544"),o=e.n(n),l=e("62ad"),c=e("0fd9"),u=e("2fa4"),p=e("8654"),d={},f=Object(i["a"])(d,r,a,!1,null,null,null);s["a"]=f.exports;o()(f,{VCol:l["a"],VRow:c["a"],VSpacer:u["a"],VTextField:p["a"]})},"846c":function(t,s,e){"use strict";var r=e("f0c4"),a=e.n(r);a.a},f0c4:function(t,s,e){}}]);
//# sourceMappingURL=materials_box100.13127659.js.map