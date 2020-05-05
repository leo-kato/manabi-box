<template>
  <v-container class="home-container">
    LP
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
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