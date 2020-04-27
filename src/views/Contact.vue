<template>
  <v-container class="contact-container">
    <iframe class="contact-form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfRTqmrDOzHzK9y4Ciu-YXCT2oOB_FV8sUS8MtXJgDzfKYTFQ/viewform?embedded=true" 
      frameborder="0" marginheight="0" marginwidth="0">
      Loading…
    </iframe>
  </v-container>
</template>

<script>
export default {
  created: function() {
    document.title = 'うちトレ | 問い合わせ';
  }
}
</script>

<style scoped>
.contact-container {
  min-width: 100%;
  min-height: 100%;
}
.contact-form {
  min-width: 95vw;
  min-height: 95vh;
}
</style>

<!--
https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRTqmrDOzHzK9y4Ciu-YXCT2oOB_FV8sUS8MtXJgDzfKYTFQ/formResponse
entry.1452910527
entry.969062907
entry.1238797284
entry.1983407333
-->
