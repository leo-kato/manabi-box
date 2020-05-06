<template>
  <v-container class="main-container">
    <section class="page top">
        <h1 class="page-title">うちトレ！！</h1>
        <p>
          学習習慣を作ろう！まずは10分の集中力。
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
        <li class="stepper-item">
          <h3>Step1</h3>
          <p>スマホ/PCで問題を選択</p>
        </li>
        <li class="stepper-item">
          <h3>Step2</h3>
          <p>印刷ボタンを押すだけ</p>
        </li>
        <li class="stepper-item">
          <h3>Step3</h3>
          <p>子供にパス</p>
        </li>
      </ul>
      <h3>答え合わせは自分で！！</h3>
      <ul class="stepper">
        <li class="stepper-item">
          <h3>Step1</h3>
          <p>スマホを渡して</p>
        </li>
        <li class="stepper-item">
          <h3>Step2</h3>
          <p>QRコード</p>
        </li>
        <li class="stepper-item">
          <h3>Step3</h3>
          <p>自分で採点！</p>
        </li>
      </ul>
      <p>
        ランダム出題なので、何回でも使える！<br>
        同じ問題もQRコードから何度でも！！<br>
        <span style="font-size:smaller;">※同じ問題でいいので、目標時間を決めてやるのが効率的。</span>
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
        ぜひ、その子に合うやり方を探してみてください。
      </p>
      <p>
        もし「こんなもの作ってくれたらな」のようなリクエストがあれば <a href="./contact">こちら</a> まで！<br>
        <span style="font-size:smaller;">※できるかはわかりませんmm</span>
      </p>
    </section>
    <section class="page example">
      <h2>体験談</h2>
      <ul class="story">
        <li class="story-card">
          <h3>うちの子</h3>
          <p class="story-title">25マス計算をやらせてみて、子どもの分からないがやっと分かりました。</p>
          <p class="story-detail">
            計算が苦手な小学2年の我が子。一人で算数の宿題をやらせてみると
            何がわからないのかもわからない状態で全く歯が立たない状態。
            まずは基本の足し算引き算をと思い、100マス計算をやらせてみたが
            10分かけても100マスを埋められず。終わらないプリントはやばいと
            思い、繰り上がりの無い25マス計算をやらせてみるとスイスイ出来ました。
            繰り上がりが苦手な様なので、今は100マスの繰り上がり部分に印を
            つけて、親子一緒に進めています。目指せ100マス10分切り！
          </p>
        </li>
        <li class="story-card">
          <h3>姪っ子</h3>
          <p class="story-title">振り返りを繰り返しやる事で、徐々に漢字への苦手意識が無くなってきました。</p>
          <p class="story-detail">
            数字は得意ですが漢字が苦手な小学3年のウチの子。宿題の漢字は難しすぎて
            ほとんど手につかない模様。振り返りを意識して、小学1,2年の漢字をいかに
            丁寧に早くかけるか？をゲーム的にやらせています。
            最近は漢字への苦手意識が無くなってきたのか、小学3年の漢字を混ぜても
            気づかず(？)に書いてくれる様になりました。
            どうしようもなくやる気のない日は、100マス計算で速さの記録更新を狙ってます。
          </p>
        </li>
        <li class="story-card">
          <h3>甥っ子</h3>
          <p class="story-title">パパより速くなったよ！と目を輝かせる息子くん</p>
          <p class="story-detail">
            文系の私達と違い、数字が大好きな息子くん。
            試しに100マス計算をやらせてみると、なんと最初から2分ジャストの好成績。
            よどみなく手が動いていました。試しにパパが競争してみると、15秒ほどしか
            差がなくてびっくり。息子くんはよっぽど悔しかったみたいで、毎日100マス計算を
            練習した結果、たった一週間でパパに打ち勝ったらしく、嬉しそうな顔で報告してくれました。
            一週間で負けたのが悔しかったのか、今はパパが息子くんの記録を追いかける日々です。
          </p>
        </li>
      </ul>
      <button class="neu-button" type="button" onclick="location.href='./gallery'">
        <span>教材を試してみる！</span>
      </button>
    </section>
    <footer class="footer">
      <span>©︎ Copyright Seekers</span>
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
  font-size: smaller;
}
.page {
  width: 100%;
  padding: 32px 32px 64px 32px;
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
  box-shadow: 8px 8px 12px rgb(163,177,198,0.6), -8px -8px 12px rgba(255,255,255, 0.5);
  padding: 8px 16px;
  color: #4D3252;
  font-weight: 700;
  overflow: hidden;
  position: relative;
}
button:after {
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
button:hover:after {
  opacity: 1;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition-property: transform;
  transition-duration: 0.7s, 0.15s;
  transition-timing-function: ease;
}

.stepper {
  display: flex;
  font-size: smaller;
}
.stepper-item {
  width: 100%;
  margin: 16px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  box-shadow:  16px 16px 32px #d5d5d5, 
              -16px -16px 32px #ffffff;
  padding: 8px;
}
.stepper-item p {
  text-align: center;
}

/* section */
.page.top {
  background-image: url('./../assets/images/about/top.jpg');
  background-size: cover;
  background-position: center center;
  color: white;
  text-shadow: 0 0 3px gray ;
}
.page-title {
  font-size: xx-large;
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
  background: #FAFAFA;
  box-shadow:  16px 16px 32px #d5d5d5, 
              -16px -16px 32px #ffffff;
}
.story-detail {
  font-size: smaller;
}


</style>