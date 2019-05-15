import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({mode: 'history',routes : [
  {
    path: '/AtencionCasos',
    component: () => import('@/views/AtencionCasos.vue'),
    name:'Atencion de Casos'
    
  },
  {
    path: '/Usuario',
    component: () => import('@/views/Usuario.vue'),
    name:'Usuarios'
    
  }
]})
