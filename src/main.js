import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false


//import bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


//import vue valdtion
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
import i18n from './i18n'
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('en', en);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;



new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
