<template>
    <v-container>
      <v-row 
        align="center"
        justify="end">
        <v-col cols="12">
          <v-card 
            v-for="m in menu"
            :key="m.path"
            class="menu-card ma-2"
            :color="m.color"
            :href="m.path"
            dark>
            <v-card-title class="headline">
              <v-icon class="menu-icon ma-2">{{ m.icon }}</v-icon>
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
import MENU from '@/config/menu.js'

export default {
  computed: {
    menu: function() {
      return MENU.GALLERY;
    },
  },
}
</script>

<style scoped>
.menu-card {
  transition: 1s;
}
.menu-card:hover .menu-icon {
  transform: rotate(360deg);
  /* animation: shake .1s linear infinite; */
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-5%);
  }
  80% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>