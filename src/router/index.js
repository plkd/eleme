 /* eslint-disable */ 
import Vue from 'vue';
import Router from 'vue-router';
import app from '../App'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: app,
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
