<template>
  <v-container class="box-container" fluid>
    <v-alert
      class="d-print-none"
      border="top"
      colored-border
      type="info"
      elevation="2">
      PDFを印刷してご利用ください。対象漢字は順次追加予定です。<br/>
      学年と対象の漢字：<a href="https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/syo/koku/001.htm" target="_blank" rel="noopener">学習指導要領「生きる力」</a>より。<br/>
      漢字の情報：<a href="https://mojikiban.ipa.go.jp/mji/" target="_blank" rel="noopener">IPA：MJ文字情報API</a>より。
    </v-alert>
    <v-row
      align="center"
      justify="start"
      dense>
      <v-col class="mr-auto">
        <div class="headline font-weight-bold">
          漢字を選択！
        </div>
      </v-col>
    </v-row>
    <v-row
      v-for="g in selGradeOptions"
      :key="g.GRADE"
      align="center"
      justify="start"
      dense>
      <v-col class="mr-auto">
        <span class="">
          {{ g.TEXT }}
        </span>
        <v-btn 
          v-for="k in g.KANJI"
          :key="k"
          class="mx-2"
          @click="switchKanji(k)"
          small>
          <v-icon class="mx-2">{{ k }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="start"
      dense>
      <v-col class="mr-auto">
        <div class="headline font-weight-bold">
          {{ kanji }}
        </div>
      </v-col>
    </v-row>
    <v-row 
      v-for="s in work.SHEETS"
      :key="s.KANJI"
      class="lighten-5 my-1"
      align="center"
      justify="start"
      dense>
      <div class="font-weight-bold">
        {{ s.JUKUGO }}
      </div>
      <iframe class="worksheet mb-2" :src="'/sample/kanji7days/' + s.URL"></iframe>
    </v-row>
  </v-container>
</template>

<script>
const GRADE = {
  K1: {
    KEY: 'K1',
    GRADE: 1,
    TEXT: '小学1年生',
    KANJI: ['一', '二']
  },
  K2: {
    KEY: 'K2',
    GRADE: 2,
    TEXT: '小学2年生',
    KANJI: ['三', '四']
  },
};

const WORK = {
  '一' : {
    KANJI: '一', SHEETS: [ 
      { JUKUGO: '一矢', URL: '一.pdf' }, 
      { JUKUGO: '一日', URL: '二.pdf' }, 
    ],
  },
  '二' : {
    KANJI: '二', SHEETS: [ 
      { JUKUGO: '二日', URL: '二.pdf' }, 
    ],
  },
  '三' : {
    KANJI: '三', SHEETS: [ { JUKUGO: '', URL: '' }, { JUKUGO: '', URL: '' }, { JUKUGO: '', URL: '' }, { JUKUGO: '', URL: '' }, ],
  },
  '四' : {
    KANJI: '四', SHEETS: [ { JUKUGO: '', URL: '' }, { JUKUGO: '', URL: '' }, { JUKUGO: '', URL: '' }, { JUKUGO: '', URL: '' }, ],
  },
};

const COOKIE_KEYS = {
  KANJI: 'materials.Kanji7Days.kanji',
};
export default {
  data(){
    return{
        selGradeOptions: [GRADE.K1, GRADE.K2],
        kanji: '一',
        work: WORK['一'],
        url: null,
    }
  },
  created: function(){
    console.log(process.env.BASE_URL);
    let urlParams = this.$route.query;
    try {
      if ('kanji' in urlParams) {
        urlParams.kanji = urlParams.kanji.split('');
      } 
    } catch(e) {
      console.log(urlParams);
      console.error('不正なURLパラメータ。' + e);
    }
    let cookieKanji = this.$cookies.get(COOKIE_KEYS.KANJI);
    this.kanji = urlParams.kanji || cookieKanji || '一';
    this.work = WORK[this.kanji];
    this.updateUrl();
    this.updateTitle();
    this.$cookies.set(COOKIE_KEYS.KANJI, this.kanji);
  },
  methods: {
    switchKanji: function(kanji) {
      this.kanji = kanji;
      this.work = WORK[this.kanji];
      this.updateUrl();
      this.updateTitle();
      this.$cookies.set(COOKIE_KEYS.KANJI, this.kanji);
    },
    updateUrl: function() {
      let urlBase = window.location.origin + this.$route.path;
      this.url = urlBase + '?kanji=' + encodeURI(this.kanji);
    },
    updateTitle: function() {
      document.title = '7日間で新しい漢字を覚えよう！ | ' + this.kanji;
    },
  }
};
</script>

<style scoped>
.worksheet {
  width: 100%;
  height: 400px;
}
</style>