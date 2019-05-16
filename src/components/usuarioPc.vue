<template>
  <div>
       <v-dialog v-model="dialog" persistent max-width="600px">
    
      <v-card>
        <v-card-title>
          <span class="headline">Formulario de Registro de Usuarios que Accederan a la PC para Atencion de CASOS</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12  >
                <v-text-field label="Nro Documento de Identidad" required v-model="objUsuarioPc.ci"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Nombre Completo" required v-model="objUsuarioPc.nombre"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Apellido Paterno" required v-model="objUsuarioPc.paterno"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Apellido Materno" required v-model="objUsuarioPc.materno"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Cerrar</v-btn>
          <v-btn color="blue darken-1" flat @click="insertOrUpdate()">Guadar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

     <v-btn depressed small color="primary" @click="dialog=true; objUsuarioPc={}" >Adicionar</v-btn>

    <v-data-table
      :headers="headerUsuarioPc"
      :items="lstUsuarioPc"
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
          <td style=" height: 30px;">{{props.item.ci +" "+props.item.extencion}}</td>
          <td style=" height: 30px;">{{props.item.nombre}}</td>
          <td style=" height: 30px;">{{props.item.paterno}}</td>
          <td style=" height: 30px;">{{props.item.materno}}</td>
          <td style=" height: 30px;">
            <v-icon
            small
            class="mr-2"
            color="teal"
            @click=" editar(props.item)"
          >
            edit
          </v-icon>
          <v-icon
          color="pink"
            small
           @click="eliminar(props.item)"
          >
            delete
          </v-icon>
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
        headerUsuarioPc:[
            { text: "Nro", value: "" },
            { text: "CI", value: "ci" },
            { text: "Nombre", value: "nombre" },
            { text: "Paterno", value: "paterno" },
            { text: "Materno", value: "materno" },
            { text: "", value: "" }
        ],
        lstUsuarioPc:[],
        dialog: false,
        objUsuarioPc:{}
    };
  },
 mounted(){
     this.cargarUsuarioPc();
 },
  methods: {
      eliminar(obj){
        this.deleteUsuarioPc(obj.usuario_id).then(r=>{
          this.cargarUsuarioPc();
        })
      },
      editar(obj){
        this.objUsuarioPc = obj;
        this.dialog=true;
      },
      insertOrUpdate(){
        this.insertOrUpdatePc(this.objUsuarioPc).then(r=>{
          this.cargarUsuarioPc();
          this.dialog=false;
        })
      },
      cargarUsuarioPc(){
        this.ObtieneUsuarioPc().then(r=>{
            this.lstUsuarioPc = r.data;
        })
      },
   
    ...mapActions({
        ObtieneUsuarioPc:typesUsuario.actions.ObtieneUsuarioPc,
        deleteUsuarioPc:typesUsuario.actions.deleteUsuarioPc,
        insertOrUpdatePc:typesUsuario.actions.insertOrUpdatePc
    })
  }
};
</script>

