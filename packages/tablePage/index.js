import TablePage from './src/page.vue';

/* istanbul ignore next */
TablePage.install = function(Vue) {
  Vue.component(TablePage.name, TablePage);
};

export default TablePage;
