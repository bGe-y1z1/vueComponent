<template>
  <div>
    <card-page :data="data">
      <template slot="option">
        <el-row type="flex" justify="space-between" class="ptb20">
          <el-col>
            <span>共 <span class="color-red">7</span> 个记录</span>
          </el-col>
          <el-col class="text-rigth">
            <el-button icon="el-icon-download">导出记录</el-button>
          </el-col>
        </el-row>
      </template>
      <template slot="boby">
        <tag :data="data"></tag>
      </template>
    </card-page>
  </div>
</template>

<style lang="less"></style>
<script>
export default {
  data() {
    return {
      data: [
        {
          tag: "标签分类",
          len: 20,
          id: 1,
          children: [
            {
              name: "标签1",
              id: 1,
              date: "2020-5-17",
              color: "#48CFBC",
            },
            {
              name: "标签1",
              id: 2,
              date: "2020-5-17",
              color: "#5FA3C9",
            },
            {
              name: "标签1",
              id: 3,
              date: "2020-5-17",
              color: "#F7C05E",
            },
          ],
        },
        {
          tag: "标签分类",
          len: 20,
          id: 2,
          children: [
            {
              name: "标签2",
              id: 1,
              date: "2020-5-17",
              color: "#48CFBC",
            },
            {
              name: "标签1",
              id: 2,
              date: "2020-5-17",
              color: "#5FA3C9",
            },
            {
              name: "标签1",
              id: 3,
              date: "2020-5-17",
              color: "#F7C05E",
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>
