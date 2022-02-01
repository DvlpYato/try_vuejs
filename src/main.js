import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
Vue.use(VueRouter);

Vue.config.productionTip = false;
// add bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

const routes = [
  { path: "/page1", component: Page1 },
  { path: "/page2", component: Page2 },
];
const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
