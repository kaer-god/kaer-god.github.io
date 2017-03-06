import Vue from 'vue';
import Router from 'vue-router';
import App from './m.vue';

window.Vue = Vue;

Vue.use(Router);

console.log('哈哈')

const rt = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: function (resolve) {
        require(['./home/home'], resolve)
      }
    }
  ]
});
console.log(rt)

new Vue(App).$mount('#app');
