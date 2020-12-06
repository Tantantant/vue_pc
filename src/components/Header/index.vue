<template>
  <div class="container">
    <div class="header-Top">
      <div class="header-List">
        <div class="header-leftList">
          <p>尚品汇欢迎您！ 请<router-link to="/login"> 登录 </router-link></p>
          |
          <router-link to="/register">免费注册</router-link>
        </div>
        <div class="header-rightList">
          <ul>
            <li>
              <a href="###">我的订单</a>
            </li>
            <li>
              <router-link to="/shopcart">我的购物车</router-link>
            </li>
            <li>
              <a href="###">我的尚品汇</a>
            </li>
            <li>
              <a href="###">尚品汇会员</a>
            </li>
            <li>
              <a href="###">企业采购</a>
            </li>
            <li>
              <a href="###">关注尚品汇</a>
            </li>
            <li>
              <a href="###">合作招商</a>
            </li>
            <li>
              <a href="###" class="clear-border">商家后台</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-logo">
        <router-link to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </div>
      <div class="header-search">
        <input type="text" v-model="searchText" />
        <button @click="search">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    //需求：去掉地址后面的 /
    search() {
      const { searchText } = this;
      // const { categoryName } = this.$route.query
      // // if(categoryName){
      // //   // const query =
      // //   const localtion = `/search` + params+ this.$route.query;
      // // }
      // // 判断searcherText 是否有值，有值就返回当前值，没有就返回空
      // const params = searchText ? `/${searchText}` : "";

      // // 生成跳转的路径
      // const localtion = `/search` + params;
      // // 编程式导航：将来要做搜索功能（发送请求）
      // this.$router.push(localtion);

      const localtion = {
        name: "search",
        // const { categoryName } = this.$route.query;
      };
      if (searchText) {
        localtion.params = {
          searchText,
        };
      }
      const { categoryName } = this.$route.query;
      if (categoryName) {
        localtion.query = this.$route.query;
      }
      this.$router.push(localtion);
    },
  },
  mounted() {
    this.$bus.$on("clearKeyword", () => {
      // 清空searchText
      this.searchText = "";
    });
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
}
.header-Top {
  height: 30px;
  line-height: 30px;
  background-color: #eaeaea;
}
.header-List {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-leftList {
  display: flex;
}
.header-rightList ul {
  display: flex;
  align-items: center;
  li {
    a {
      padding: 0 10px;
      border-right: 1px solid #b3aeae;
    }
    .clear-border {
      border-right: none;
    }
  }
}

.header-bottom {
  width: 1200px;
  height: 106px;
  line-height: 106px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-logo img {
  margin: 25px 45px;
}

.header-search {
  display: flex;
  align-items: center;
}
.header-search input {
  width: 490px;
  height: 32px;
  border: 2px solid #ea4a36;

  outline: none;
}
.header-search button {
  width: 68px;
  height: 36px;
  background-color: #ea4a36;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
}
</style>