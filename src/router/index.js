/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import app from '../App'
import { routerMode } from '../config/env'
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')
const address = r => require.ensure([], () => r(require('../page/profile/children/children/address')), 'address')
const add = r => require.ensure([], () => r(require('../page/profile/children/children/children/add')), 'add')
const addDetail = r => require.ensure([], () => r(require('../page/profile/children/children/children/children/addDetail')), 'addDetail')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const setusername = r => require.ensure([], () => r(require('../page/profile/children/setUserName')), 'setusername')
const service = r => require.ensure([], () => r(require('../page/service/service')), 'service')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')

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
        },
        {
          path: '/city/:cityId',
          component: city
        },
        //所有商铺列表页
        {
          path: '/msite',
          component: msite,
          meta: { keepAlive: true },
        },
        // 个人信息页
        {
          path: '/profile',
          component: profile,
          children: [
            {
              path: 'info',
              component: info,
              children: [
                {
                  path: 'address',
                  component: address,
                  children: [
                    {
                      path: 'add',
                      component: add,
                      children: [
                        {
                          path: 'addDetail',
                          component: addDetail
                        }
                      ]
                    }
                  ]
                }
              ]
            }, {
              path: 'setusername',
              component: setusername
            },
            {
              path: 'service',
              component: service
            }
          ]
        },
        // 登录 注册
        {
          path: '/login',
          component: login
        },
        {
          path: '/forget',
          component: forget
        },
        //特色商铺列表页
        {
          path: '/food',
          component: food
        },
      ]
    },
  ],
});
