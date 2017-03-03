import Vue from 'vue';
import Router from 'vue-router';
import App from './m.vue';

window.Vue = Vue;

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: function (resolve) {
        require(['./themes/home/home'], resolve)
      }
    }
  ]
});
new Vue(App).$mount('#app');
