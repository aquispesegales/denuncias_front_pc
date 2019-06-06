<template>
  <v-layout justify-center>
    <v-dialog v-model="dialogMapa" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-card-title class="headline">Direccción</v-card-title>
        <v-card-text>
          Direccion Exacta
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="50%">
      <v-card>
        <v-card-title class="headline">Evidencia Objetiva</v-card-title>
        <v-card-text>
          <img v-bind:src="imagenActiva" width="500" height="300">
        </v-card-text>

        <v-card-title class="headline">Lugar donde realizo la Denuncia</v-card-title>
        <v-card-text>
          
          <GmapMap
            :center="{lat:-16.4897, lng:-68.1193}"
            :zoom="16"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
          >
            <!--<GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />-->



          <GmapMarker 
              :position="{lat: -16.4897, lng: -68.1193}"
              :clickable="true"
              :draggable="true"
               @click="dialogMapa=true;"
              
            />
        
        

            

            


          </GmapMap>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" flat="flat" @click="dialog = false">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
        >En esta Seccion esta Los Casos que se Envian desde la App Móvil</span>
        <v-divider class="my-2"></v-divider>
        <v-data-table
          :headers="headerCasos"
          :items="lstCasos"
          class="elevation-3"
          style=" border: 1px solid #0D47A1;"
        >
          <template slot="headers" slot-scope="props">
            <tr style=" height: 100%;  ">
              <th
                v-for="header in props.headers"
                :key="header.text"
                style="color: #0D47A1; height: 40px;"
              >
                <v-icon small>arrow_upward</v-icon>
                {{ header.text }}
              </th>
            </tr>
          </template>
          <template slot="items" slot-scope="props">
            <tr>
              <td style=" height: 30px;">{{props.index + 1 }}</td>
              <td style=" height: 30px;">{{props.item.caso_id}}</td>
              <td style=" height: 30px;">{{props.item.descripcion}}</td>
              <td style=" height: 30px;">{{props.item.usuario_id}}</td>
              <td style=" height: 30px;">
                <a @click="dialog=true; imagenActiva =props.item.fotoUrl">ver mas...</a>
              </td>
              <td style=" height: 30px;">
                <v-btn depressed small color="primary">Recepcionar</v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
import { mapActions } from "vuex";
import typesCasos from "@/store/types/casos";
export default {
  data() {
    return {
      lstCasos: [],
      headerCasos: [
        { text: "Nro", value: "" },
        { text: "Nro de Caso", value: "caso_id" },
        { text: "Descripción", value: "descripcion" },
        { text: "Usuario - Denuncia", value: "usuario_id" },
        { text: "Mas Detalle", value: "" },

        { text: "", value: "" }
      ],
      dialog: false,
      dialogMapa:false,
      imagenActiva: null
    };
  },
  mounted() {
    this.cargarDatos();
  },
  methods: {
    cargarDatos() {
      this.ObtieneAmpliacionLugarSorteo().then(r => {
        this.lstCasos = r.data;
      });
    },
    ...mapActions({
      ObtieneAmpliacionLugarSorteo:
        typesCasos.actions.ObtieneAmpliacionLugarSorteo
    })
  }
};
</script>
