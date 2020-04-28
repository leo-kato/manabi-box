<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed temporary app>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              メニュー
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item v-for="n in navigations" :key="n.name" :to="n.path" :title="n.description">
            <v-list-item-icon>
              <v-icon>{{ n.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ n.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar class="d-print-none" color="primary" dark dense app>
      <v-app-bar-nav-icon class="d-none d-sm-flex" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-btn v-if="this.$route.path != '/'" class="d-flex d-sm-none" to="/" icon>   
         <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content class="main-content">
      <router-view></router-view>
    </v-content>

    <v-footer class="d-print-none" color="primary" dark padless app>
      <v-layout justify-center align-center>
        ©︎ Copyright Seekers
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import MENU from '@/config/menu.js'

export default {
  name: 'App',
  data () {
    return {
      pageTitle2: 'うちトレ',
      drawer: false,
    }
  },
  computed: {
    navigations: function() {
      return MENU.GLOBAL_NAV;
    },
    pageTitle: function() {
      let navigation = MENU.FULL_LIST.find(n => n.path == this.$route.path);
      return navigation.pageTitle || navigation.name;
    },
  },
};
</script>

<style scoped>
@media print {
  .main-content {
    padding-top: 0px !important;
  }
}
</style>