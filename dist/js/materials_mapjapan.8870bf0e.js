(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["materials_mapjapan"],{b03f:function(a,e,t){"use strict";var l=t("c37b"),n=t.n(l);n.a},c37b:function(a,e,t){},ea41:function(a,e,t){"use strict";t.r(e);var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("MapJapan")},n=[],i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-container",{staticClass:"box-container",attrs:{fluid:""}},[t("v-alert",{staticClass:"d-print-none",attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[a._v(" 印刷してご利用ください。"),t("br"),a._v(" 「ヒントを表示/隠す」ボタンから県名・県庁所在地付き・なしを切り替えて印刷ができます。 ")]),t("v-row",{attrs:{align:"center",justify:"start",dense:""}},[t("v-col",{staticClass:"mr-auto"},[t("div",{staticClass:"headline font-weight-bold"},[a._v(" "+a._s(a.range.TEXT)+" ")]),t("div",{staticClass:"subtitle-1"},[a._v(" No. "+a._s(a.no)+" ")]),t("div",{staticClass:"overline d-print-none"},[t("div",[a._v(" 印刷: "+a._s(a.printed?"済み":"未")+" ")])])]),t("v-col",{staticClass:"d-print-none"},[t("v-row",{staticClass:"ml-auto ",attrs:{dense:""}},[t("v-col",{staticClass:"d-flex justify-end align-center"},[t("v-select",{staticClass:"mx-2",attrs:{items:a.selRangeOptions,"item-text":"TEXT","item-value":"KEY","return-object":""},model:{value:a.selRange,callback:function(e){a.selRange=e},expression:"selRange"}}),t("v-btn",{staticClass:"mx-2",attrs:{small:""},on:{click:a.switchRange}},[a._v(" にチャレンジ！ ")])],1),t("v-col",{staticClass:"d-flex justify-end align-center"},[t("v-btn",{staticClass:"mx-2",attrs:{small:""},on:{click:a.print}},[t("v-icon",[a._v("mdi-printer")]),a._v(" 印刷する ")],1),t("v-btn",{staticClass:"mx-2",attrs:{small:""},on:{click:a.toggleAnswer}},[t("v-icon",[a._v("mdi-eye")]),a._v(" ヒントを"),a.displayAnswer?t("span",[a._v("隠す")]):t("span",[a._v("表示")])],1),t("v-btn",{staticClass:"mx-2",attrs:{disabled:!a.canRefresh,small:""},on:{click:a.refresh}},[t("v-icon",[a._v("mdi-refresh")]),a._v(" 県を交換 ")],1)],1)],1)],1),t("v-col",{staticClass:"ml-auto flex-grow-0 align-center ma-0"},[t("qriously",{attrs:{value:a.url,size:90}})],1)],1),t("BasicInputSingle"),a._l(a.prefectures,(function(e){return t("v-layout",{key:e.pref_no},[t("v-col",{staticClass:"px-1 py-0"},[t("v-row",{attrs:{dense:""}},[t("small",[a._v(a._s(e.pref_kana)+" "),"REGION_RANDOM"===a.range.KEY?t("span",[a._v("（"+a._s(e.region)+"）")]):a._e()])]),t("v-row",{staticClass:"lighten-5 my-0 ",attrs:{align:"center",justify:"start",dense:""}},[t("v-col",{staticClass:"d-flex flex-grow-0 mx-1 pref"},[a._l(e.pref.split(""),(function(e){return t("v-card",{key:e,staticClass:"box-cell kanji-cell flex-grow-0 flex-shrink-0 mx-0",attrs:{outlined:"",tile:""}},[a.displayAnswer?t("div",{staticClass:"kanji"},[a._v(" "+a._s(e)+" ")]):a._e()])})),2==e.pref.length?t("v-card",{staticClass:"box-cell kanji-cell flex-grow-0 flex-shrink-0 mx-0",staticStyle:{visibility:"hidden"},attrs:{outlined:"",tile:""}}):a._e()],2),a._l(2,(function(l){return t("v-col",{key:l,staticClass:"d-flex flex-grow-0 mx-1 pref"},[a._l(e.pref.split(""),(function(a){return t("v-card",{key:a,staticClass:"box-cell kanji-cell flex-grow-0 flex-shrink-0 mx-0",attrs:{outlined:"",tile:""}})})),2==e.pref.length?t("v-card",{staticClass:"box-cell kanji-cell flex-grow-0 flex-shrink-0 mx-0",staticStyle:{visibility:"hidden"},attrs:{outlined:"",tile:""}}):a._e()],2)})),t("v-col",{staticClass:"flex-grow-1 mx-1 capital mx-2"},[t("v-row",{attrs:{dense:""}},[t("small",[a._v("県庁所在地")])]),t("v-row",{staticClass:"d-flex flex-nowrap",attrs:{dense:""}},[t("div",{staticClass:"flex-grow-0"},[a._v("（")]),t("div",{staticClass:"flex-grow-1 flex-shrink-1 mx-2 capital-answer"},[a.displayAnswer?t("span",[a._v(a._s(e.capital_full))]):a._e()]),t("div",{staticClass:"flex-grow-0"},[a._v("）")])])],1)],2)],1)],1)}))],2)},r=[],p=(t("4de4"),t("7db0"),t("a15b"),t("d81d"),t("fb6a"),t("ac1f"),t("1276"),t("f236")),f=[{region:"北海道・東北地方",pref_no:1,pref_full:"北海道",pref:"北海道",pref_kana:"ほっかいどう",pref_en:"hokkaido",capital_full:"札幌市",capital:"札幌",capital_kana:"さっぽろ",capital_en:"sapporo"},{region:"北海道・東北地方",pref_no:2,pref_full:"青森県",pref:"青森",pref_kana:"あおもり",pref_en:"aomori",capital_full:"青森市",capital:"青森",capital_kana:"あおもり",capital_en:"aomori"},{region:"北海道・東北地方",pref_no:3,pref_full:"岩手県",pref:"岩手",pref_kana:"いわて",pref_en:"iwate",capital_full:"盛岡市",capital:"盛岡",capital_kana:"もりおか",capital_en:"morioka"},{region:"北海道・東北地方",pref_no:4,pref_full:"宮城県",pref:"宮城",pref_kana:"みやぎ",pref_en:"miyagi",capital_full:"仙台市",capital:"仙台",capital_kana:"せんだい",capital_en:"sendai"},{region:"北海道・東北地方",pref_no:5,pref_full:"秋田県",pref:"秋田",pref_kana:"あきた",pref_en:"akita",capital_full:"秋田市",capital:"秋田",capital_kana:"あきた",capital_en:"akita"},{region:"北海道・東北地方",pref_no:6,pref_full:"山形県",pref:"山形",pref_kana:"やまがた",pref_en:"yamagata",capital_full:"山形市",capital:"山形",capital_kana:"やまがた",capital_en:"yamagata"},{region:"北海道・東北地方",pref_no:7,pref_full:"福島県",pref:"福島",pref_kana:"ふくしま",pref_en:"fukushima",capital_full:"福島市",capital:"福島",capital_kana:"ふくしま",capital_en:"fukushima"},{region:"関東地方",pref_no:8,pref_full:"茨城県",pref:"茨城",pref_kana:"いばらき",pref_en:"ibaraki",capital_full:"水戸市",capital:"水戸",capital_kana:"みと",capital_en:"mito"},{region:"関東地方",pref_no:9,pref_full:"栃木県",pref:"栃木",pref_kana:"とちぎ",pref_en:"tochigi",capital_full:"宇都宮市",capital:"宇都宮",capital_kana:"うつのみや",capital_en:"utsunomiya"},{region:"関東地方",pref_no:10,pref_full:"群馬県",pref:"群馬",pref_kana:"ぐんま",pref_en:"gunma",capital_full:"前橋市",capital:"前橋",capital_kana:"まえばし",capital_en:"maebashi"},{region:"関東地方",pref_no:11,pref_full:"埼玉県",pref:"埼玉",pref_kana:"さいたま",pref_en:"saitama",capital_full:"さいたま市",capital:"さいたま",capital_kana:"さいたま",capital_en:"saitama"},{region:"関東地方",pref_no:12,pref_full:"千葉県",pref:"千葉",pref_kana:"ちば",pref_en:"chiba",capital_full:"千葉市",capital:"千葉",capital_kana:"ちば",capital_en:"chiba"},{region:"関東地方",pref_no:13,pref_full:"東京都",pref:"東京",pref_kana:"とうきょう",pref_en:"tokyo",capital_full:"新宿区",capital:"新宿",capital_kana:"しんじゅく",capital_en:"shinjuku"},{region:"関東地方",pref_no:14,pref_full:"神奈川県",pref:"神奈川",pref_kana:"かながわ",pref_en:"kanagawa",capital_full:"横浜市",capital:"横浜",capital_kana:"よこはま",capital_en:"yokohama"},{region:"中部地方",pref_no:15,pref_full:"新潟県",pref:"新潟",pref_kana:"にいがた",pref_en:"niigata",capital_full:"新潟市",capital:"新潟",capital_kana:"にいがた",capital_en:"niigata"},{region:"中部地方",pref_no:16,pref_full:"富山県",pref:"富山",pref_kana:"とやま",pref_en:"toyama",capital_full:"富山市",capital:"富山",capital_kana:"とやま",capital_en:"toyama"},{region:"中部地方",pref_no:17,pref_full:"石川県",pref:"石川",pref_kana:"いしかわ",pref_en:"ishikawa",capital_full:"金沢市",capital:"金沢",capital_kana:"かなざわ",capital_en:"kanazawa"},{region:"中部地方",pref_no:18,pref_full:"福井県",pref:"福井",pref_kana:"ふくい",pref_en:"fukui",capital_full:"福井市",capital:"福井",capital_kana:"ふくい",capital_en:"fukui"},{region:"中部地方",pref_no:19,pref_full:"山梨県",pref:"山梨",pref_kana:"やまなし",pref_en:"yamanashi",capital_full:"甲府市",capital:"甲府",capital_kana:"こうふ",capital_en:"kofu"},{region:"中部地方",pref_no:20,pref_full:"長野県",pref:"長野",pref_kana:"ながの",pref_en:"nagano",capital_full:"長野市",capital:"長野",capital_kana:"ながの",capital_en:"nagano"},{region:"中部地方",pref_no:21,pref_full:"岐阜県",pref:"岐阜",pref_kana:"ぎふ",pref_en:"gifu",capital_full:"岐阜市",capital:"岐阜",capital_kana:"ぎふ",capital_en:"gifu"},{region:"中部地方",pref_no:22,pref_full:"静岡県",pref:"静岡",pref_kana:"しずおか",pref_en:"shizuoka",capital_full:"静岡市",capital:"静岡",capital_kana:"しずおか",capital_en:"shizuoka"},{region:"中部地方",pref_no:23,pref_full:"愛知県",pref:"愛知",pref_kana:"あいち",pref_en:"aichi",capital_full:"名古屋市",capital:"名古屋",capital_kana:"なごや",capital_en:"nagoya"},{region:"近畿地方",pref_no:24,pref_full:"三重県",pref:"三重",pref_kana:"みえ",pref_en:"mie",capital_full:"津市",capital:"津",capital_kana:"つ",capital_en:"tsu"},{region:"近畿地方",pref_no:25,pref_full:"滋賀県",pref:"滋賀",pref_kana:"しが",pref_en:"shiga",capital_full:"大津市",capital:"大津",capital_kana:"おおつ",capital_en:"otsu"},{region:"近畿地方",pref_no:26,pref_full:"京都府",pref:"京都",pref_kana:"きょうと",pref_en:"kyoto",capital_full:"京都市",capital:"京都",capital_kana:"きょうと",capital_en:"kyouto"},{region:"近畿地方",pref_no:27,pref_full:"大阪府",pref:"大阪",pref_kana:"おおさか",pref_en:"osaka",capital_full:"大阪市",capital:"大阪",capital_kana:"おおさか",capital_en:"osaka"},{region:"近畿地方",pref_no:28,pref_full:"兵庫県",pref:"兵庫",pref_kana:"ひょうご",pref_en:"hyogo",capital_full:"神戸市",capital:"神戸",capital_kana:"こうべ",capital_en:"koube"},{region:"近畿地方",pref_no:29,pref_full:"奈良県",pref:"奈良",pref_kana:"なら",pref_en:"nara",capital_full:"奈良市",capital:"奈良",capital_kana:"なら",capital_en:"nara"},{region:"近畿地方",pref_no:30,pref_full:"和歌山県",pref:"和歌山",pref_kana:"わやかま",pref_en:"wakayama",capital_full:"和歌山市",capital:"和歌山",capital_kana:"わかやま",capital_en:"wakayama"},{region:"中国・四国地方",pref_no:31,pref_full:"鳥取県",pref:"鳥取",pref_kana:"とっとり",pref_en:"tottori",capital_full:"鳥取市",capital:"鳥取",capital_kana:"とっとり",capital_en:"tottori"},{region:"中国・四国地方",pref_no:32,pref_full:"島根県",pref:"島根",pref_kana:"しまね",pref_en:"shimane",capital_full:"松江市",capital:"松江",capital_kana:"まつえ",capital_en:"matsue"},{region:"中国・四国地方",pref_no:33,pref_full:"岡山県",pref:"岡山",pref_kana:"おかやま",pref_en:"okayama",capital_full:"岡山市",capital:"岡山",capital_kana:"おかやま",capital_en:"okayama"},{region:"中国・四国地方",pref_no:34,pref_full:"広島県",pref:"広島",pref_kana:"ひろしま",pref_en:"hiroshima",capital_full:"広島市",capital:"広島",capital_kana:"ひろしま",capital_en:"hiroshima"},{region:"中国・四国地方",pref_no:35,pref_full:"山口県",pref:"山口",pref_kana:"やまぐち",pref_en:"yamaguchi",capital_full:"山口市",capital:"山口",capital_kana:"やまぐち",capital_en:"yamaguchi"},{region:"中国・四国地方",pref_no:36,pref_full:"徳島県",pref:"徳島",pref_kana:"とくしま",pref_en:"tokushima",capital_full:"徳島市",capital:"徳島",capital_kana:"とくしま",capital_en:"tokushima"},{region:"中国・四国地方",pref_no:37,pref_full:"香川県",pref:"香川",pref_kana:"かがわ",pref_en:"kagawa",capital_full:"高松市",capital:"高松",capital_kana:"たかまつ",capital_en:"takamatsu"},{region:"中国・四国地方",pref_no:38,pref_full:"愛媛県",pref:"愛媛",pref_kana:"えひめ",pref_en:"ehime",capital_full:"松山市",capital:"松山",capital_kana:"まつやま",capital_en:"matsuyama"},{region:"中国・四国地方",pref_no:39,pref_full:"高知県",pref:"高知",pref_kana:"こうち",pref_en:"kochi",capital_full:"高知市",capital:"高知",capital_kana:"こうち",capital_en:"kochi"},{region:"九州・沖縄地方",pref_no:40,pref_full:"福岡県",pref:"福岡",pref_kana:"ふくおか",pref_en:"fukuoka",capital_full:"福岡市",capital:"福岡",capital_kana:"ふくおか",capital_en:"fukuoka"},{region:"九州・沖縄地方",pref_no:41,pref_full:"佐賀県",pref:"佐賀",pref_kana:"さが",pref_en:"saga",capital_full:"佐賀市",capital:"佐賀",capital_kana:"さが",capital_en:"saga"},{region:"九州・沖縄地方",pref_no:42,pref_full:"長崎県",pref:"長崎",pref_kana:"ながさき",pref_en:"nagasaki",capital_full:"長崎市",capital:"長崎",capital_kana:"ながさき",capital_en:"nagasaki"},{region:"九州・沖縄地方",pref_no:43,pref_full:"熊本県",pref:"熊本",pref_kana:"くまもと",pref_en:"kumamoto",capital_full:"熊本市",capital:"熊本",capital_kana:"くまもと",capital_en:"kumamoto"},{region:"九州・沖縄地方",pref_no:44,pref_full:"大分県",pref:"大分",pref_kana:"おおいた",pref_en:"oita",capital_full:"大分市",capital:"大分",capital_kana:"おおいた",capital_en:"oita"},{region:"九州・沖縄地方",pref_no:45,pref_full:"宮崎県",pref:"宮崎",pref_kana:"みやざき",pref_en:"miyazaki",capital_full:"宮崎市",capital:"宮崎",capital_kana:"みやざき",capital_en:"miyazaki"},{region:"九州・沖縄地方",pref_no:46,pref_full:"鹿児島県",pref:"鹿児島",pref_kana:"かごしま",pref_en:"kagoshima",capital_full:"鹿児島市",capital:"鹿児島",capital_kana:"かごしま",capital_en:"kagoshima"},{region:"九州・沖縄地方",pref_no:47,pref_full:"沖縄県",pref:"沖縄",pref_kana:"おきなわ",pref_en:"okinawa",capital_full:"那覇市",capital:"那覇",capital_kana:"なは",capital_en:"naha"}],_={REGION_01:{KEY:"REGION_01",TEXT:"北海道・東北地方",PREFECTURES:f.filter((function(a){return"北海道・東北地方"==a.region}))},REGION_02:{KEY:"REGION_02",TEXT:"関東地方",PREFECTURES:f.filter((function(a){return"関東地方"==a.region}))},REGION_03:{KEY:"REGION_03",TEXT:"中部地方",PREFECTURES:f.filter((function(a){return"中部地方"==a.region}))},REGION_04:{KEY:"REGION_04",TEXT:"近畿地方",PREFECTURES:f.filter((function(a){return"近畿地方"==a.region}))},REGION_05:{KEY:"REGION_05",TEXT:"中国・四国地方",PREFECTURES:f.filter((function(a){return"中国・四国地方"==a.region}))},REGION_06:{KEY:"REGION_06",TEXT:"九州・沖縄地方",PREFECTURES:f.filter((function(a){return"九州・沖縄地方"==a.region}))},REGION_RANDOM:{KEY:"REGION_RANDOM",TEXT:"全国（ランダム）",PREFECTURES:f}},c={RANGE:"materials.MapJapan.range"},s={components:{BasicInputSingle:p["a"]},data:function(){return{no:0,displayAnswer:!0,prefectures:[],range:_.REGION_RANDOM,selRange:_.REGION_RANDOM,selRangeOptions:[_.REGION_RANDOM,_.REGION_01,_.REGION_02,_.REGION_03,_.REGION_04,_.REGION_05,_.REGION_06],printed:!1,url:null}},computed:{canRefresh:function(){return this.range.KEY==_.REGION_RANDOM.KEY}},created:function(){var a=this.$route.query;try{"prefectures"in a&&(a.prefectures=a.prefectures.split(",").map((function(a){return f.find((function(e){return e.pref_no==a}))})))}catch(t){console.log(a),console.error("不正なURLパラメータ。"+t)}var e=this.$cookies.get(c.RANGE);this.range=_[a.range]||_[e]||_.REGION_RANDOM,this.selRange=this.range,this.prefectures=a.prefectures||this.draw(this.range.PREFECTURES,this.range.KEY===_.REGION_RANDOM.KEY,9),this.updateNo(),this.updateUrl(),this.updateTitle(),this.$cookies.set(c.RANGE,this.range.KEY)},methods:{print:function(){window.print(),this.printed=!0},toggleAnswer:function(){this.displayAnswer=!this.displayAnswer},switchRange:function(){this.range.KEY!=this.selRange.KEY&&(this.range=this.selRange||this.range,this.refresh())},refresh:function(){this.printed=!1,this.prefectures=this.draw(this.range.PREFECTURES,this.range.KEY===_.REGION_RANDOM.KEY,9),console.log(this.prefectures),this.updateNo(),this.updateUrl(),this.updateTitle(),this.$cookies.set(c.RANGE,this.range.KEY)},updateNo:function(){var a=new Date,e=String(a.getTime()-new Date(a.getFullYear()-1,0,1).getTime());this.no=String(a.getFullYear()%2e3)+e},updateUrl:function(){var a=window.location.origin+this.$route.path;this.url=a+"?range="+this.range.KEY+"&prefectures="+encodeURI(this.prefectures.map((function(a){return a.pref_no})).join(","))},updateTitle:function(){document.title="都道府県って難しい！ | "+this.range.TEXT+" "+this.no},draw:function(a,e,t){var l=e||!1;return l?this.random_draw(a,t):a},random_draw:function(a,e){for(var t=a.length-1;t>0;t--){var l=Math.floor(Math.random()*(t+1)),n=a[t];a[t]=a[l],a[l]=n}var i=e||9;return a.length>i?a.slice(1,i+1):a}}},o=s,u=(t("b03f"),t("2877")),k=t("6544"),g=t.n(k),d=t("0798"),h=t("8336"),m=t("b0af"),v=t("62ad"),E=t("a523"),R=t("132d"),x=t("a722"),w=t("0fd9"),y=t("b974"),C=Object(u["a"])(o,i,r,!1,null,"571bdc72",null),N=C.exports;g()(C,{VAlert:d["a"],VBtn:h["a"],VCard:m["a"],VCol:v["a"],VContainer:E["a"],VIcon:R["a"],VLayout:x["a"],VRow:w["a"],VSelect:y["a"]});var O={components:{MapJapan:N}},b=O,T=Object(u["a"])(b,l,n,!1,null,null,null);e["default"]=T.exports},f236:function(a,e,t){"use strict";var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-row",{staticClass:"basic-input",attrs:{dense:""}},[t("v-row",{staticClass:"ml-auto ",attrs:{justify:"end",dense:""}},[t("v-col",{staticClass:"py-0"},[t("v-text-field",{attrs:{prefix:"名前："}})],1),t("v-col",{staticClass:"d-flex py-0"},[t("v-text-field",{attrs:{suffix:"月"}}),t("v-text-field",{attrs:{suffix:"日"}}),t("v-text-field",{attrs:{prefix:"（",suffix:"）"}})],1),t("v-col",{staticClass:"d-flex py-0"},[t("v-text-field",{attrs:{suffix:"分"}}),t("v-text-field",{attrs:{suffix:"秒"}})],1)],1)],1)},n=[],i=t("2877"),r=t("6544"),p=t.n(r),f=t("62ad"),_=t("0fd9"),c=t("8654"),s={},o=Object(i["a"])(s,l,n,!1,null,null,null);e["a"]=o.exports;p()(o,{VCol:f["a"],VRow:_["a"],VTextField:c["a"]})}}]);
//# sourceMappingURL=materials_mapjapan.8870bf0e.js.map