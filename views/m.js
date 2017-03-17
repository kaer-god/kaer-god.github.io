import Vue from 'vue';
// import App from './m.vue';
import Router from 'vue-router';

const router = new Router({
  mode: 'history',
  routes: [{}]
});

window.Vue = Vue;

new Vue({router}).$mount('#app')
// new Vue(App).$mount('#app');
