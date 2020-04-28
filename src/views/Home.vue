<template>
  <v-container class="home-container">
    <v-alert v-if="isSafari" type="warning" dense>
      Safariを利用する場合、ブラウザの誤印刷防止機能のため「印刷は禁止されています」といったメッセージが表示されることがありますが、「許可」を押して印刷してください。
    </v-alert>
    <Menu />
  </v-container>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Menu
  },
  computed: {
    isSafari: function() {
      let ua = window.navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1;
    },
  },
  created: function() {
    document.title = 'うちトレ';
  }
}
</script>

<style scoped>
.home-container {
  min-width: 100%;
  min-height: 100%;
}
</style>