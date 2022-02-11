import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
// import NProgress from 'nprogress';

import App from './App.vue'

Vue.config.productionTip = false

import routes from './router';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({ mode: 'history', routes });


new Vue({
  render: h => h(App),
  // store: store,
  router
}).$mount('#app')
