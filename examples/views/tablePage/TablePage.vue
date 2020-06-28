<template>
  <div>
    <table-page
      :data="tableData"
      :currentPage4="currentPage4"
      @sort-change="sortChange"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
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
      <template slot="tableHeader">
        <el-table-column prop="date" label="序号" width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="服务号名称"
          sortable="custom"
          width="180"
        >
        </el-table-column>
        <el-table-column prop="address" label="服务号行为"> </el-table-column>
        <el-table-column prop="address" label="发生时间"> </el-table-column>
      </template>
    </table-page>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  methods: {
    sortChange(column, prop, order) {
      console.log(column);
    },
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log(val);
    },
  },
};
</script>
