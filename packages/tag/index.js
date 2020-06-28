import Tag from './src/Tag.vue';

/* istanbul ignore next */
Tag.install = function(Vue) {
  Vue.component(Tag.name, Tag);
};

export default Tag;
