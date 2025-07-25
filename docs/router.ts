// docs/router.ts
import HomeView from '@docs/views/ExampleHomepage.vue'
import {
  createRouter,
  createWebHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'example-homepage',
    component: HomeView,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
