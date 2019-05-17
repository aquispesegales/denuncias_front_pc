import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import casos from '@/store/modules/casos.module.js';
import usuario from '@/store/modules/usuario.module.js';

export default new Vuex.Store({
  state: {
    datosSession:{},
    sessionIciado:false
  },
  mutations: {
    cargarDatosLoginSession(state,pObjDatosSession){
      if(pObjDatosSession.data.status === 200){
        state.sessionIciado = true;
        state.datosSession = pObjDatosSession.data.result;
      } 
      else state.sessionIciado = false;
    },
    cerrarSession(state){
      state.sessionIciado = false;
      state.datosSession={};
    }
  },
  actions: {

  },
  modules:{
    casos,
    usuario
  }
})

