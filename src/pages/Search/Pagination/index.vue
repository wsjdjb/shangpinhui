<template>
  <div class="block clearfix">
    <!-- <span class="demonstration">显示总数</span> -->
    <div class="center">
      <el-pagination 

        class="prev disabled"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="PpageNo"
        :page-size="PpageSize"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>

    <!-- <div class="sui-pagination clearfix">
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
                        <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: ``,
  props:["pageNo","pageSize","total"],
    data(){
        return {
            // 不能直接修改props的原因
            PpageNo:1,//this.pageNo
            PpageSize:10,//this.pageSize
            // Ptotal:30---不会直接改变total所以直接用就完事了
        }
    },
    watch:{
        //解决一刷新vue的分页器就失效的问题---
        immediate:true,
        pageNo(newValue,oldValue){
            this.PpageNo =  newValue
        },
        pageSize(newValue,oldValue){
            this.PpageSize = newValue
        },
        // total(newValue,oldValue){
        //     this.Ptotal = newValue
        // }
        
    },
  methods:{
    handleCurrentChange(newPage){
        this.PpageNo = newPage
        this.$emit("getPageNo",this.PpageNo)
    },
    handleSizeChange(newPageSize){
        // this.PpageSize = newPageSize

    }

  }
};
</script>
<style lang="less" scoped>
//改写样式-使其居中-
.el-pagination {
  text-align: center;
}
.page {
  //
  background: blue;
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;
  margin: 0 auto;
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
</style>