<template>
  <v-container class="main-container">
    <v-timeline 
      align-top
      fill-dot
      right>
      <v-timeline-item
        v-for="(step, i) in steps"
        :color="step.color" 
        :key="i"
        fill-dot
        small>
        <v-card
          :color="step.color" dark>
          <v-card-title>
            <v-icon
              dark
              size="24"
              class="mr-4">
              {{ step.icon }}
            </v-icon>
            <h2 class="headline white--text font-weight-light">{{ step.title }}</h2>
          </v-card-title>
          <v-container class="white text--primary body-2">
            <v-row class="px-2">
              <v-col>
                <p v-html="step.description"></p>
              </v-col>
            </v-row>
            <v-row class="px-2">
              <v-col>
                <ul>
                  <li v-for="(suggest, i) in step.suggests" :key="i" v-html="suggest"></li>
                </ul>
              </v-col>
            </v-row>
            <v-row class="px-2">
              <v-col>
                <v-container v-for="material in step.materials" :key="material">
                  <div v-html="material"></div>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      steps: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title: '文章に漢字が少ないかも？',
          description: `ちょっと難しい漢字を諦めてしまう子、結構多いです。`,
          suggests: [
            `長い目で見てあげよう。漢字の大切さに気づくきっかけを。`,
            `ちょっとした一文字を褒めてあげよう。`,
            `まずは一回、漢字テストでいい点を目指そう！`,
          ],
          materials: [
            `<a href="https://www.kanken.or.jp/kanken/meyasucheck/check.php?kyu=10k" target="_blank">漢字能力検定受験の目安</a>`,
          ],
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          title: '簡単な漢字の書き間違い',
          description: `大人から見れば全く違う漢字も、子供にはまだ似たものに見えていることも。「右」「石」、「九」「丸」、「早」「見」。`,
          suggests: [
            `よく間違える漢字は多い子でも30個くらい。じっくり焦らず注意して見てあげよう。`,
            `意外と大人も子供も間違える漢字は一緒かも？`
          ],
          materials: [
            `<a href="https://homework-recipe.com/kakijyun" target="_blank">1-3年生の間違えやすい漢字</a>`,
            `<a href="https://homework-recipe.com/kakijyun02" target="_blank">4-6年生の間違えやすい漢字</a>`
          ],
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          title: '漢字の細かいところが苦手',
          description: `小学3年生で習う「旅行」の「旅」の字。ここでつまづく子は多いようです。「帽子」の「日」「目」が覚えられない。`,
          suggests: [
            `いくつかの漢字（「飛」「旅」など）は、書いて覚えるしかありません。`,
            `字の中身に触れてみよう。漢字の成り立ち。`,
          ],
          materials: [
            `<a href="https://www.amazon.co.jp/%E7%99%BD%E5%B7%9D%E9%9D%99%E6%96%87%E5%AD%97%E5%AD%A6%E3%81%AB%E5%AD%A6%E3%81%B6-%E6%BC%A2%E5%AD%97%E3%81%AA%E3%82%8A%E3%81%9F%E3%81%A1%E3%83%96%E3%83%83%E3%82%AF-%E6%94%B9%E8%A8%82%E7%89%88-%E5%85%A87%E5%B7%BB%E3%82%BB%E3%83%83%E3%83%88-%E4%BC%8A%E6%9D%B1/dp/4811831144/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E6%BC%A2%E5%AD%97+%E3%81%AA%E3%82%8A%E3%81%9F%E3%81%A1&qid=1589377161&sr=8-2&linkCode=li3&tag=seekers-22&linkId=ef15562169e3a5d5eeacdd347197ef3a&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4811831144&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=seekers-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=seekers-22&language=ja_JP&l=li3&o=9&a=4811831144" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />`,
          ],
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
          title: '字が雑・・・',
          description: `止め跳ねができていない。書くのは速いけど、とにかく雑・・・。`,
          suggests: [
            `習字教室が一番。怖い先生の教室に通わせよう！`
          ],
          materials: [
            `<a href="https://original-sho.com/blog/4166/" target="_blank">習字教室の選び方</a>`,
          ],
        },
      ],
    }),
  }
</script>