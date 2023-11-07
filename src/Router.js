import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/LoginLayout.vue'
import hello from './components/HelloWorld.vue'
import test from './pages/RoutingTest.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/hello',
    name: 'hello',
    component: hello
  },
  {
    path: '/test',
    name: 'test',
    component: test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
