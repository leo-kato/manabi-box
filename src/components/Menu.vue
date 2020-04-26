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
import MENU from '@/config/menu.js'

export default {
  computed: {
    menu: function() {
      return MENU.LIST;
    },
  },
}
</script>