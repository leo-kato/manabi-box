(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["materials_kanji8"],{5521:function(t,a,e){"use strict";var i=e("cf7b"),r=e.n(i);r.a},b200:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Kanji8")},r=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"box-container",attrs:{fluid:""}},[e("v-alert",{staticClass:"d-print-none",attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[t._v(" 印刷してご利用ください。指定した学年の漢字を出力します。"),e("br"),t._v(" 学年と対象の漢字："),e("a",{attrs:{href:"https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/syo/koku/001.htm",target:"_blank",rel:"noopener"}},[t._v("学習指導要領「生きる力」")]),t._v("より。"),e("br"),t._v(" 漢字の情報："),e("a",{attrs:{href:"https://mojikiban.ipa.go.jp/mji/",target:"_blank",rel:"noopener"}},[t._v("IPA：MJ文字情報API")]),t._v("より。 ")]),e("v-row",{staticClass:"flex-nowrap d-print-none",attrs:{align:"center",justify:"end"}},[e("v-col",{attrs:{cols:"5"}}),e("v-spacer"),e("v-select",{staticClass:"ma-2",attrs:{items:t.selGradeOptions,"item-text":"TEXT","item-value":"KEY","return-object":""},model:{value:t.selGrade,callback:function(a){t.selGrade=a},expression:"selGrade"}}),e("v-btn",{staticClass:"ma-2",on:{click:t.switchGrade}},[t._v(" にチャレンジ！ ")])],1),e("v-row",{staticClass:"flex-nowrap",attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"3"}},[e("div",{staticClass:"headline font-weight-bold"},[t._v(" "+t._s(t.grade.TEXT)+" ")]),e("div",{staticClass:"subtitle-1"},[t._v(" No. "+t._s(t.no)+" ")]),e("div",{staticClass:"overline d-print-none"},[e("div",[t._v(" 印刷: "+t._s(t.printed?"済み":"未")+" ")])])]),e("v-spacer"),e("v-btn",{staticClass:"ma-2 d-print-none",attrs:{small:""},on:{click:t.print}},[e("v-icon",[t._v("mdi-printer")]),t._v(" 印刷する ")],1),e("v-btn",{staticClass:"ma-2 d-print-none",attrs:{small:""},on:{dblclick:t.refresh}},[e("v-icon",[t._v("mdi-refresh")]),t._v(" 漢字を交換(ダブルクリック) ")],1),e("qriously",{attrs:{value:t.url,size:100}})],1),e("v-row",{staticClass:"flex-nowrap"},[e("v-spacer"),e("v-text-field",{attrs:{suffix:"月"}}),e("v-text-field",{attrs:{suffix:"日"}}),e("v-text-field",{attrs:{prefix:"（",suffix:"分"}}),e("v-text-field",{attrs:{suffix:"秒）"}}),e("v-text-field",{attrs:{suffix:"点"}})],1),t._l(t.kanji,(function(a){return e("v-row",{key:a,staticClass:"lighten-5",attrs:{align:"center",justify:"start"}},[e("v-card",{staticClass:"box-cell kanji-cell ma-2 pa-2",attrs:{outlined:"",tile:""}},[e("span",{staticClass:"kanji"},[t._v(t._s(a))]),e("a",{attrs:{href:t.kanjiDetails[a].url}},[t._v("link")])]),t._l(3,(function(t){return e("v-card",{key:t,staticClass:"box-cell kanji-cell ma-2 pa-2",attrs:{outlined:"",tile:""}})})),e("v-card",{staticClass:"box-cell kanji-detail-cell ma-2 pa-2",attrs:{outlined:"",tile:""}})],2)}))],2)},s=[],l=(e("7db0"),e("4160"),e("caad"),e("a15b"),e("fb6a"),e("d3b7"),e("07ac"),e("ac1f"),e("25f0"),e("2532"),e("1276"),e("159b"),{K1:{KEY:"K1",GRADE:1,TEXT:"小学1年生",KANJI:"一右雨円王音下火花貝学気九休玉金空月犬見五口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早草足村大男竹中虫町天田土二日入年白八百文木本名目立力林六"},K2:{KEY:"K2",GRADE:2,TEXT:"小学2年生",KANJI:"引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数西声星晴切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母方北毎妹万明鳴毛門夜野友用曜来里理話"},K3:{KEY:"K3",GRADE:3,TEXT:"小学3年生",KANJI:"悪安暗医委意育員院飲運泳駅央横屋温化荷界開階寒感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談着注柱丁帳調追定庭笛鉄転都度投豆島湯登等動童農波配倍箱畑発反坂板皮悲美鼻筆氷表秒病品負部服福物平返勉放味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和"},K4:{KEY:"K4",GRADE:4,TEXT:"小学4年生",KANJI:"愛案以衣位囲胃印英栄塩億加果貨課芽改械害街各覚完官管関観願希季紀喜旗器機議求泣救給挙漁共協鏡競極訓軍郡径型景芸欠結建健験固功好候航康告差菜最材昨札刷殺察参産散残士氏史司試児治辞失借種周祝順初松笑唱焼象照賞臣信成省清静席積折節説浅戦選然争倉巣束側続卒孫帯隊達単置仲貯兆腸低底停的典伝徒努灯堂働特得毒熱念敗梅博飯飛費必票標不夫付府副粉兵別辺変便包法望牧末満未脈民無約勇要養浴利陸良料量輪類令冷例歴連老労録"},K5:{KEY:"K5",GRADE:5,TEXT:"小学5年生",KANJI:"圧移因永営衛易益液演応往桜恩可仮価河過賀快解格確額刊幹慣眼基寄規技義逆久旧居許境均禁句群経潔件券険検限現減故個護効厚耕鉱構興講混査再災妻採際在財罪雑酸賛支志枝師資飼示似識質舎謝授修述術準序招承証条状常情織職制性政勢精製税責績接設舌絶銭祖素総造像増則測属率損退貸態団断築張提程適敵統銅導徳独任燃能破犯判版比肥非備俵評貧布婦富武復複仏編弁保墓報豊防貿暴務夢迷綿輸余預容略留領"},K6:{KEY:"K6",GRADE:6,TEXT:"小学6年生",KANJI:"異遺域宇映延沿我灰拡革閣割株干巻看簡危机揮貴疑吸供胸郷勤筋系敬警劇激穴絹権憲源厳己呼誤后孝皇紅降鋼刻穀骨困砂座済裁策冊蚕至私姿視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除将傷障城蒸針仁垂推寸盛聖誠宣専泉洗染善奏窓創装層操蔵臓存尊宅担探誕段暖値宙忠著庁頂潮賃痛展討党糖届難乳認納脳派拝背肺俳班晩否批秘腹奮並陛閉片補暮宝訪亡忘棒枚幕密盟模訳郵優幼欲翌乱卵覧裏律臨朗論"},K7:{KEY:"K7",GRADE:7,TEXT:"中学1年生",KANJI:"握扱依威為偉違緯維壱芋陰隠影鋭越援煙鉛縁汚押奥憶菓暇箇雅介戒皆壊較獲刈甘汗乾勧歓監鑑環含奇祈鬼幾輝儀戯詰却脚及丘朽巨距拠御凶叫狂況狭恐響驚仰駆屈掘繰恵傾継迎撃肩兼剣軒圏堅遣玄枯誇鼓互抗攻更恒荒香項稿豪込婚鎖彩歳載剤咲惨伺刺旨脂紫雌執芝斜煮釈寂朱狩趣需舟秀襲柔獣瞬旬巡盾召沼紹床称詳丈畳殖飾触振震侵浸寝慎薪尽陣尋吹是井姓征跡占扇鮮訴燥騒僧贈即俗耐替沢拓濁脱丹淡嘆端弾恥致遅蓄沖跳徴澄沈珍抵堤摘滴添殿吐途渡奴怒桃逃唐透到倒盗塔稲踏闘胴峠突鈍曇弐悩濃杯輩拍泊迫薄爆髪抜罰販般搬盤範繁彼疲被避尾微匹描浜敏怖浮普腐敷膚賦舞幅払噴柄壁捕舗峰抱砲忙坊肪傍冒帽凡盆慢漫妙眠矛霧娘茂猛網黙紋躍雄与誉溶腰踊謡翼雷頼絡欄離粒慮療隣涙隷齢麗暦劣烈恋露郎惑腕"}}),o={data:function(){return{no:0,kanji:[],grade:l.K6,selGrade:l.K6,selGradeOptions:[l.K1,l.K2,l.K3,l.K4,l.K5,l.K6],printed:!1,url:null}},computed:{kanjiDetails:function(){var t={};return this.kanji.forEach((function(a){var e={};e.grade=Object.values(l).find((function(t){return t.KANJI.includes(a)})),e.url="https://mojikiban.ipa.go.jp/mji/q?UCS=0x"+a.charCodeAt(0).toString(16).toUpperCase(),t[a]=e})),t}},created:function(){var t=this.$route.query;try{"kanji"in t&&(t.kanji=t.kanji.split(""))}catch(a){console.log(t),console.error("不正なURLパラメータ。"+a)}this.grade=l[t.grade]||l.K6,this.selGrade=this.grade,this.kanji=t.kanji||this.draw(this.grade.KEY),this.updateNo(),this.updateUrl(),this.updateTitle()},methods:{print:function(){window.print(),this.printed=!0},switchGrade:function(){this.grade.KEY!=this.selGrade.KEY&&(this.grade=this.selGrade||this.grade,this.refresh())},refresh:function(){this.printed=!1,this.kanji=this.draw(this.grade.KEY),this.updateNo(),this.updateUrl(),this.updateTitle()},updateNo:function(){var t=new Date,a=String(t.getTime()-new Date(t.getFullYear()-1,0,1).getTime());this.no=String(t.getFullYear()%2e3)+a},updateUrl:function(){var t=window.location.origin+this.$route.path;this.url=t+"?grade="+this.grade.KEY+"&kanji="+encodeURI(this.kanji.join(""))},updateTitle:function(){document.title="漢字書くのだ！ | "+this.grade.TEXT+" "+this.no},draw:function(t){var a=Object.values(l).find((function(a){return a.KEY==t}));return this.random_draw(a.KANJI.split(""),8)},random_draw:function(t,a){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[i],t[i]=r}var n=a||8;return t.length>n?t.slice(1,n+1):t}}},c=o,d=(e("5521"),e("2877")),u=e("6544"),f=e.n(u),v=e("0798"),p=e("8336"),h=e("b0af"),K=e("62ad"),b=e("a523"),j=e("132d"),g=e("0fd9"),m=e("b974"),E=e("2fa4"),k=e("8654"),_=Object(d["a"])(c,n,s,!1,null,"21a7ec8e",null),w=_.exports;f()(_,{VAlert:v["a"],VBtn:p["a"],VCard:h["a"],VCol:K["a"],VContainer:b["a"],VIcon:j["a"],VRow:g["a"],VSelect:m["a"],VSpacer:E["a"],VTextField:k["a"]});var T={components:{Kanji8:w}},x=T,C=Object(d["a"])(x,i,r,!1,null,null,null);a["default"]=C.exports},cf7b:function(t,a,e){}}]);
//# sourceMappingURL=materials_kanji8.93e91988.js.map