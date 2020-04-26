<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary app>
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
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer class="d-print-none" color="primary" dark app>
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
      pageTitle: 'まなびのはこ',
      drawer: false,
    }
  },
  computed: {
    navigations: function() {
      return MENU.GLOBAL_NAV;
    },
  },
  created: function() {
    this.updatePageTitle();
  },
  updated: function() {
    this.updatePageTitle();
  },
  methods: {
    updatePageTitle: function() {
      let navigation = MENU.FULL_LIST.find(n => n.path == this.$route.path);
      this.pageTitle = navigation.pageTitle || navigation.name;
    }
  },
};
</script>