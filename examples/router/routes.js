const routes = [
  {
    path: "/table",
    name: "table",
    nav: "表格页面",
    component: () =>
      import(
        /* webpackChunkName: "table" */ "../views/tablePage/TablePage.vue"
      ),
  },
  {
    path: "/card",
    name: "card",
    nav: "卡片页面",
    component: () =>
      import(/* webpackChunkName: "card" */ "../views/cardPage/CardPage.vue"),
  },
  {
    path: "/alert",
    name: "alert",
    nav: "md",
    component: () =>
      import(/* webpackChunkName: "card" */ "../views/alert.vue"),
  },
];

export default routes;
