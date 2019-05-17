<template>
  <div>
    <v-card class="mt-5 mx-auto ma-0.5" width="95%" elevation="7">
      <v-sheet
        :class="'v-sheet--offset mx-auto pa-2'"
        :color="'blue darken-3'"
        elevation="12"
        max-width="calc(100% - 40px)"
        dark
      >
        <span class="subheading">Usuarios (Los que Atienden el Caso)</span>
      </v-sheet>
      <v-card-text class="pt-0">
        <span
          class="font-weight-light caption"
        >En esta Seccion esta los usuarios que peuden y deben tener Acceso al Sistema para la Atencion de Caso</span>
        <v-divider class="my-2"></v-divider>
        <usuarioPcComponent></usuarioPcComponent>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import usuarioPcComponent from "@/components/usuarioPc";
import usuarioMovilComponent from "@/components/usuarioMovil";
export default {
     components:{
    usuarioPcComponent,
    usuarioMovilComponent
    },
}
</script>
