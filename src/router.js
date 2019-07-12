import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Scan from './pages/Scan.vue';
import SignUp from './pages/SignUp.vue';
import Login from './pages/Login.vue';
import Product from './pages/Product.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import store from '@/store';

Vue.use(Router);

let router = new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/main',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/product',
      name: 'product',
      components: { default: Product, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      meta: {
        requiresAuth: true,
        auth: true
      }
    },
    {
      path: '/scan',
      name: 'scan',
      components: { default: Scan, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/signup',
      name: 'signup',
      components: { default: SignUp, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  if(to.meta.auth && !store.state.currentUser) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router