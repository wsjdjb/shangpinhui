<template>
  <!-- 项目的最外层 -->
  <div class="outer">
    <!-- 窗口侧边栏 -->
    <div class="toolbar toolbar-wrap">
      <div class="content"></div>
      <div class="but list"></div>
      <div class="toolist">
        <div class="pull">
          <i class="tab-ico vip"></i>
          <em class="tab-text">商品会员</em>
        </div>
        <div class="pull">
          <i class="tab-ico cart"></i>
          <em class="tab-text">购物车</em>
        </div>
        <div class="pull">
          <i class="tab-ico follow"></i>
          <em class="tab-text">我的关注</em>
        </div>
        <div class="pull">
          <i class="tab-ico history"></i>
          <em class="tab-text">我的足迹</em>
        </div>
        <div class="pull">
          <i class="tab-ico message"></i>
          <em class="tab-text">我的消息</em>
        </div>
        <div class="pull">
          <i class="tab-ico jimi"></i>
          <em class="tab-text">咨询</em>
        </div>
      </div>
      <div class="back pull">
        <i class="tab-ico top"></i>
        <em class="tab-text">顶部</em>
      </div>
    </div>
    <TypeNav></TypeNav>
    <!--list-content-->
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <Bread
          @closeBread1="closeBread1"
          @closeBread2="closeBread2"
          @closeBread3="closeBread3"
          @closeBread4="closeBread4"
          :searchParams="searchParams"
        ></Bread>
        <!-- <Selector></Selector> -->
        <Selector @getAttr="getAttr" @getTarde="getTarde"></Selector>
        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
                <Order :order="searchParams.order" @getOrder="getOrder"></Order>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li
                class="yui3-u-1-5"
                v-for="(good, index) in goodsList"
                :key="good.id" 
              >
                <div class="list-wrap">
                  <div class="p-img">
                    <!-- <a href="item.html" target="_blank"
                      ><img :src="good.defaultImg"
                    /></a> -->
                    <!-- 声明式导航编写 -->
                    <router-link :to="{name:'detail',params:{skuId:good.id},}">
                      <img :src="good.defaultImg"
                    />
                    </router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥ </em>
                      <i>{{ good.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >{{ good.title }}</a
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
            <Pagination
              :pageNo="1"
              :pageSize="10"
              :total="total"
              @getPageNo="getPageNo"
            ></Pagination>
          </div>
        </div>
        <!--hotsale-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Selector from "./Selector";
import Pagination from "./Pagination";
import Bread from "./Bread";
import Order from  "./Order"
export default {
  name: "",
  data() {
    return {
      searchParams: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        props: [],
        trademark: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 10,
      },
    };
  },
  components: {
    Selector,
    Pagination,
    Bread,
    Order
  },
  methods: {
    getData() {
      if (this.$route.params) {
        Object.assign(this.searchParams, this.$route.params);
      }
      if (this.$route.query) {
        Object.assign(this.searchParams, this.$route.query);
      }
      // console.log("重新提交更新数据了")
      this.$store.dispatch("getSearchList", this.searchParams);
      // this.searchParams.categoryName = undefined;
      // this.searchParams.category1Id = undefined;
      // this.searchParams.category2Id = undefined;
      // this.searchParams.category3Id = undefined;
      // this.searchParams.keyword = undefined
    },
    getPageNo(pageNo) {
      this.searchParams.pageNo = pageNo;
      // console.log(this.searchParams.pageNo)
      this.getData();
    },
    closeBread1(value) {
      // console.log("到了")
      //route.query不能直接修改？只能修改子元素
      // this.$route.query = {};
      // this.$route.query.categoryName = undefined;
      // this.$route.query.category1Id = undefined;
      // this.$route.query.category2Id = undefined;
      // this.$route.query.category3Id = undefined;
      //到底是改$route还是该searchParams
      this.searchParams.categoryName = "";
      this.searchParams.category1Id = "";
      this.searchParams.category2Id = "";
      this.searchParams.category3Id = "";

      //如果此刻有params或者其他面包屑结构的话重新发起请求，如果这是最后一个面包屑的话返回主页
      if (value <= 1) {
        this.$router.push({
          path: "/home",
        });
      } else {
        // console.log(this.searchParams)
        this.getData();
        //为什么不是重新推送？或者go？？
        if (this.$route.params) {
          this.$router.push({ name: "search", params: this.$route.params });
        }
      }
    },
    closeBread2(value) {
      // console.log("到了")
      // this.$route.params.keyword = undefined;
      this.searchParams.keyword = "";
      //如果此刻有params或者其他面包屑结构的话重新发起请求，如果这是最后一个面包屑的话返回主页,原地push用此原地刷新用go(0)
      if (value <= 1) {
        this.$router.push({
          path: "/home",
        });
      } else {
        // console.log(this.searchParams)
        this.getData();
        if (this.$route.query.categoryName) {
          this.$router.push({ name: "search", query: this.$route.query });
        }
      }
      //重新刷新url，去掉params参数
      //通过全局事件总线清楚input的keyword
      this.$bus.$emit("removeKey");
    },
    closeBread3(value, index) {
      //--1--index就等于在此数组中的下标，那里的循环遍历的也是这个数组-----2--删除数组中某个下标的
      this.searchParams.props.splice(index, 1);
      if (value <= 1) {
        this.$router.push({
          path: "/home",
        });
      } else {
        // console.log(this.searchParams)
        this.getData();
      }
      //   console.log(this.searchParams.props)
    },
    closeBread4(value) {
      this.searchParams.trademark = "";
      if (value <= 1) {
        this.$router.push({
          path: "/home",
        });
      } else {
        // console.log(this.searchParams)
        this.getData();
      }
    },
    getAttr(attr, at) {
      let prop = `${attr.attrId}:${at}:${attr.attrName}`;
      if (this.searchParams.props.indexOf(prop) == -1) {
        this.searchParams.props.push(prop);
        // console.log(this.searchParams.props);
        this.getData();
      }
      // this.searchParams.props
    },
    getTarde(tarde) {
      let Tarde = `${tarde.tmId}:${tarde.tmName}`;
      this.searchParams.trademark = Tarde;
      this.getData();
    },
    getOrder(value){
        this.searchParams.order = value
        this.getData()
    }
  },
  beforeMount() {
    if (this.$route.params) {
      Object.assign(this.searchParams, this.$route.params);
    }
    if (this.$route.query) {
      Object.assign(this.searchParams, this.$route.query);
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    immediate: true,
    deep: true,
    //写不了点，route全监视就好了
    $route: {
      handler() {
        this.getData();

        //分类名字与关键字不用清理：因为每一次路由发生变化的时候，都会给他赋予新的数据
        // this.searchParams.categoryName = "";
        this.searchParams.category1Id = "";
        this.searchParams.category2Id = "";
        this.searchParams.category3Id = "";
        // this.searchParams.keyword = "";
        // this.$route.query.categoryName = undefined;
        // this.$route.query.category1Id = undefined;
        // this.$route.query.category2Id = undefined;
        // this.$route.query.category3Id = undefined;
        // this.$route.params.keyword = undefined
      },
      //注意使用方法时的this
    },
  },
  computed: {
    //不像state一样有对象写法？
    ...mapGetters(["goodsList", "total"]),
  },
};
</script>
<style lang="less" scoped>
.outer {
  .toolbar {
    position: fixed;
    z-index: 999;
    width: 300px;
    height: 100%;
    background-color: #7a6e6e;
    transition: right 0.3s ease-in-out 0s;
    &.toolbar-out {
      top: 0px;
      right: 0px;
    }
    &.toolbar-wrap {
      top: 0px;
      right: -294px;
    }
    .content {
      position: relative;
      left: 6px;
      width: 294px;
      background-color: bisque;
      height: 100%;
      z-index: 99;
    }
    .but {
      position: relative;
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      margin-bottom: 1px;
      cursor: pointer;
      background-color: #7a6e6e;
      border-radius: 3px 0 0 3px;
      position: absolute;
      top: 0;
      /*right: -6px;*/
      left: -29px;
      &.list {
        background-image: url(./images/list.png);
        background-repeat: no-repeat;
        background-size: cover;
      }
      &.pull-wrap {
        background-image: url(./images/cross.png);
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .toolist {
      position: absolute;
      top: 50%;
      left: -29px;
      width: 35px;
      margin-top: -80px;
      /*background-color: cadetblue;*/
      .pull {
        position: relative;
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        margin-bottom: 1px;
        cursor: pointer;
        background-color: #7a6e6e;
        border-radius: 3px 0 0 3px;
        z-index: 66;
        .vip {
          background-image: url(./images/toolbars.png);
          background-position: -88px -175px;
        }
        .cart {
          background-image: url(./images/toolbars.png);
          background-position: -50px 0;
        }
        .follow {
          background-image: url(./images/toolbars.png);
          background-position: -50px -50px;
        }
        .history {
          background-image: url(./images/toolbars.png);
          background-position: -50px -100px;
        }
        .message {
          background-image: url(./images/toolbars.png);
          background-position: -190px -150px;
        }
        .jimi {
          background-image: url(./images/toolbars.png);
          background-position: -50px -150px;
        }
        .top {
          background-image: url(./images/toolbars.png);
          background-position: -50px -250px;
        }

        .tab-text {
          width: 62px;
          height: 35px;
          line-height: 35px;
          color: #fff;
          text-align: center;
          font-family: 微软雅黑;
          position: absolute;
          /*position: relative;*/
          z-index: 1;
          left: 35px;
          top: 0;
          background-color: #7a6e6e;
          border-radius: 3px 0 0 3px;
          font-style: normal;
          -webkit-transition: left 0.3s ease-in-out 0.1s;
          transition: left 0.3s ease-in-out 0.1s;
        }
        .tab-ico {
          display: inline-block;
          position: relative;
          /*background-image: url(img/toolbars.png);*/
          background-color: #7a6e6e;
          border-radius: 3px 0 0 3px;
          z-index: 2;
          width: 35px;
          height: 35px;
        }
      }
    }

    & > .pull {
      position: relative;
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      margin-bottom: 1px;
      cursor: pointer;
      background-color: #7a6e6e;
      border-radius: 3px 0 0 3px;
      z-index: 66;
      .tab-ico {
        display: inline-block;
        position: relative;
        /*background-image: url(img/toolbars.png);*/
        background-color: #7a6e6e;
        border-radius: 3px 0 0 3px;
        z-index: 2;
        width: 35px;
        height: 35px;
      }
      .top {
        background-image: url(./images/toolbars.png);
        background-position: -50px -250px;
      }

      .tab-text {
        width: 62px;
        height: 35px;
        line-height: 35px;
        color: #fff;
        text-align: center;
        font-family: 微软雅黑;
        position: absolute;
        /*position: relative;*/
        z-index: 1;
        left: 35px;
        top: 0;
        background-color: #7a6e6e;
        border-radius: 3px 0 0 3px;
        font-style: normal;
        -webkit-transition: left 0.3s ease-in-out 0.1s;
        transition: left 0.3s ease-in-out 0.1s;
      }
    }
    & > .back {
      position: absolute;
      bottom: 0;
      /*right: -6px;*/
      left: -29px;
      display: inline-block;
      background-image: url(./images/toolbars.png);
    }
  }
  .header {
    & > .top {
      background-color: #eaeaea;
      height: 30px;
      line-height: 30px;
      .container {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        .loginList {
          float: left;
          p {
            float: left;
            margin-right: 10px;
            .register {
              border-left: 1px solid #b3aeae;
              padding: 0 5px;
              margin-left: 5px;
            }
          }
        }
        .typeList {
          float: right;
          a {
            padding: 0 10px;
            & + a {
              border-left: 1px solid #b3aeae;
            }
          }
        }
      }
    }
    & > .bottom {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .logoArea {
        float: left;
        .logo {
          img {
            width: 175px;
            margin: 25px 45px;
          }
        }
      }
      .searchArea {
        float: right;
        margin-top: 35px;
        .searchForm {
          overflow: hidden;
          input {
            box-sizing: border-box;
            width: 490px;
            height: 32px;
            padding: 0px 4px;
            border: 2px solid #ea4a36;
            float: left;
            &:focus {
              outline: none;
            }
          }
          button {
            height: 32px;
            width: 68px;
            background-color: #ea4a36;
            border: none;
            color: #fff;
            float: left;
            cursor: pointer;
            &:focus {
              outline: none;
            }
          }
        }
      }
    }
  }
  .typeNav {
    border-bottom: 2px solid #e1251b;
    .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;
      .all {
        width: 210px;
        height: 45px;
        background-color: #e1251b;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }
      .nav {
        a {
          height: 45px;
          margin: 0 22px;
          line-height: 45px;
          font-size: 16px;
          color: #333;
        }
      }
      .sort {
        position: absolute;
        left: 0;
        top: 45px;
        width: 210px;
        height: 461px;
        position: absolute;
        background: #fafafa;
        z-index: 999;
        .all-sort-list2 {
          .item {
            h3 {
              line-height: 30px;
              font-size: 14px;
              font-weight: 400;
              overflow: hidden;
              padding: 0 20px;
              margin: 0;
              a {
                color: #333;
              }
            }
            .item-list {
              display: none;
              position: absolute;
              width: 734px;
              min-height: 460px;
              _height: 200px;
              background: #f7f7f7;
              left: 210px;
              border: 1px solid #ddd;
              top: 0;
              z-index: 9999 !important;
              .subitem {
                float: left;
                width: 650px;
                padding: 0 4px 0 8px;
                dl {
                  border-top: 1px solid #eee;
                  padding: 6px 0;
                  overflow: hidden;
                  zoom: 1;
                  &.fore {
                    border-top: 0;
                  }
                  dt {
                    float: left;
                    width: 54px;
                    line-height: 22px;
                    text-align: right;
                    padding: 3px 6px 0 0;
                    font-weight: 700;
                  }
                  dd {
                    float: left;
                    width: 415px;
                    padding: 3px 0 0;
                    overflow: hidden;
                    em {
                      float: left;
                      height: 14px;
                      line-height: 14px;
                      padding: 0 8px;
                      margin-top: 5px;
                      border-left: 1px solid #ccc;
                    }
                  }
                }
              }
            }
            &:hover {
              .item-list {
                display: block;
              }
            }
          }
        }
      }
    }
  }
  .main {
    margin: 10px 0;
    .py-container {
      width: 1200px;
      margin: 0 auto;

      .selector {
        border: 1px solid #ddd;
        margin-bottom: 5px;
        overflow: hidden;
        .logo {
          border-top: 0;
          margin: 0;
          position: relative;
          overflow: hidden;
          .key {
            padding-bottom: 87px !important;
          }
        }
        .type-wrap {
          margin: 0;
          position: relative;
          border-top: 1px solid #ddd;
          overflow: hidden;
          .key {
            width: 100px;
            background: #f1f1f1;
            line-height: 26px;
            text-align: right;
            padding: 10px 10px 0 15px;
            float: left;
          }
          .value {
            overflow: hidden;
            padding: 10px 0 0 15px;
            color: #333;
            margin-left: 120px;
            padding-right: 90px;
            .logo-list {
              li {
                float: left;
                border: 1px solid #e4e4e4;
                margin: -1px -1px 0 0;
                width: 105px;
                height: 52px;
                text-align: center;
                line-height: 52px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-weight: 700;
                color: #e1251b;
                font-style: italic;
                font-size: 14px;
                img {
                  max-width: 100%;
                  vertical-align: middle;
                }
              }
            }
            .type-list {
              li {
                float: left;
                display: block;
                margin-right: 30px;
                line-height: 26px;
                a {
                  text-decoration: none;
                  color: #666;
                }
              }
            }
          }
          .ext {
            position: absolute;
            top: 10px;
            right: 10px;
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
              padding: 0 10px;
              background: #fff;
              border: 1px solid #d5d5d5;
            }
            a {
              color: #666;
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
      }
      .hot-sale {
        margin-bottom: 5px;
        border: 1px solid #ddd;
        .title {
          font-weight: 700;
          font-size: 14px;
          line-height: 21px;
          border-bottom: 1px solid #ddd;
          background: #f1f1f1;
          color: #333;
          margin: 0;
          padding: 5px 0 5px 15px;
        }
        .hot-list {
          padding: 15px;
          ul {
            display: flex;
            li {
              width: 25%;
              height: 100%;
              .list-wrap {
                .p-img,
                .price,
                .attr,
                .commit {
                  padding-left: 15px;
                }
                .p-img {
                  img {
                    max-width: 100%;
                    vertical-align: middle;
                    border: 0;
                  }
                }
                .attr {
                  width: 85%;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                  margin-bottom: 8px;
                  min-height: 38px;
                  cursor: pointer;
                  line-height: 1.8;
                }
                .price {
                  font-size: 18px;
                  color: #c81623;
                  strong {
                    font-weight: 700;
                    i {
                      margin-left: -5px;
                    }
                  }
                }
                .commit {
                  height: 22px;
                  font-size: 13px;
                  color: #a7a7a7;
                }
              }
            }
          }
        }
      }
    }
  }
  .footer {
    background-color: #eaeaea;
    .footer-container {
      width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
      .footerList {
        padding: 20px;
        border-bottom: 1px solid #e4e1e1;
        border-top: 1px solid #e4e1e1;
        overflow: hidden;
        padding-left: 40px;
        .footerItem {
          width: 16.6666667%;
          float: left;
          h4 {
            font-size: 14px;
          }
          .footerItemCon {
            li {
              line-height: 18px;
            }
          }
          &:last-child img {
            width: 121px;
          }
        }
      }
      .copyright {
        padding: 20px;
        .helpLink {
          text-align: center;
          li {
            display: inline;
            .space {
              border-left: 1px solid #666;
              width: 1px;
              height: 13px;
              background: #666;
              margin: 8px 10px;
            }
          }
        }
        p {
          margin: 10px 0;
          text-align: center;
        }
      }
    }
  }
}
</style>