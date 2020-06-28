import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import hljs from "highlight.js";
import routes from "./routes.js";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});
router.afterEach((route) => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)");
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  // const data = title[route.meta.lang];
  // for (let val in data) {
  //   if (new RegExp("^" + val, "g").test(route.name)) {
  //     document.title = data[val];
  //     return;
  //   }
  // }
  document.title = "Element";
  // ga("send", "event", "PageView", route.name);
});

export default router;
