import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import routes from "./router"
import vuexStore from './store'
import { Form, FormItem, Select, Option, Input, Upload } from 'element-ui';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueAxios, axios);

//Element-ui
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Upload);

const router = new VueRouter({
  routes
});

const store = new Vuex.Store(vuexStore);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
