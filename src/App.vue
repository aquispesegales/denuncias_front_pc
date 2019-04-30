<template>
  <v-app>
    <template>
    <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app width="300">
        <app-menu ></app-menu>
      </v-navigation-drawer>
    </template>
     <v-toolbar  dark fixed app   color="light-blue darken-4"   :clipped-left="clipped">
        <v-toolbar-title>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <span class="title"> {{$route.name}} </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
          <v-menu open-on-hover offset-y >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon large>account_circle</v-icon>
          </v-btn>
        </template>
          </v-menu>
     </v-toolbar>
     <v-content>
         <router-view/>
      </v-content>
  </v-app>
</template>

<script>

import AppMenu from '@/components/shared/AppMenu';

export default {
  name: 'App',
  components: {
    AppMenu
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false
    }
  }
}
</script>
