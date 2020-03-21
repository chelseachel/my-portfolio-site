import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/about/About.vue'
import Projects from '../views/projects/Projects.vue'
import Others from '../views/others/Others.vue'
import Contact from '../views/contact/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }, {
    path: '/others',
    name: 'Others',
    component: Others
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

]

const router = new VueRouter({
  routes,
  // mode: 'history',
  // base: '/',
  // scrollBehavior (to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       // 通过 to.hash 的值來找到对应的元素
  //       selector: to.hash
  //     }
  //   }
  // }
})

export default router
