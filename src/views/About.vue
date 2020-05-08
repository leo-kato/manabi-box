<template>
  <v-container class="main-container">
    <section class="page top">
      <h1 class="page-title">うちトレ！！</h1>
      <p style="text-align:center;">
        学習習慣を作ろう！まずは10分の集中力。<br>
        印刷して使える教材集。
      </p>
      <button class="neu-button" type="button" onclick="location.href='./gallery'">
        <span>教材を見る</span>
      </button>
    </section>
    <section class="page usage">
      <h2>うちの子、姪っ子、甥っ子のために作りました</h2>
      <p>
        100マス計算、漢字の練習。<br>
        「できること」を「速く」
      </p>
      <h3>3ステップで簡単印刷！</h3>
      <ul class="stepper">
        <li>
          <h3>Step1</h3>
          <p>スマホ/PCで<span style="display:inline-block;">問題を選択</span></p>
        </li>
        <li>
          <h3>Step2</h3>
          <p>印刷ボタンを<span style="display:inline-block;">押すだけ</span></p>
        </li>
        <li>
          <h3>Step3</h3>
          <p>子供にパス</p>
        </li>
      </ul>
      <div class="next-vertical"></div>
      <h3>答え合わせは自分で！！</h3>
      <ul class="stepper">
        <li>
          <h3>Step1</h3>
          <p>スマホを<span style="display:inline-block;">渡して</span></p>
        </li>
        <li>
          <h3>Step2</h3>
          <p>QRコードを<span style="display:inline-block;">読む</span></p>
        </li>
        <li>
          <h3>Step3</h3>
          <p>自分で<span style="display:inline-block;">採点！</span></p>
        </li>
      </ul>
      <p>
        ランダム出題なので、何回でも使える！<br>
        同じ問題もQRコードから何度でも！！<br>
        <small>※同じ問題でOK、目標時間を決めてやるのが効率的。</small>
      </p>
    </section>
    <section class="page problem">
      <h2>こんな不安はありませんか？</h2>
      <p>
        <ul>
          <li>10分でいいから集中できてるかな？</li>
          <li>書くのが苦手</li>
          <li>読むのが苦手</li>
        </ul>
      </p>
      <p>
        小学2年生のうちの子は、簡単なもの（繰り上がりの無い足し算25マス）から始めて、<br>
        1ヶ月後には100マスを10分でできるようになりました。<br>
        勉強以外でも、集中力が増して、習い事でもいい効果が出ています。<br>
        ぜひ、その子に合うやり方を探してみてください。<br>
        <small>※もし「こんなものがあったらな」のようなリクエストありましたら <a href="./contact">こちら</a> まで！</small>
      </p>
      <button class="neu-button" type="button" onclick="location.href='./gallery'">
        <span>教材を試してみる！</span>
      </button>
    </section>
    <section class="page example">
      <h2>体験談</h2>
      <ul class="story">
        <li class="story-card">
          <h3>うちの子</h3>
          <p class="story-title">25マス計算をやらせてみて、子どもの分からないがやっと分かりました。</p>
          <p class="story-detail">
            計算が苦手な小学2年のうちの子。100マス計算は10分かけても終わらず。
            モチベーションアップの為、繰り上がりの無い25マス計算をやらせてみるとスイスイ。
            繰り上がりが苦手なのが分かったので、今は繰り上がり部分に印をつけて親子一緒に進めています。
            目指せ100マス10分切り！
          </p>
        </li>
        <li class="story-card">
          <h3>姪っ子</h3>
          <p class="story-title">振り返りを繰り返しやる事で、徐々に漢字への苦手意識が無くなってきました。</p>
          <p class="story-detail">
            数字は得意だが漢字が苦手な小学3年の姪っ子。
            漢字の宿題は難しすぎてほとんど手につかず。
            振り返りを意識して、小学1,2年の漢字をいかに丁寧に早くかけるか？をゲーム的にやらせています。
            漢字への苦手意識が減ってきたのか、小学3年の漢字を混ぜても気づかず(？)に書いてくれる様になったみたいです。
          </p>
        </li>
        <li class="story-card">
          <h3>甥っ子</h3>
          <p class="story-title">パパより速くなったよ！と目を輝かせる息子くん</p>
          <p class="story-detail">
            文系の両親と違い、数字が大好きな小学4年の甥っ子。 
            100マス計算をパパと競争させてみるとパパ1分45秒に甥っ子が2分の名勝負。
            甥っ子が悔しがり、毎日100マス計算を練習した結果、
            たった一週間でパパに打ち勝ったらしく、嬉しそうな顔で報告してくれました。
            今はパパが100マス特訓中らしいです。
          </p>
        </li>
      </ul>
      <button class="neu-button" type="button" onclick="location.href='./gallery'">
        <span>教材を試してみる！</span>
      </button>
    </section>
    <footer class="footer">
      <small>©︎ 2020 Seekers</small>
    </footer>
  </v-container>
</template>

<script>
export default {
  computed: {
  },
  created: function() {
    document.title = 'うちトレ | about';
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c');

.main-container {
  font-family: "M PLUS Rounded 1c";
  min-width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  background-color: #FAFAFA;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.page {
  width: 100%;
  padding: 32px 16px 64px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.page:not(:first-child) {
  position: relative;
  top: -32px;
  padding-top: 48px;
  background-color: #FAFAFA;
  border-radius: 32px 32px 0 0 ;
  box-shadow:  0 -4px 4px #d5d5d5;
}

/* component */
button {
  background-color:#E0E5EC;
  opacity: 0.9;
  border: none;
  border-radius: 24px;
  box-shadow: 4px 4px 8px rgb(163,177,198,0.6), -4px -4px 8px rgba(255,255,255, 0.5);
  padding: 8px 16px;
  color: #4D3252;
  font-weight: 700;
  overflow: hidden;
  position: relative;
}
button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  opacity: 0;
  transform: translateX(-100%);
  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right, 
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0.3) 100%
  );
}
button:hover::after {
  opacity: 1;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition-property: transform;
  transition-duration: 0.7s, 0.15s;
  transition-timing-function: ease;
}

.stepper {
  width: 420px;
  max-width: 100%;
  height: 125px;
  margin: 8px 0;
  padding: 0;
  display: flex;
  font-size: smaller;
}
.stepper > li {
  width: 100%;
  margin: 16px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  box-shadow:  8px 8px 16px #d5d5d5, 
              -8px -8px 16px #ffffff;
  padding: 8px;
}
.stepper > li p {
  text-align: center;
}
.next-vertical {
  width: 0;
  height: 0;
  margin: 8px;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 24px solid #E0E0E0;
}

/* section */
.page.top {
  background-image: url('./../assets/images/about/top.jpg');
  background-size: cover;
  background-position: center center;
  color: white;
  text-shadow: 0 0 5px black ;
}
.page-title {
  font-size: xx-large;
}
.page h2 {
  margin-bottom: 16px;
}

.story {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 0.8em;
  padding: 0.8em;
  margin: 0 0 2em;
}
.story-card {
  overflow: auto;
  min-width: 0;
  padding: 1em;
  border-radius: 8px;
  box-shadow:  8px 8px 16px #d5d5d5, 
              -8px -8px 16px #ffffff;
}
.story-detail {
  font-size: smaller;
}


</style>