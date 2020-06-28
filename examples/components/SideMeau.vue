<template>
  <div class="left">
    <el-menu router class="el-menu-vertical-demo">
      <el-menu-item :index="item.path" v-for="item in routes" :key="item.name">
        <span slot="title">{{ item.nav }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="less" scoped>
.left {
  width: 160px;
  height: 100%;
  background: #fff;
}
.el-menu {
  border: none;
}
.el-menu-item {
  height: 30px;
  line-height: 30px;
}
</style>
<script>
import routes from '../router/routes.js';
export default {
  name: 'SideMeau',
  data() {
    return {
      isCollapse: true,
      routes: routes,
    };
  },
};
</script>
