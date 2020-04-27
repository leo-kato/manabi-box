<template>
  <v-container class="home-container">
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