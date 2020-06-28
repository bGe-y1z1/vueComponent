import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import bgeUI from "../src/index.js";
import "../src/css/index.css";
import DemoBlock from "../examples/components/DemoBlock.vue";

import "./assets/styles/common.css";
import "highlight.js/styles/atom-one-dark.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component("DemoBlock", DemoBlock);
Vue.use(bgeUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
