import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _524ac71e = () => interopDefault(import('..\\pages\\editor.vue' /* webpackChunkName: "pages_editor" */))
const _772c1dd6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _ba41d8b2 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _2882e127 = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages_settings" */))
const _7cf09dd8 = () => interopDefault(import('..\\pages\\article\\_slug.vue' /* webpackChunkName: "pages_article__slug" */))
const _d9a5fa20 = () => interopDefault(import('..\\pages\\profile\\_username.vue' /* webpackChunkName: "pages_profile__username" */))
const _0a7b6404 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/editor",
    component: _524ac71e,
    name: "editor"
  }, {
    path: "/login",
    component: _772c1dd6,
    name: "login"
  }, {
    path: "/register",
    component: _ba41d8b2,
    name: "register"
  }, {
    path: "/settings",
    component: _2882e127,
    name: "settings"
  }, {
    path: "/article/:slug?",
    component: _7cf09dd8,
    name: "article-slug"
  }, {
    path: "/profile/:username?",
    component: _d9a5fa20,
    name: "profile-username"
  }, {
    path: "/",
    component: _0a7b6404,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
