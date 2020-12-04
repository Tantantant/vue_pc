<template>
  <div class="pagination">
    <button>上一页</button>
    <button>1</button>
    <button v-for=" count in startEnd.end" :key="count">{{count}}</button>

    <button>下一页</button>
    <button>总数</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    // 当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    // 每页显示按钮的数量
    pagerCount: {
      type: Number,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
      default: 7,
    },
    // 每页的长度
    pagerSizes: {
      type: Number,
      default: 5,
    },
    // 总数
    total: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      // 当前页码
      MycurrentPage: this.currentPage,
    };
  },
  computed: {
    // 总页数
    totalPages() {
      return Math.ceil(this.total / this.pagerCount);
    },
    // 开始和结束的按钮
    startEnd() {
      // 当前页码 页码数量 总页数
      const { MycurrentPage, pagerCount, totalPages } = this;
      // 出去开始和结束 去中间的按钮
      const count = pagerCount - 2;
      // 中间按钮的两边按钮数量
      const middlePage = Math.floor(count / 2);

      let start, end;
      if (MycurrentPage >= totalPages - middlePage) {
        start = totalPages - count;
      } else {
        start = MycurrentPage - middlePage;
      }
      if (start <= 1) {
        start = 2;
      }

      end = start + count - 1;

      if (end >= totalPages) {
        end = totalPages - 1;
      }

      return {
        start,
        end,
      };
    },
  },
};
</script>

<style lang='less' scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>

