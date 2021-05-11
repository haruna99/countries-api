import Vue from "vue";
import App from "./App.vue";
import router from './router'
import VuexRouterSync from 'vuex-router-sync';

import "./registerServiceWorker";
import store from "./store";
import vuetify from "./plugins/vuetify";


Vue.config.productionTip = false;

VuexRouterSync.sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
