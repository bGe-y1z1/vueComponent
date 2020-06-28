<template>
  <div id="app" class="page">
    <side-meau />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<style lang="less">
.page {
  display: flex;
  background: rgba(245, 245, 245, 1);
  height: 100%;
  .main {
    flex: 1;
    padding: 20px;
  }
}
</style>
<script>
import SideMeau from "./components/SideMeau.vue";
export default {
  name: "app",
  components: { SideMeau },
};
</script>
