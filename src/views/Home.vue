<template>
  <v-content class="home-container">
    <Menu />
  </v-content>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>

<style scoped>
.home-container {
  min-width: 100%;
  min-height: 100%;
}
</style>