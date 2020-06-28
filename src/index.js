import TablePage from '../packages/tablePage/index.js';
import CardPage from '../packages/cardPage/index.js';
import Tag from '../packages/tag/index.js';
const components = [TablePage, CardPage, Tag];
const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  TablePage,
  CardPage,
  Tag,
};
