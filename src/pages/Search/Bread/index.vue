<template>
                <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a >全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag" ref="bread">
                        <!-- <li class="with-x">手机</li> -->
                        <!-- 三级标签 -->
                        <!-- parmas-keyword标签 -->
                        <!--categoryName  -->
                    <el-tag  size="mini" type="info"  effect="dark" closable v-if="$route.query.categoryName" @close="closeBread1">{{$route.query.categoryName}}</el-tag>  
                                          <!-- keyword -->
                    <el-tag size="mini" type="info"  effect="dark" closable v-if="$route.params.keyword" @close="closeBread2">{{$route.params.keyword}}</el-tag>  

                        <!-- trade-->
                    <el-tag size="mini" type="info"  effect="dark" closable v-if="searchParams.trademark"  @close="closeBread4" >{{searchParams.trademark.split(":")[1]}}</el-tag>  

                    <!-- props 因为是数组所以判断长度以及循环-->
                    <el-tag size="mini" type="info"  effect="dark" closable v-if="searchParams.props.length" v-for="(prop,index) in searchParams.props" :key="index" @close="closeBread3(index)">{{prop.split(":")[1]}}</el-tag>  

                    </ul>

                </div>
</template>

<script>
// import {mapGetters} from "vuex"
export default {
    name:``,
    props:["searchParams"],
    methods:{
        closeBread1(){
            this.$emit("closeBread1",this.$refs.bread.children.length)
        },
        closeBread2(){
            this.$emit("closeBread2",this.$refs.bread.children.length)
        },
        closeBread3(index){
            // console.log("1")
            this.$emit("closeBread3",this.$refs.bread.children.length,index)
        },
        closeBread4(){
            this.$emit("closeBread4",this.$refs.bread.children.length)
        }
    }
};
</script>
<style lang="less" scoped>
            .el-tag{
                margin-right: 5px;
            }
            .bread{
                margin-bottom: 5px;
                overflow: hidden;
                .sui-breadcrumb{
                    padding: 3px 15px;
                    margin: 0;
                    font-weight: 400;
                    border-radius: 3px;
                    float:left;
                    li{
                        display: inline-block;
                        line-height: 18px;
                        a{
                            color: #666;
                            text-decoration: none;
                            &:hover{
                                color: #4cb9fc;
                            }
                        }
                    }
                }
                .sui-tag{
                    margin-top: -5px;
                    list-style: none;
                    font-size: 0;
                    line-height: 0;
                    padding: 5px 0 0;
                    margin-bottom: 18px;
                    float: left;
                    .with-x{
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
                        transition:color 400ms;
                        cursor: pointer;
                        i{
                            margin-left: 10px;
                            cursor: pointer;
                            font: 400 14px tahoma;
                            display: inline-block;
                            height: 100%;
                            vertical-align: middle;
                        }
                        &:hover{
                            color: #28a3ef;
                        }
                    }
                }
            }
</style>