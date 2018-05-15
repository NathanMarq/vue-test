import Vue from 'vue';
import App from './App.vue';
import router from './router';

//import thing from './components/thing/thing.vue';
import fuck from './components/FuckYou.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  fuck,
}).$mount('#app');
