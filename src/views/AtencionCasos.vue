<template>
    <v-layout justify-center >
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
          <td style=" height: 40px;">{{props.index + 1 }}</td>
          <td style=" height: 40px;">{{props.item.caso_id}}</td>
          <td style=" height: 40px;">{{props.item.descripcion}}</td>
          <td style=" height: 40px;">{{props.item.usuario_id}}</td>
          <td><v-btn  depressed small color="primary">Recepcionar</v-btn></td>
        </tr>
      </template>
      </v-data-table>
    </v-layout>
</template>
<script>
import { mapActions } from 'vuex';
import typesCasos from '@/store/types/casos'
export default {
    data(){
        return {
             lstCasos:[],
             headerCasos: [
                { text: "Nro", value: "" },
                { text: "Nro de Caso", value: "caso_id" },
                { text: "Descripción", value: "descripcion" },
                { text: "Usuario - Denuncia", value: "usuario_id" },
                { text: "", value: "" }
            ]
        }
    },
    mounted(){
        this.cargarDatos();
    },
    methods:{
        cargarDatos(){
            this.ObtieneAmpliacionLugarSorteo().then(r=>{
                this.lstCasos = r.data;
            })
        },
        ...mapActions({
            ObtieneAmpliacionLugarSorteo:typesCasos.actions.ObtieneAmpliacionLugarSorteo
        })
    }
}
</script>
