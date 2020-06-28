<template>
  <div class="bge-page">
    <div class="bge-option">
      <slot name="option"></slot>
    </div>
    <div class="bge-table">
      <el-table
        :data="data"
        :size="size"
        :width="width"
        :height="height"
        :maxHeight="maxHeight"
        :fit="fit"
        :border="border"
        :rowKey="rowKey"
        :showHeader="showHeader"
        :showSummary="showSummary"
        :sumText="sumText"
        :summaryMethod="summaryMethod"
        :rowClassName="rowClassName"
        :rowStyle="rowStyle"
        :cellClassName="cellClassName"
        :cellStyle="cellStyle"
        :headerRowClassName="headerRowClassName"
        :headerRowStyle="headerRowStyle"
        :headerCellClassName="headerCellClassName"
        :headerCellStyle="headerCellStyle"
        :highlightCurrentRow="highlightCurrentRow"
        :currentRowKey="currentRowKey"
        :emptyText="emptyText"
        :expandRowKeys="expandRowKeys"
        :defaultExpandAll="defaultExpandAll"
        :defaultSort="defaultSort"
        :tooltipEffect="tooltipEffect"
        :spanMethod="spanMethod"
        :selectOnIndeterminate="selectOnIndeterminate"
        :indent="indent"
        :treeProps="treeProps"
        :lazy="lazy"
        :load="load"
        @sort-change="sortChange"
      >
        <slot name="tableHeader"></slot>
      </el-table>
    </div>
    <div class="bge-pagination ">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :layout="layout"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TablePage',
  props: {
    /** 表格部分 start */
    data: {
      type: Array,
      default: function() {
        return [];
      },
    },

    size: String,

    width: [String, Number],

    height: [String, Number],

    maxHeight: [String, Number],

    fit: {
      type: Boolean,
      default: true,
    },

    stripe: Boolean,

    border: Boolean,

    rowKey: [String, Function],

    context: {},

    showHeader: {
      type: Boolean,
      default: true,
    },

    showSummary: Boolean,

    sumText: String,

    summaryMethod: Function,

    rowClassName: [String, Function],

    rowStyle: [Object, Function],

    cellClassName: [String, Function],

    cellStyle: [Object, Function],

    headerRowClassName: [String, Function],

    headerRowStyle: [Object, Function],

    headerCellClassName: [String, Function],

    // headerCellStyle: [Object, Function],

    highlightCurrentRow: Boolean,

    currentRowKey: [String, Number],

    emptyText: String,

    expandRowKeys: Array,

    defaultExpandAll: Boolean,

    defaultSort: Object,

    tooltipEffect: String,

    spanMethod: Function,

    selectOnIndeterminate: {
      type: Boolean,
      default: true,
    },

    indent: {
      type: Number,
      default: 16,
    },

    treeProps: {
      type: Object,
      default() {
        return {
          hasChildren: 'hasChildren',
          children: 'children',
        };
      },
    },

    lazy: Boolean,

    load: Function,
    /** 表格部分 end */
    /** 分页部分 start */
    currentPage4: Number,
    pageSizes: {
      type: Array,
      default: function() {
        return [10, 20, 50, 100];
      },
    },
    pageSize: {
      type: Number,
      default: 20,
    },
    total: {
      type: Number,
      default: 20,
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    /** 分页部分 end */
  },
  data() {
    return {};
  },
  methods: {
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background: rgba(245, 247, 250, 1);';
      }
    },
    /**
     * 表格排序改变
     * @params column
     * @params prop
     * @params order
     */
    sortChange(column, prop, order) {
      let option = {
        column,
        prop,
        order,
      };
      this.$emit('sort-change', { ...option });
    },
    /**
     * pageSize 改变时会触发
     * @params val 每页条数
     */
    handleSizeChange(val) {
      this.$emit('size-change', val);
    },
    /**
     * currentPage 改变时会触发
     * @params val 当前页
     */
    handleCurrentChange(val) {
      this.$emit('current-change', val);
    },
  },
};
</script>
<style lang="less">
.color-#303133 {
  color: #303133;
}

.bge-page {
  width: 100%;
  .bge-table {
    .el-table {
      color: #606266;
      font-size: 14px;
      thead {
        color: #606266;
        font-size: 14px;
      }
      .sort-caret.descending {
        border-top-color: #606266;
      }
      .sort-caret.ascending {
        border-bottom-color: #606266;
      }
    }
  }
  .bge-pagination {
    text-align: right;
    padding: 40px 0;
  }
}
</style>
