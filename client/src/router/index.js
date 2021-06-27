import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import register from '../components/register'
import dashboard from '../components/dashboard'
import about from '../components/about'
import contact from '../components/contact'
import successful_signup from "../components/successful_signup";
import forgot from "../components/forgot";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: login
    },
    {
      path: '/success',
      name: 'success',
      component: successful_signup
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/about-us',
      name: 'about',
      component: about
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: contact
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: forgot
    },
  ]
})
