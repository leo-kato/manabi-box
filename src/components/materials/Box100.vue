<template>
  <v-container class="box-container" :class="{'display-answer': display_answer }">
    <v-alert
      class="d-print-none"
      border="top"
      colored-border
      type="info"
      elevation="2">
      印刷してご利用ください。「解答を表示/非表示」ボタンから解答付き・なしを切り替えて印刷ができます。<br/>
      スマホ対応はおって（印刷はできます）。
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
        v-model="sel_operator"
        :items="sel_operator_options"
        item-text="TEXT"
        item-value="KEY">
      </v-select>
      <v-btn 
        class="ma-2" @click="switch_operator">
        にチャレンジ！
      </v-btn>
    </v-row>
    <v-row
      class="flex-nowrap"
      align="center"
      justify="center">
      <v-col cols="3">
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
            解答の印刷: {{ printed_with_answer ? "済み" : "未" }} 
          </div>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-btn class="ma-2 d-print-none" @click="print" small>
        <v-icon>mdi-printer</v-icon>
        印刷する
      </v-btn>
      <v-btn class="ma-2 d-print-none" @click="toggle_answer" small>
        <v-icon>mdi-eye</v-icon>
        解答を表示/非表示
      </v-btn>
      <v-btn 
        class="ma-2 d-print-none" @dblclick="refresh" small>
        <v-icon>mdi-refresh</v-icon>
        問題を交換(ダブルクリック)
      </v-btn>
      <qriously :value="url" :size="100" />
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          suffix="月">
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          suffix="日">
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          prefix="（"
          suffix="分">
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          suffix="秒）">
        </v-text-field>
      </v-col>
      <v-col cols="2">
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
        display_answer: false,
        rows: OPERATORS.ADDITION.ROW_NUMBERS,
        cols: OPERATORS.ADDITION.COL_NUMBERS,
        operator: OPERATORS.ADDITION,
        sel_oprator: OPERATORS.ADDITION.KEY,
        sel_operator_options: [OPERATORS.ADDITION, OPERATORS.ADDITION_EX, OPERATORS.SUBTRACT, OPERATORS.MULTIPLY],
        printed: false,
        printed_with_answer: false,
        url: null
    }
  },
  created: function(){
    let url_params = this.$route.query;
    try {
      if ('rows' in url_params) {
        url_params.rows = url_params.rows.split(',').map(row => parseInt(row));
      } 
      if ('cols' in url_params) {
        url_params.cols = url_params.cols.split(',').map(col => parseInt(col));
      }
    } catch(e) {
      console.error('不正なURLパラメータ。' + e);
    }
    this.operator = OPERATORS[url_params.operator] || OPERATORS.ADDITION;
    this.sel_operator = this.operator.KEY;
    this.rows = url_params.rows || this._randomize(this.operator.ROW_NUMBERS);
    this.cols = url_params.cols || this._randomize(this.operator.COL_NUMBERS);
    this.display_answer = ('answer' in url_params);
    this.update_no();
    this.update_url();
    this.update_title();
  },
  methods: {
    print: function() {
      window.print();
      this.display_answer? this.printed_with_answer = true : this.printed = true;
    },
    toggle_answer: function() {
      this.display_answer = !this.display_answer;
      this.update_title();
    },
    switch_operator() {
      if (this.operator.KEY == this.sel_operator) {
        return;
      }
      this.operator = OPERATORS[this.sel_operator] || this.operator;
      this.refresh();
    },
    refresh: function() {
      this.display_answer = false;
      this.printed = false;
      this.printed_with_answer = false;
      this.rows = this._randomize(this.operator.ROW_NUMBERS);
      this.cols = this._randomize(this.operator.COL_NUMBERS);
      this.update_no();
      this.update_url();
      this.update_title();
    },
    update_no: function() {
      this.no = new Date().getTime() - new Date(2020,3,1).getTime();
    },
    update_url: function() {
      let url_base = window.location.origin + this.$route.path;
      this.url = url_base + '?rows=' + this.rows.toString() + '&cols=' + this.cols.toString() + '&operator=' + this.operator.KEY + '&answer';
    },
    update_title: function() {
      document.title = '100マス計算 | ' + this.operator.TEXT + (this.display_answer? ' 解答 ' : ' 問題 ') + this.no;
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
  width: 880px;
  min-width: 880px;
}
.box-cell {
  padding: 12px;
  width: 80px;
  height: 50px;
  text-align: center;
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
    width: 40px;
    height: 40px;
    font-size: smaller;
    white-space: nowrap;
  }
}
@media print {
  .box-cell {
    border-color: black !important;
  }
}
</style>