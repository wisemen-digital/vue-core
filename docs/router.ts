// docs/router.ts
import HomeView from '@docs/views/ExampleHomepage.vue'
import {
  createMemoryHistory,
  createRouter,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'example-homepage',
    component: HomeView,
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
