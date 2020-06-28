<template>
  <div class="page-header">
    <div class="bge-option">
      <slot name="option"></slot>
    </div>
    <div class="page-boby">
      <slot name="boby"></slot>
    </div>
  </div>
</template>

<style lang="less">
.el-collapse {
  border: none;
}
.collapse-title {
  flex: 1 0 90%;
  order: 1;
}
.el-collapse-item {
  padding: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 1);
  .el-collapse-item__header {
    flex: 1 0 auto;
    order: -1;
    border: none;

    .el-icon-arrow-right {
      &:before {
        content: '\e791';
      }
    }
  }
  .el-collapse-item__content {
    padding: 0px 10px;
    .tag {
      margin: 0 10px;
      overflow: hidden;
      display: inline-block;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      border: 1px solid rgba(72, 207, 188, 1);
      .tag-name {
        display: inline-block;
        height: 20px;
        background: #48cfbc;
        padding: 5px 20px;
        color: #ffffff;
        font-size: 14px;
        line-height: 20px;
      }
      .tag-date {
        padding: 5px 20px;
        display: inline-block;
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(72, 207, 188, 1);
        line-height: 20px;
      }
    }
  }
  .el-collapse-item__wrap {
    border: none;
  }
}
</style>
<script>
export default {
  name: 'CardPage',
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {
      activeNames: ['1'],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
