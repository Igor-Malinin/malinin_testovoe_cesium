import Vue from 'vue'
import VueRouter from 'vue-router'
import CesiumVisualizationView from "@/views/CesiumVisualizationView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cesium',
    component: CesiumVisualizationView
  },
  {
    path: '/graph',
    name: 'graph',
    component: () => import( '../views/GraphView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
