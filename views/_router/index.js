import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: function (resolve) {
        require(['../home/home.vue'], resolve)
      }
    }
  ]
});
