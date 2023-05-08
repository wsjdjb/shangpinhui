<template>
  <ul class="sui-nav">
    <li class="active">
      <a style="cursor: pointer" @click="changeOrder(`1`)"
        >综合
        <span
          v-show="isShow1"
          class="iconfont"
          :class="[
            isDown == true ? `icon-icon_on_the_down` : `icon-icon_on_the_top`,
          ]"
        ></span
      ></a>
    </li>
    <li>
      <a style="cursor: pointer" @click="changeOrder(`2`)"
        >销量
        <span
          v-show="isShow2"
          class="iconfont"
          :class="[
            isDown == true ? `icon-icon_on_the_down` : `icon-icon_on_the_top`,
          ]"
        ></span
      ></a>
    </li>
    <!-- <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li>
                  <a href="#">价格⬆</a>
                </li>
                <li>
                  <a href="#">价格⬇</a>
                </li> -->
  </ul>
</template>

<script>
export default {
  name: `Order`,
  data() {
    return {
      isShow1: true,
        isShow2: false,
      isDown: true,
    };
  },
  props: ["order"],
  watch: {
    order: {
      immediate: true,
      handler(newValue, oldValue) {
        let value = newValue;
        // console.log(value)
        if (value) {

          if (value.split(":")[0] == 2) {
            this.isShow1 = false;
            this.isShow2=true

          }else{
            this.isShow1 = true;
            this.isShow2=false
          } 
          if (value.split(":")[1] == "desc") {
            this.isDown = true;
          } else {
            this.isDown = false;
          }
        }
      },
    },
  },
  methods:{
    changeOrder(value){
        if( value==1 &&this.isShow1 || value==2 && this.isShow2 ){
            let Norder = `${value}:${this.isDown==true?`asc`:`desc`}`
            this.$emit("getOrder",Norder)
        }else{
            let Morder = `${value}:desc`
            this.$emit("getOrder",Morder)
        }

    }
  }
};
</script>
<style lang="less" scoped>
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
    }
    &.active {
      a {
        background: #e1251b;
        color: #fff;
      }
    }
  }
}
</style>