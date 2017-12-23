/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import app from '../App'
import { routerMode } from '../config/env'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

Vue.use(Router);

export default new Router({
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  routes: [
    {
      path: '/',
      component: app,
      scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          if (from.meta.keepAlive) {
            from.meta.savedPosition = document.body.scrollTop;
          }
          return { x: 0, y: to.meta.savedPosition || 0 }
        }
      },
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: home
        }
      ]
    },
  ],
});
