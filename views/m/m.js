import Vue from 'vue';
import Router from 'vue-router';
import App from './m.vue';

window.Vue = Vue;

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: function (resolve) {
        require(['./themes/home/home'], resolve)
      }
    }
  ]
});

console.log('哈哈')
new Vue(App).$mount('#app');
