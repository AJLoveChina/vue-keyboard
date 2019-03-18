import Vue from 'vue'
import App from './App.vue'
import VueKeyboard from './index.js'


Vue.use(VueKeyboard);

new Vue({
  el: '#app',
  render: h => h(App)
});
