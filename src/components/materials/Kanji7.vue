<template>
  <v-container class="box-container" fluid>
    <v-alert
      class="d-print-none"
      border="top"
      colored-border
      type="info"
      elevation="2">
      印刷してご利用ください。指定した学年の漢字を出力します。<br/>
      学年と対象の漢字：<a href="https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/syo/koku/001.htm" target="_blank" rel="noopener">学習指導要領「生きる力」</a>より。<br/>
      漢字の情報：<a href="https://mojikiban.ipa.go.jp/mji/" target="_blank" rel="noopener">IPA：MJ文字情報API</a>より。
    </v-alert>
    <v-row
      class="flex-nowrap d-print-none"
      align="center"
      justify="end">
      <v-col cols="7">
      </v-col>
      <v-spacer></v-spacer>
      <v-select
        class="ma-2"
        v-model="selGrade"
        :items="selGradeOptions"
        item-text="TEXT"
        item-value="KEY"
        return-object>
      </v-select>
      <v-btn 
        class="ma-2" @click="switchGrade">
        にチャレンジ！
      </v-btn>
    </v-row>
    <v-row
      class="flex-nowrap"
      align="center"
      justify="center">
      <v-col cols="4">
        <div class="headline font-weight-bold">
          {{ grade.TEXT }}
        </div>
        <div class="subtitle-1">
          No. {{ no }}
        </div>
        <div class="overline d-print-none">
          <div>
            印刷: {{ printed ? "済み" : "未" }} 
          </div>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-btn class="ma-2 d-print-none" @click="print" small>
        <v-icon>mdi-printer</v-icon>
        印刷する
      </v-btn>
      <v-btn 
        class="ma-2 d-print-none" @dblclick="refresh" small>
        <v-icon>mdi-refresh</v-icon>
        漢字を交換(ダブルクリック)
      </v-btn>
      <qriously :value="url" :size="100" />
    </v-row>
    <v-row class="flex-nowrap">
      <v-spacer></v-spacer>
      <v-text-field
        suffix="月">
      </v-text-field>
      <v-text-field
        suffix="日">
      </v-text-field>
      <v-text-field
        prefix="（"
        suffix="分">
      </v-text-field>
      <v-text-field
        suffix="秒）">
      </v-text-field>
      <v-text-field
        suffix="点">
      </v-text-field>
    </v-row>
    <v-row 
      v-for="k in kanji"
      :key="k"
      class="flex-nowrap lighten-5"
      align="center"
      justify="start">
      <v-card
        class="box-cell kanji-model-cell flex-grow-0 flex-shrink-0 ma-2 pa-2"
        outlined
        tile>
        <div class="kanji">
          {{ k }}
        </div>
      </v-card>
      <v-card
        v-for="n in 3"
        :key="n"
        class="box-cell kanji-cell flex-grow-0 flex-shrink-0 ma-2 pa-2"
        :style="{ backgroundImage: 'url(' + require('@/assets/images/cell_guideline.png') + ')'}"
        outlined
        tile>
      </v-card>
      <v-card
        class="box-cell kanji-detail-cell flex-grow-1 flex-shrink-1 ma-2 pa-2"
        outlined
        tile>
        <span v-if="k in dictionary">
          音読み：<span class="yomi">{{ dictionary[k].onyomi }}</span><br/>
          訓読み：<span class="yomi">{{ dictionary[k].kunyomi }}</span>
        </span>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
const GRADE = {
  K1: {
    KEY: 'K1',
    GRADE: 1,
    TEXT: '小学1年生',
    KANJI: '一右雨円王音下火花貝学気九休玉金空月犬見五口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早草足村大男竹中虫町天田土二日入年白八百文木本名目立力林六',
  },
  K2: {
    KEY: 'K2',
    GRADE: 2,
    TEXT: '小学2年生',
    KANJI: '引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数西声星晴切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母方北毎妹万明鳴毛門夜野友用曜来里理話',
  },
  K3: {
    KEY: 'K3',
    GRADE: 3,
    TEXT: '小学3年生',
    KANJI: '悪安暗医委意育員院飲運泳駅央横屋温化荷界開階寒感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談着注柱丁帳調追定庭笛鉄転都度投豆島湯登等動童農波配倍箱畑発反坂板皮悲美鼻筆氷表秒病品負部服福物平返勉放味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和',
  },
  K4: {
    KEY: 'K4',
    GRADE: 4,
    TEXT: '小学4年生',
    KANJI: '愛案以衣位囲胃印英栄塩億加果貨課芽改械害街各覚完官管関観願希季紀喜旗器機議求泣救給挙漁共協鏡競極訓軍郡径型景芸欠結建健験固功好候航康告差菜最材昨札刷殺察参産散残士氏史司試児治辞失借種周祝順初松笑唱焼象照賞臣信成省清静席積折節説浅戦選然争倉巣束側続卒孫帯隊達単置仲貯兆腸低底停的典伝徒努灯堂働特得毒熱念敗梅博飯飛費必票標不夫付府副粉兵別辺変便包法望牧末満未脈民無約勇要養浴利陸良料量輪類令冷例歴連老労録',
},
  K5: {
    KEY: 'K5',
    GRADE: 5,
    TEXT: '小学5年生',
    KANJI: '圧移因永営衛易益液演応往桜恩可仮価河過賀快解格確額刊幹慣眼基寄規技義逆久旧居許境均禁句群経潔件券険検限現減故個護効厚耕鉱構興講混査再災妻採際在財罪雑酸賛支志枝師資飼示似識質舎謝授修述術準序招承証条状常情織職制性政勢精製税責績接設舌絶銭祖素総造像増則測属率損退貸態団断築張提程適敵統銅導徳独任燃能破犯判版比肥非備俵評貧布婦富武復複仏編弁保墓報豊防貿暴務夢迷綿輸余預容略留領',
  },
  K6: {
    KEY: 'K6',
    GRADE: 6,
    TEXT: '小学6年生',
    KANJI: '異遺域宇映延沿我灰拡革閣割株干巻看簡危机揮貴疑吸供胸郷勤筋系敬警劇激穴絹権憲源厳己呼誤后孝皇紅降鋼刻穀骨困砂座済裁策冊蚕至私姿視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除将傷障城蒸針仁垂推寸盛聖誠宣専泉洗染善奏窓創装層操蔵臓存尊宅担探誕段暖値宙忠著庁頂潮賃痛展討党糖届難乳認納脳派拝背肺俳班晩否批秘腹奮並陛閉片補暮宝訪亡忘棒枚幕密盟模訳郵優幼欲翌乱卵覧裏律臨朗論',
  },
  K7: {
    KEY: 'K7',
    GRADE: 7,
    TEXT: '中学1年生',
    KANJI: '握扱依威為偉違緯維壱芋陰隠影鋭越援煙鉛縁汚押奥憶菓暇箇雅介戒皆壊較獲刈甘汗乾勧歓監鑑環含奇祈鬼幾輝儀戯詰却脚及丘朽巨距拠御凶叫狂況狭恐響驚仰駆屈掘繰恵傾継迎撃肩兼剣軒圏堅遣玄枯誇鼓互抗攻更恒荒香項稿豪込婚鎖彩歳載剤咲惨伺刺旨脂紫雌執芝斜煮釈寂朱狩趣需舟秀襲柔獣瞬旬巡盾召沼紹床称詳丈畳殖飾触振震侵浸寝慎薪尽陣尋吹是井姓征跡占扇鮮訴燥騒僧贈即俗耐替沢拓濁脱丹淡嘆端弾恥致遅蓄沖跳徴澄沈珍抵堤摘滴添殿吐途渡奴怒桃逃唐透到倒盗塔稲踏闘胴峠突鈍曇弐悩濃杯輩拍泊迫薄爆髪抜罰販般搬盤範繁彼疲被避尾微匹描浜敏怖浮普腐敷膚賦舞幅払噴柄壁捕舗峰抱砲忙坊肪傍冒帽凡盆慢漫妙眠矛霧娘茂猛網黙紋躍雄与誉溶腰踊謡翼雷頼絡欄離粒慮療隣涙隷齢麗暦劣烈恋露郎惑腕'
  }
};
export default {
  data(){
    return{
        no: 0,
        kanji: [],
        dictionary: {},
        grade: GRADE.K6,
        selGrade: GRADE.K6,
        selGradeOptions: [GRADE.K1, GRADE.K2, GRADE.K3, GRADE.K4, GRADE.K5, GRADE.K6],
        printed: false,
        url: null,
        loading: true
    }
  },
  created: function(){
    let urlParams = this.$route.query;
    try {
      if ('kanji' in urlParams) {
        urlParams.kanji = urlParams.kanji.split('');
      } 
    } catch(e) {
      console.log(urlParams);
      console.error('不正なURLパラメータ。' + e);
    }
    this.grade = GRADE[urlParams.grade] || GRADE.K6;
    this.selGrade = this.grade;
    this.kanji = urlParams.kanji || this.draw(this.grade.KEY);
    this.loadDictionary();
    this.updateNo();
    this.updateUrl();
    this.updateTitle();
  },
  methods: {
    print: function() {
      window.print();
      this.printed = true;
    },
    switchGrade() {
      if (this.grade.KEY == this.selGrade.KEY) {
        return;
      }
      this.grade = this.selGrade || this.grade;
      this.refresh();
    },
    refresh: function() {
      this.printed = false;
      this.kanji = this.draw(this.grade.KEY);
      this.loadDictionary();
      this.updateNo();
      this.updateUrl();
      this.updateTitle();
    },
    loadDictionary: function() {
      this.kanji.forEach((k) => {
        let url = 'https://mojikiban.ipa.go.jp/mji/q?UCS=0x' + k.charCodeAt(0).toString(16).toUpperCase();
        this.loading = true;
        this.$axios.get(url).then(res => {
          let detail = {
            detail: res.data.results[0],
            onyomi: (res.data.results[0]['読み']['音読み'] || ['ー']).join("、"),
            kunyomi: (res.data.results[0]['読み']['訓読み'] || ['ー']).join("、"),
          };
          this.$set(this.dictionary, k, detail);
        }).catch(e => {
          console.log(e);
        });
      });
    },
    updateNo: function() {
      let date = new Date();
      let suffix = String(date.getTime() - new Date(date.getFullYear() - 1,0,1).getTime());
      this.no = String(date.getFullYear() % 2000) + suffix;
    },
    updateUrl: function() {
      let urlBase = window.location.origin + this.$route.path;
      this.url = urlBase + '?grade=' + this.grade.KEY + '&kanji=' + encodeURI(this.kanji.join(''));
    },
    updateTitle: function() {
      document.title = '漢字書くのだ！ | ' + this.grade.TEXT + ' ' + this.no;
    },
    draw: function(grade_key) {
      let grade = Object.values(GRADE).find((value => value.KEY == grade_key));
      return this.random_draw(grade.KANJI.split(''), 7);
    },
    random_draw: function(array, opt_limit) {//shuffle by Fisher-Yates 
      for (let i = array.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
      }
      let limit = opt_limit || 7;
      if (array.length > limit) {
        return array.slice(1, limit + 1);
      }
      return array;
    }
  }
};

</script>

<style scoped>
.box-container {
  max-width: 960px;
}
.kanji-model-cell {
  width: 90px;
  height: 90px;
  font-family: 'YuMincho';
  font-size: 74px;
}
.kanji-model-cell .kanji{
  position: relative;
  top: -20px;
}
.kanji-cell {
  width: 90px;
  height: 90px;
	background-size: 100% auto;
}
.kanji-detail-cell {
  height: 90px;
  font-size: smaller;
  /* line-height: 2; */
  overflow: hidden;
}
@media screen and (max-width:480px){
  .box-container {
    min-width: 480px;
  }
  .kanji-model-cell {
    width: 60px;
    height: 60px;
    font-family: 'YuMincho';
    font-size: 44px;
  }
  .kanji-model-cell .kanji{
    top: -12px;
  }
  .kanji-cell {
    width: 60px;
    height: 60px;
  }
  .kanji-detail-cell {
    height: 60px;
    font-size: x-small;
  }
}
@media print {
  .box-cell {
    border-color: black !important;
  }
  .kanji-cell {
    -webkit-print-color-adjust: exact;
  }
  .kanji-detail-cell .yomi {
    /* visibility: hidden; */
  }
}
</style>