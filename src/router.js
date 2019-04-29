import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({mode: 'history',routes : [
  {
    path: '/AtencionCasos',
    component: () => import('@/views/AtencionCasos.vue'),
    name:'Login'
    
  }
]})
