<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Autenticación</v-toolbar-title>
                
    

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="usuario"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="contrasena"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn small color="primary" @click="Ingresar">Ingresar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import typesUsuario from '@/store/types/usuario'
import {mapActions, mapGetters, mapMutations} from 'vuex';
  export default {
    data: () => ({
        usuario:null,
        contrasena:null
    }),
    methods:{
        Ingresar(){
            let obj = {
                ci:this.contrasena,
                nombre:this.usuario
            }
            this.Login(obj).then(r=>{
                if(r.status===200){
                    this.$store.commit('cargarDatosLoginSession', r);
                    
                    this.$router.push('/AtencionCasos');
                }
            })
        },
        cerrarSession(){

        },
        ...mapActions({
            Login:typesUsuario.actions.Login
        })
    }
  }
</script>