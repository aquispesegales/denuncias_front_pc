import types from '@/store/types/usuario'
import Vue from 'vue';

const state = {
 
}
const getters = {
 
}
const mutations = {
  
}
const actions = {
  [types.actions.ObtieneUsuarioPc]:({commit},obj)=>{
    return new Promise ((resolve,reject)=>{
        Vue.prototype.$http.get(`usuario/listarUsuarioPcTodos`).then(r=>{
            resolve(r);
        })
    })
  },
  [types.actions.deleteUsuarioPc]:({commit},usuario_id)=>{
    return new Promise ((resolve,reject)=>{
        Vue.prototype.$http.delete(`usuario/deleteUsuarioPc/${usuario_id}`).then(r=>{
            resolve(r);
        })
    })
  },
  [types.actions.insertOrUpdatePc]:({commit},obj)=>{
    return new Promise ((resolve,reject)=>{
        Vue.prototype.$http.post(`usuario/insertOrUpdatePc`,obj).then(r=>{
            resolve(r);
        })
    })
  },
  
  
  [types.actions.ObtieneUsuarioMovil]:({commit},obj)=>{
    return new Promise ((resolve,reject)=>{
        Vue.prototype.$http.get(`usuario/listarUsuarioMovilTodos`).then(r=>{
            resolve(r);
        })
    })
  },
}
export default {
  state,
  actions,
  getters,
  mutations
}