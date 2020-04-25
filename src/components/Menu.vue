<template>
    <v-container>
      <v-row 
        align="center"
        justify="end">
        <v-col cols="12">
          <v-card 
            v-for="m in menu"
            :key="m.path"
            class="ma-2"
            :color="m.color"
            :href="m.path"
            dark>
            <v-card-title class="headline">
              <v-icon class="ma-2">{{ m.icon }}</v-icon>
              {{ m.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ m.description }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
const MENU = [
  {useInMenu: false, color: '', name: 'Home', icon: 'mdi-home', path: '/', pageTitle: '全てのメニュー', description: '全てのメニューを表示します。'},
  {useInMenu: true, color: 'blue', name: '100マス計算', icon: 'mdi-calculator-variant', path: '/materials/box100', description: 'たし算、ひき算、かけ算。できるだけ早く、できるだけ正確に100マス計算。'},
  {useInMenu: true, color: '#952175', name: '漢字書くのだ！', icon: 'mdi-pen', path: '/materials/kanji8', description: '漢字を丁寧に書く練習。'},
  {useInMenu: false, color: '', name: '漢字書くのだ！（旧）', icon: 'mdi-pen', path: '/materials/kanji25', description: 'ボツ案'},
  {useInMenu: false, color: '', name: '問い合わせ', icon: 'mdi-account-box', path: '/contact', description: '何か気になることがあればこちらまで。'},
];

export default {
  computed: {
    menu: function() {
      return MENU.filter(n => n.useInMenu);
    },
  },
}
</script>