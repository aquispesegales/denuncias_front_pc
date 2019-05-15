<template>
  <div>
    <v-data-table
      :headers="headerUsuarioMovil"
      :items="lstUsuarioMovil"
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
          <td style=" height: 30px;">{{props.item.ci}}</td>
          <td style=" height: 30px;">{{props.item.nombre}}</td>
          <td style=" height: 30px;">{{props.item.paterno}}</td>
          <td style=" height: 30px;">{{props.item.materno}}</td>
          <td style=" height: 30px;">
            <v-btn depressed small color="primary">Recepcionar</v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import typesUsuario from "@/store/types/usuario";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
        headerUsuarioMovil:[
            { text: "Nro", value: "" },
            { text: "CI", value: "ci" },
            { text: "Nombre", value: "nombre" },
            { text: "Paterno", value: "paterno" },
            { text: "Materno", value: "materno" },
            { text: "", value: "" }
        ],
        lstUsuarioMovil:[]
    };
  },
   mounted(){
     this.cargarUsuarioMovil();
 },
  methods: {
    cargarUsuarioMovil(){
        this.ObtieneUsuarioMovil().then(r=>{
            this.lstUsuarioMovil = r.data;
        })
      },
    ...mapActions({
        ObtieneUsuarioMovil:typesUsuario.actions.ObtieneUsuarioMovil
    })
  }
};
</script>
