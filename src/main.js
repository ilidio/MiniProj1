import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;


import Home from './components/Home.vue';
import Cv from './components/Cv.vue';
import Hobbies from './components/Hobbies.vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


const router = new VueRouter({
  mode: 'history',
  routes:[
    {path:'/', component: Home},
    {path:'/Cv',component: Cv},
    {path:'/Hobbies',component: Hobbies}
  ]
})

new Vue({
  render: h => h(Header)
}).$mount('#header');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

new Vue({
  render: h => h(Footer)
}).$mount('#footer');
