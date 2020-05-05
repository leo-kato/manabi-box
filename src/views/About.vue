<template>
  <v-container class="main-container">
    <section class="page top">
      <h1 class="page-title">うちトレ！！</h1>
      <p>
        学習習慣を作ろう！まずは10分の集中。
      </p>
      <button class="button" type="button" onclick="location.href='./gallery'">
        <span>教材を見る</span>
      </button>
    </section>
    <section class="page usage">
      <h2>うちの子、姪っ子、甥っ子のために作りました</h2>
      <p>
        100マス計算、漢字の練習。
        「できること」を「速く」
      </p>
      <h3>3ステップで簡単印刷！</h3>
      <ul class="carousel">
        <li class="carousel-item">
          <h3>Step1</h3>
          <p>スマホorPCで問題を選択</p>
        </li>
        <li class="carousel-item">
          <h3>Step2</h3>
          <p>印刷ボタン押すだけ</p>
        </li>
        <li class="carousel-item">
          <h3>Step3</h3>
          <p>子供にパス</p>
        </li>
      </ul>
      <h3>答え合わせは自分で！！</h3>
      <ul class="carousel">
        <li class="carousel-item">
          <h3>Step1</h3>
          <p>スマホを貸す</p>
        </li>
        <li class="carousel-item">
          <h3>Step2</h3>
          <p>QRコード</p>
        </li>
        <li class="carousel-item">
          <h3>Step3</h3>
          <p>自分で採点</p>
        </li>
      </ul>
      <p>
        ランダム出題なので、何回でも使える！
        同じ問題もQRコードから何度でも！！
      </p>
    </section>
    <section class="page problem">
      <h2>こんな不安はありませんか？</h2>
      <ul>
        <li>10分でいいから集中できてるかな？</li>
        <li>書くのが苦手</li>
        <li>読むのが苦手</li>
      </ul>
    </section>
    <section class="page example">
      <h2>体験談</h2>
      <ul class="carousel">
        <li class="carousel-item">
          <h3>うちの子</h3>
          <p class="story-title">25マス計算をやらせてみて、子どもの分からないがやっと分かりました。</p>
          <p class="story">
            計算が苦手な小学2年の我が子。一人で算数の宿題をやらせてみると
            何がわからないのかもわからない状態で全く歯が立たない状態。
            まずは基本の足し算引き算をと思い、100マス計算をやらせてみたが
            10分かけても100マスを埋められず。終わらないプリントはやばいと
            思い、繰り上がりの無い25マス計算をやらせてみるとスイスイ出来ました。
            繰り上がりが苦手な様なので、今は100マスの繰り上がり部分に印を
            つけて、親子一緒に進めています。目指せ100マス10分切り！
          </p>
        </li>
        <li class="carousel-item">
          <h3>姪っ子</h3>
          <p class="story-title">振り返りを繰り返しやる事で、徐々に漢字への苦手意識が無くなってきました。</p>
          <p class="story">
            数字は得意ですが漢字が苦手な小学3年のウチの子。宿題の漢字は難しすぎて
            ほとんど手につかない模様。振り返りを意識して、小学1,2年の漢字をいかに
            丁寧に早くかけるか？をゲーム的にやらせています。
            最近は漢字への苦手意識が無くなってきたのか、小学3年の漢字を混ぜても
            気づかず(？)に書いてくれる様になりました。
            どうしようもなくやる気のない日は、100マス計算で速さの記録更新を狙ってます。
          </p>
        </li>
        <li class="carousel-item">
          <h3>甥っ子</h3>
          <p class="story-title">パパより速くなったよ！と目を輝かせる息子くん</p>
          <p class="story">
            文系の私達と違い、数字が大好きな息子くん。
            試しに100マス計算をやらせてみると、なんと最初から2分ジャストの好成績。
            よどみなく手が動いていました。試しにパパが競争してみると、15秒ほどしか
            差がなくてびっくり。息子くんはよっぽど悔しかったみたいで、毎日100マス計算を
            練習した結果、たった一週間でパパに打ち勝ったらしく、嬉しそうな顔で報告してくれました。
            一週間で負けたのが悔しかったのか、今はパパが息子くんの記録を追いかける日々です。
          </p>
        </li>
      </ul>
    </section>
    <section class="page pickup">
      <ul class="carousel">
        <li class="carousel-item">
          <button class="button" type="button" onclick="location.href='./materials/box100light'">
            <span>25マスだけ計算</span>
          </button>
        </li>
        <li class="carousel-item">
          <button class="button" type="button" onclick="location.href='./materials/box100'">
            <span>100マス計算</span>
          </button>
        </li>
        <li class="carousel-item">
          <button class="button" type="button" onclick="location.href='./materials/kanji21'">
            <span>漢字の練習</span>
          </button>
        </li>
      </ul>
    </section>
    <footer>
      <span>©︎ Copyright Seekers</span>
    </footer>
  </v-container>
</template>

<script>
export default {
  computed: {
  },
  created: function() {
    document.title = 'うちトレ';
  }
}
</script>

<style scoped>
.main-container {
  min-width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  background-color: aliceblue;
}
.page {
  width: 100%;
  padding: 16px;
  border-bottom: dotted 1px black;
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: smaller;
}
.page-title {
  font-size: xxx-large;
}
.carousel {
  display: flex;
}
.carousel-item {
  width: 100%;
  margin: 16px;
  display: flex;
  flex-direction: column;
  border: dotted 1px black;
}
section.example .story {
  font-size: smaller;
}
.button {
  padding: 8px;
  border-radius: 10px;
  background-color: pink;
  box-shadow: 0 0 10px pink;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.button:hover {
  background-color: blue;
  box-shadow: 0 0 10px blue;
  color: white;
}
</style>