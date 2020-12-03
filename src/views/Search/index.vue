<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <!-- <li class="with-x"></li> -->
            <!-- 关键字 -->
            <li class="with-x" @click="delKeyword" v-show="options.keyword">
              关键字: {{ options.keyword }}<i>×</i>
            </li>

            <!-- 品牌属性 -->
            <li class="with-x" @click="delTrademark" v-show="options.trademark">
              品牌: {{ options.trademark.split(":")[1] }}<i>×</i>
            </li>
            <!-- 品牌分类 -->
            <li
              class="with-x"
              @click="delProps(index)"
              v-for="(prop, index) in options.props"
              :key="prop"
            >
              {{ `${prop.split(":")[2]}:${prop.split(":")[1]}` }}<i>×</i>
            </li>
            <!-- 分类名称 -->
            <li
              class="with-x"
              @click="delcategoryName"
              v-show="options.categoryName"
            >
              分类名称: {{ options.categoryName }}<i>×</i>
            </li>
            <!-- <li class="with-x">华为<i>×</i></li>
            <li class="with-x">OPPO<i>×</i></li> -->
          </ul>
        </div>

        <!--selector-->
        <SearchSelector :addTrademark="addTrademark" @add-props="addProps" />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li
                  :class="{ active: options.order.indexOf('1') > -1 }"
                  @click="setOrder('1')"
                >
                  <a
                    >综合<i
                      :class="{
                        iconfont: true,
                        'icon-xia--jiantou': isDone,
                        'icon-shang--jiantou': !isDone,
                      }"
                    ></i
                  ></a>
                </li>
                <li>
                  <a>销量</a>
                </li>
                <li>
                  <a>新品</a>
                </li>
                <li>
                  <a>评价</a>
                </li>
                <li
                  :class="{ active: options.order.indexOf('2') > -1 }"
                  @click="setOrder('2')"
                >
                  <a
                    >价格
                    <span>
                      <i
                        :class="{
                          iconfont: true,
                          'icon-jiantou': true,
                          deactive: options.order.indexOf('2') > -1 && !isPrice,
                        }"
                      ></i>
                      <i
                        :class="{
                          iconfont: true,
                          'icon-jiantouarrow486': true,
                          deactive: options.order.indexOf('2') > -1 && isPrice,
                        }"
                      ></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <a href="item.html" target="_blank"
                      ><img :src="goods.defaultImg"
                    /></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥ </em>
                      <i>{{ goods.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >{{ goods.title }}</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="fr page">
            <div class="sui-pagination clearfix">
              <ul>
                <li class="prev disabled">
                  <a href="#">«上一页</a>
                </li>
                <li class="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li class="dotted"><span>...</span></li>
                <li class="next">
                  <a href="#">下一页»</a>
                </li>
              </ul>
              <div><span>共10页&nbsp;</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from "./SearchSelector/SearchSelector";
import TypeNav from "@comps/TypeNav";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      options: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },

      // 综合排序箭头
      isDone: true,

      // 销量排序箭头
      isPrice: true,
    };
  },
  watch: {
    $route() {
      this.updateProduction();
    },
  },
  methods: {
    ...mapActions(["getProduction"]),
    updateProduction() {
      const { searchText: keyword } = this.$route.params;
      const {
        categoryName,
        category1Id,
        category2Id,
        category3Id,
      } = this.$route.query;
      const options = {
        ...this.options,
        keyword,
        category1Id,
        category2Id,
        category3Id,
        categoryName,
      };
      this.options = options;
      this.getProduction(options);
    },

    //删除关键字
    delKeyword() {
      this.options.keyword = "";
      this.$bus.$emit("clearKeyword");
      this.$router.push({
        name: "search",
        params: "",
        query: this.$route.query,
      });
    },
    // 删除分类
    delcategoryName() {
      this.options.categoryName = "";
      this.options.category1Id = "";
      this.options.category2Id = "";
      this.options.category3Id = "";

      this.$router.push({
        name: "search",
        query: "",
        params: this.$route.params,
      });
    },

    // 添加品牌更新数据
    addTrademark(trademark) {
      this.options.trademark = trademark;
      this.updateProduction();
    },
    // 删除品牌数据
    delTrademark() {
      this.options.trademark = "";
      this.updateProduction();
    },

    //添加品牌属性数据
    addProps(props) {
      // console.log(props)
      this.options.props.push(props);
      this.updateProduction();
    },
    // 删除品牌属性数据
    delProps(index) {
      this.options.props.splice(index, 1);
      this.updateProduction();
    },

    // 设置排序的方法
    setOrder(order) {
      let [orderNum, orderType] = this.options.order.split(":");
      // 综合上下箭头点击改变
      // 不相等就是第一次点击，不改变图标
      // 相等就是第二次点击，改变图标
      if (orderNum === order) {
        // 如果为1 改综合排序 如果为2 改销量排序
        if (order === "1") {
          this.isDone = !this.isDone;
        } else {
          this.isPrice = !this.isPrice;
        }
        orderType = orderType === "desc" ? "asc" : "desc";
      } else {
        if (order === "1") {
          orderType = this.isDone ? "desc" : "asc";
        } else {
          this.isPrice = true;
        }
      }
      this.options.order = `${order}:${orderType}`;
      this.updateProduction();
    },
  },
  computed: {
    ...mapGetters(["goodsList"]),
  },
  mounted() {
    this.updateProduction();
  },
  components: {
    TypeNav,
    SearchSelector,
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
                display: flex;
                span {
                  display: flex;
                  flex-direction: column;
                  i {
                    height: 7px;
                    line-height: 0.8;
                    &.deactive {
                      color: rgba(255, 255, 255, 0.5);
                    }
                  }
                }
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                  // display: flex;
                  i {
                    font-size: 12px;
                    // line-height: 0.8;
                  }
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>