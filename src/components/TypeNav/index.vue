<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="mouseLeave">
        <h2 class="all" style="cursor: pointer" @mouseenter="mouseEnter">
          全部商品分类
        </h2>
        <transition name="sort">
          <div class="sort" v-show="isShow" @click="goSearch">
            <div class="all-sort-list2">
              <div
                class="item"
                v-for="(category1, index) in categoryList"
                :key="category1.categoryId"
              >
                <h3 :class="{ active: currentIndex == index }">
                  <a
                    style="cursor: pointer"
                    @mouseenter="indexGet(index)"
                    :data-categoryName="category1.categoryName"
                    :data-category1Id="category1.categoryId"
                    >{{ category1.categoryName }}</a
                  >
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? `block` : `none` }"
                >
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="(category2, index) in category1.categoryChild"
                      :key="category2.categoryId"
                    >
                      <!-- 对比得知此处是循环 -->
                      <dt>
                        <a
                          style="cursor: pointer"
                          :data-categoryName="category2.categoryName"
                          :data-category2Id="category2.categoryId"
                          >{{ category2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(category3, index) in category2.categoryChild"
                          :key="category3.categoryId"
                        >
                          <a
                            style="cursor: pointer"
                            :data-categoryName="category3.categoryName"
                            :data-category3Id="category3.categoryId"
                            >{{ category3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { throttle } from "lodash";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      isShow: true,
      currentIndex: -1,
    };
  },
  methods: {
    indexGet: throttle(function (index) {
      this.currentIndex = index;
    }, 10),
    goSearch(e) {
      if (e.target.tagName == "A") {
        let { categoryname, category1id, category2id, category3id } =
          e.target.dataset;
        let location = {
          name: `search`,
          params: {},
          query: {
            category1Id: category1id || undefined,
            category2Id: category2id || undefined,
            category3Id: category3id || undefined,
            categoryName: categoryname,
          },
        };
        if (this.$route.params) {
          Object.assign(location.params, this.$route.params);
        }
        this.$router.push(location);
      }
    },
    mouseEnter() {
      if (this.$route.path != "/home") {
        this.isShow = true;
      }
    },
    mouseLeave() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.isShow = false;
      }
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  mounted() {
    if (this.$route.path != "/home") {
      this.isShow = false;
    }
  },
};
</script>
<style lang="less" scoped>
 
.active {
  background: blue;
}
.type-nav {
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

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
      }
    }
    .sort-enter-active{
      transition: all 0.3s linear;
    }
    .sort-enter{
      height: 0;
    }
    .sort-enter-to{
      height: 480px;
    }
  }
}
</style>
