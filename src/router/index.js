import Vue from 'vue';
import VueRouter from 'vue-router';
import Usuarios from '@/pages/usuarios.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Usuarios
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
