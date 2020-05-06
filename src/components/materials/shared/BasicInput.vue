<template> 
  <v-row dense>
    <v-row class="ml-auto " 
      justify="end"
      dense>
      <v-spacer></v-spacer>
      <v-col>
        <v-text-field
          prefix="名前：">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="ml-auto " 
      justify="end"
      dense>
      <v-col class="d-flex">
        <v-text-field
          suffix="月">
        </v-text-field>
        <v-text-field
          suffix="日">
        </v-text-field>
        <v-text-field
          prefix="（"
          suffix="）">
        </v-text-field>
      </v-col>
      <v-col class="d-flex">
        <v-text-field
          suffix="分">
        </v-text-field>
        <v-text-field
          suffix="秒">
        </v-text-field>
      </v-col>
      <v-col class="d-flex">
        <v-text-field
          suffix="点">
        </v-text-field>
      </v-col>
    </v-row>
  </v-row>
</template>