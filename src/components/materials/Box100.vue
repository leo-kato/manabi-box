<template>
  <v-container class="box-container" :class="{'display-answer': displayAnswer }">
    <v-alert
      class="d-print-none"
      border="top"
      colored-border
      type="info"
      elevation="2">
      印刷してご利用ください。<br/>
      「解答を表示/非表示」ボタンから解答付き・なしを切り替えて印刷ができます。
    </v-alert>
    <v-row
      align="center"
      justify="start"
      dense>
      <v-col class="mr-auto">
        <div class="headline font-weight-bold">
          {{ operator.TEXT }}
        </div>
        <div class="subtitle-1">
          No. {{ no }}
        </div>
        <div class="overline d-print-none">
          <div>
            問題の印刷: {{ printed ? "済み" : "未" }} 
          </div>
          <div>
            解答の印刷: {{ printedWithAnswer ? "済み" : "未" }} 
          </div>
        </div>
      </v-col>
      <v-col class="d-print-none">
        <v-row class="ml-auto " dense>
          <v-col class="d-flex justify-end align-center">
            <v-select
              class="mx-2"
              v-model="selOperator"
              :items="selOperatorOptions"
              item-text="TEXT"
              item-value="KEY"
              return-object>
            </v-select>
            <v-btn 
              class="ma-2" @click="switchOperator" small>
              にチャレンジ！
            </v-btn>
          </v-col>
          <v-col class="d-print-none d-flex justify-end align-center">
            <v-btn class="mx-2" @click="print" small>
              <v-icon>mdi-printer</v-icon>
              印刷する
            </v-btn>
            <v-btn class="mx-2" @click="toggleAnswer" small>
              <v-icon>mdi-eye</v-icon>
              解答を表示/非表示
            </v-btn>
            <v-btn 
              class="mx-2" @click="refresh" small>
              <v-icon>mdi-refresh</v-icon>
              <div>
                問題を交換
              </div>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="ml-auto flex-grow-0 align-center">
        <qriously :value="url" :size="100" />
      </v-col>
    </v-row>
    <v-row class="ml-auto " 
      justify="end"
      dense>
      <v-spacer></v-spacer>
      <v-col class="d-flex">
        <v-text-field
          suffix="月">
        </v-text-field>
        <v-text-field
          suffix="日">
        </v-text-field>
      </v-col>
      <v-col class="d-flex">
        <v-text-field
          suffix="分">
        </v-text-field>
        <v-text-field
          suffix="秒">
        </v-text-field>
      </v-col>
      <v-col class="d-flex">
        <v-text-field
          suffix="点">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row
      class="grey lighten-5">
      <v-col cols="12">
        <v-row
          class="flex-nowrap"
          align="center"
          justify="center">
          <v-card
            class="box-cell"
            outlined
            tile>
            <v-icon style="font-size:1.2rem;">{{ operator.ICON }}</v-icon>
          </v-card>
          <v-card
            v-for="col in cols"
            :key="col"
            class="box-cell"
            outlined
            tile>
            {{ col }}
          </v-card>
        </v-row>
        <v-row
          v-for="(row, row_index) in rows"
          :key="row_index"
          class="flex-nowrap"
          align="center"
          justify="center">
          <v-card
            class="box-cell"
            outlined
            tile>
            {{ row }}
          </v-card>
          <v-card
            v-for="(col, col_index) in cols"
            :key="col_index"
            class="box-cell"
            outlined
            tile>
            <span class="box-cell-answer">
              {{ operator.CALC(row, col) }}
            </span>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const OPERATORS = {
  ADDITION: {
    KEY: 'ADDITION',
    ICON: 'mdi-plus',
    TEXT: 'たし算',
    ROW_NUMBERS: [...Array(10).keys()],
    COL_NUMBERS: [...Array(10).keys()],
    CALC: function(r,c) {
      return r + c;
    }
  },
  ADDITION_EX: {
    KEY: 'ADDITION_EX',
    ICON: 'mdi-plus',
    TEXT: 'たし算(2桁まで)',
    ROW_NUMBERS: [...Array(20).keys()],
    COL_NUMBERS: [...Array(20).keys()],
    CALC: function(r,c) {
      return r + c;
    }
  },
  SUBTRACT: {
    KEY: 'SUBTRACT',
    ICON: 'mdi-minus',
    TEXT: 'ひき算',
    ROW_NUMBERS: [...Array(10).keys()],
    COL_NUMBERS: [...Array(10).keys()].map(x => x+9),
    CALC: function(r,c) {
      return c - r;
    }
  },
  MULTIPLY: {
    KEY: 'MULTIPLY',
    ICON: 'mdi-close',
    TEXT: 'かけ算',
    ROW_NUMBERS: [...Array(9).keys()].map(x => x+1),
    COL_NUMBERS: [...Array(9).keys()].map(x => x+1),
    CALC: function(r,c) {
      return r * c;
    }
  },
};
export default {
  data(){
    return{
        no: 0,
        displayAnswer: false,
        rows: OPERATORS.ADDITION.ROW_NUMBERS,
        cols: OPERATORS.ADDITION.COL_NUMBERS,
        operator: OPERATORS.ADDITION,
        selOperator: OPERATORS.ADDITION,
        selOperatorOptions: [OPERATORS.ADDITION, OPERATORS.ADDITION_EX, OPERATORS.SUBTRACT, OPERATORS.MULTIPLY],
        printed: false,
        printedWithAnswer: false,
        url: null
    }
  },
  created: function(){
    let urlParams = this.$route.query;
    try {
      if ('rows' in urlParams) {
        urlParams.rows = urlParams.rows.split(',').map(row => parseInt(row));
      } 
      if ('cols' in urlParams) {
        urlParams.cols = urlParams.cols.split(',').map(col => parseInt(col));
      }
    } catch(e) {
      console.error('不正なURLパラメータ。' + e);
    }
    this.operator = OPERATORS[urlParams.operator] || OPERATORS.ADDITION;
    this.selOperator = this.operator;
    this.rows = urlParams.rows || this._randomize(this.operator.ROW_NUMBERS);
    this.cols = urlParams.cols || this._randomize(this.operator.COL_NUMBERS);
    this.displayAnswer = ('answer' in urlParams);
    this.updateNo();
    this.updateUrl();
    this.updateTitle();
  },
  methods: {
    print: function() {
      window.print();
      this.displayAnswer? this.printedWithAnswer = true : this.printed = true;
    },
    toggleAnswer: function() {
      this.displayAnswer = !this.displayAnswer;
      this.updateTitle();
    },
    switchOperator() {
      if (this.operator.KEY == this.selOperator.KEY) {
        return;
      }
      this.operator = this.selOperator || this.operator;
      this.refresh();
    },
    refresh: function() {
      this.displayAnswer = false;
      this.printed = false;
      this.printedWithAnswer = false;
      this.rows = this._randomize(this.operator.ROW_NUMBERS);
      this.cols = this._randomize(this.operator.COL_NUMBERS);
      this.updateNo();
      this.updateUrl();
      this.updateTitle();
    },
    updateNo: function() {
      let date = new Date();
      let suffix = String(date.getTime() - new Date(date.getFullYear() - 1,0,1).getTime());
      this.no = String(date.getFullYear() % 2000) + suffix;
    },
    updateUrl: function() {
      let urlBase = window.location.origin + this.$route.path;
      this.url = urlBase + '?rows=' + this.rows.toString() + '&cols=' + this.cols.toString() + '&operator=' + this.operator.KEY + '&answer';
    },
    updateTitle: function() {
      document.title = '100マス計算 | ' + this.operator.TEXT + (this.displayAnswer? ' 解答 ' : ' 問題 ') + this.no;
    },
    _randomize: function(array, opt_limit) {//shuffle by Fisher-Yates 
      for (let i = array.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
      }
      let limit = opt_limit || 10;
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
.box-cell {
  padding-top: 0.8rem;
  width: 10%;
  max-width: 90px;
  height: 3rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}
.display-answer .box-cell-answer {
  display: block;
}
.box-cell-answer {
  display: none;
  color: #E57373;
}
@media screen and (max-width:480px){
  .box-container {
    min-width: 480px;
  }
  .box-cell {
    font-size: smaller;
  }
}
@media print {
  .box-cell {
    border-color: black !important;
  }
}
</style>