import Vue from 'vue'
import App from './App.vue'
import GlobalMethods from './mixins/GlobalMethods.js';

Vue.mixin(GlobalMethods);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')