import types from '@/store/types/casos'
import Vue from 'vue';

const state = {
 
}
const getters = {
 
}
const mutations = {
  
}
const actions = {
  [types.actions.ObtieneAmpliacionLugarSorteo]:({commit},obj)=>{
    return new Promise ((resolve,reject)=>{
        Vue.prototype.$http.get(`casos/listarTodos`).then(r=>{
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