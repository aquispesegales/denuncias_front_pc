<template>
  <v-app>
    <template v-if="$store.state.sessionIciado">
      <v-navigation-drawer
        :clipped="clipped"
        v-model="drawer"
        enable-resize-watcher
        fixed
        app
        width="300"
      >
        <app-menu></app-menu>
      </v-navigation-drawer>
    </template>
    <v-toolbar
      dark
      fixed
      app
      color="light-blue darken-4"
      :clipped-left="clipped"
      v-if="$store.state.sessionIciado"
    >
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title">{{$route.name}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon large>account_circle</v-icon>
          </v-btn>
        </template>
        <div style="width:300px; background-color: white;" class="pa-3" >
          <div class="caption font-weight-bold">NOMBRE USUARIO</div>
          <div class="caption font-weight-light">{{$store.state.datosSession.nombre}}</div>
          <div class="caption font-weight-bold">APELLIDO PATERNO</div>
          <div class="caption font-weight-light">{{$store.state.datosSession.paterno}}</div>
          <div class="caption font-weight-bold">APELLIDO MATERNO</div>
          <div class="caption font-weight-light">{{ $store.state.datosSession.materno }}</div>
          <v-divider></v-divider>
          <v-btn flat small color="primary" @click="cerrarSession()">Cerrar Sessión</v-btn>
        </div>
      </v-menu>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppMenu from "@/components/shared/AppMenu";

export default {
  name: "App",
  components: {
    AppMenu
  },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false
    };
  },
  mounted() {
    if (!this.$store.state.sessionIciado) this.$router.push("/Login");
    else this.$router.push("/AtencionCasos");
  },
  methods:{
    cerrarSession(){
      this.$store.commit('cerrarSession');
      this.$router.push("/Login");
    }
  }
 
};
</script>
