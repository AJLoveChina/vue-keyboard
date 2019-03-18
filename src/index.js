import vueKeyboard from './components/vue-keyboard'

const obj = {
  install(Vue, opts = {}) {
    Vue.component(vueKeyboard.name, vueKeyboard);
  }
};

if (window.Vue) {
  window.Vue.use(obj)
}
export default obj;
