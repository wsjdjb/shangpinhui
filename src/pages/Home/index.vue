<template>
        <div class="outer">


<!-- typeNav -->
        <TypeNav></TypeNav>
        <!--列表-->
        <div class="list-container">
            <div class="sortList clearfix">
                <div class="center">
                    <!--banner轮播-->
                    <!-- <div class="swiper-container" id="mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="./images/home/banner1.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./images/home/banner2.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./images/home/banner3.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./images/home/banner4.jpg" />
                            </div>
                        </div>-->
                        <!-- 如果需要分页器 -->
                        <!-- <div class="swiper-pagination"></div>-->

                        <!-- 如果需要导航按钮 -->
                        <!--   <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div> -->
                    <Swiper :swiperList="bannerList"></Swiper>
                </div>
                
                <div class="right">
                    <div class="news">
                        <h4>
                            <em class="fl">尚品汇快报</em>
                            <span class="fr tip">更多 ></span>
                        </h4>
                        <div class="clearix"></div>
                        <ul class="news-list unstyled">
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[公告]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[公告]</span>备战开学季 全民半价购数码
                            </li>
                            <li>
                                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                        </ul>
                    </div>
                    <ul class="lifeservices">
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">话费</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">机票</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">电影票</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">游戏</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">彩票</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">加油站</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">酒店</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">火车票</span>
                        </li>
                        <li class=" life-item ">
                            <i class="list-item"></i>
                            <span class="service-intro">众筹</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">理财</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">礼品卡</span>
                        </li>
                        <li class=" life-item">
                            <i class="list-item"></i>
                            <span class="service-intro">白条</span>
                        </li>
                    </ul>
                    <div class="ads">
                        <img src="./images/home/ad1.png" />
                    </div>
                </div>
            </div>
        </div>

        <!--今日推荐-->
        <div class="today-recommend">
            <div class="py-container">
                <ul class="recommend">
                    <li class="clock">
                        <div class="time">
                            <img src="./images/home/clock.png" />
                            <h3>今日推荐</h3>
                        </div>
                    </li>
                    <li class="banner">
                        <img src="./images/home/today01.png" />
                    </li>
                    <li class="banner">
                        <img src="./images/home/today02.png" />
                    </li>
                    <li class="banner">
                        <img src="./images/home/today03.png" />
                    </li>
                    <li class="banner">
                        <img src="./images/home/today04.png" />
                    </li>
                </ul>
            </div>
        </div>

        <!-- 商品排行 -->
        <div class="rank">
            <div class="tab">
                <div class="tab-tit clearfix">
                    <a href="javascript:;" class="on">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">热卖排行</p>
                    </a>
                    <a href="javascript:;">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">特价排行</p>
                    </a>
                    <a href="javascript:;">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">新品排行</p>
                    </a>
                </div>

            </div>
            <div class="content">
                <ul>
                    <li>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/home/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/home/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/home/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/home/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <p class="info-price">定金：¥100.00</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 猜你喜欢 -->
        <div class="like">
            <div class="py-container">
                <div class="title">
                    <h3 class="fl">猜你喜欢</h3>
                    <a href="javascript:;" class="fr tip changeBnt">换一换</a>
                </div>
                <div class="bd">
                    <ul class="favourate">
                        <li>
                            <img src="./images/home/like_02.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/home/like_03.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/home/like_01.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/home/like_02.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/home/like_03.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./images/home/like_01.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <floor v-for="(f,index) in floorList" :key="f.id" :floorKid="f"></floor>
       
        <!--商标-->
        <div class="brand">
            <div class="py-container">
                <ul class="brand-list">
                    <li class="brand-item">
                        <img src="./images/home/brand_21.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_03.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_05.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_07.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_09.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_11.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_13.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_15.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_17.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./images/home/brand_19.png" />
                    </li>
                </ul>
            </div>
        </div>


    </div>
</template>

<script>
import {mapState} from "vuex"
import floor from "./floor"
export default {
    name:`Home`,
    components:{
        floor
    },
    computed:{
        ...mapState({
            categoryList:state=>state.home.categoryList
        }),
        ...mapState({
            bannerList:state=>state.banner.bannerList
        }),
            ...mapState({
            floorList:state=>state.floor.floorList
        })
    },
    mounted(){
        this.$store.dispatch("getBannerList")
        this.$store.dispatch("getFloorList")
    }
};
</script>
<style lang="less" scoped>
.outer{


    .list-container {
        width: 1200px;
        margin: 0 auto;

        .sortList {
            height: 464px;
            padding-left: 210px;

            .center {
                box-sizing: border-box;
                width: 740px;
                height: 100%;
                padding: 5px;
                float: left;
            }

            .right {
                float: left;
                width: 250px;

                .news {
                    border: 1px solid #e4e4e4;
                    margin-top: 5px;

                    h4 {
                        border-bottom: 1px solid #e4e4e4;
                        padding: 5px 10px;
                        margin: 5px 5px 0;
                        line-height: 22px;
                        overflow: hidden;
                        font-size: 14px;

                        .fl {
                            float: left;
                        }

                        .fr {
                            float: right;
                            font-size: 12px;
                            font-weight: 400;
                        }
                    }

                    .news-list {
                        padding: 5px 15px;
                        line-height: 26px;

                        .bold {
                            font-weight: 700;
                        }
                    }
                }

                .lifeservices {
                    border-right: 1px solid #e4e4e4;
                    overflow: hidden;
                    display: flex;
                    flex-wrap: wrap;

                    .life-item {
                        border-left: 1px solid #e4e4e4;
                        border-bottom: 1px solid #e4e4e4;
                        margin-right: -1px;
                        height: 64px;
                        text-align: center;
                        position: relative;
                        cursor: pointer;
                        width: 25%;

                        .list-item {
                            background-image: url(./images/home/icons.png);
                            width: 61px;
                            height: 40px;
                            display: block;
                        }

                        .service-intro {
                            line-height: 22px;
                            width: 60px;
                            display: block;
                        }

                        &:nth-child(1) {
                            .list-item {
                                background-position: 0px -5px;
                            }
                        }

                        &:nth-child(2) {
                            .list-item {
                                background-position: -62px -5px;
                            }
                        }

                        &:nth-child(3) {
                            .list-item {
                                background-position: -126px -5px;
                            }
                        }

                        &:nth-child(4) {
                            .list-item {
                                background-position: -190px -5px;
                            }
                        }

                        &:nth-child(5) {
                            .list-item {
                                background-position: 0px -76px;
                            }
                        }

                        &:nth-child(6) {
                            .list-item {
                                background-position: -62px -76px;
                            }
                        }

                        &:nth-child(7) {
                            .list-item {
                                background-position: -126px -76px;
                            }
                        }

                        &:nth-child(8) {
                            .list-item {
                                background-position: -190px -76px;
                            }
                        }

                        &:nth-child(9) {
                            .list-item {
                                background-position: 0px -146px;
                            }
                        }

                        &:nth-child(10) {
                            .list-item {
                                background-position: -62px -146px;
                            }
                        }

                        &:nth-child(11) {
                            .list-item {
                                background-position: -126px -146px;
                            }
                        }

                        &:nth-child(12) {
                            .list-item {
                                background-position: -190px -146px;
                            }
                        }
                    }
                }

                .ads {
                    margin-top: 5px;

                    img {
                        opacity: 0.8;
                        transition: all 400ms;

                        &:hover {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }

    .today-recommend {
        .py-container {
            width: 1200px;
            margin: 0 auto;

            .recommend {
                height: 165px;
                background-color: #eaeaea;
                margin: 10px 0;
                display: flex;

                .clock {
                    width: 16.67%;
                    background-color: #5c5251;
                    color: #fff;
                    font-size: 18px;
                    text-align: center;

                    .time {
                        padding: 30px 0;
                    }

                    h3 {
                        margin: 9px 0;
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 30.06px;
                    }
                }

                .banner {
                    width: 20.83%;

                    img {
                        width: 100%;
                        height: 100%;
                        transition: all 400ms;

                        &:hover {
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
    }

    .rank {
        width: 1200px;
        margin: 0 auto;

        .tab {
            margin: 0 auto;
            overflow: hidden;
            width: 312px;

            .tab-tit {
                text-align: center;

                a {
                    display: block;
                    padding: 0 18px;
                    float: left;
                    text-decoration: none;
                    font-size: 16px;
                    color: #999;

                    p {
                        margin: 5px 0;
                    }

                    .img {
                        i {
                            width: 35px;
                            height: 35px;
                            display: block;
                            background: url(./images/home/bg0.png);
                            margin-left: 10px;
                        }
                    }

                    .text {
                        line-height: 28px;
                    }
                }

                .on {
                    color: #e60012;

                    .img {
                        i {
                            background-position: -35px 0;
                        }
                    }
                }
            }
        }

        .content {
            overflow: hidden;
            padding: 10px;

            ul {
                li {
                    overflow: hidden;
                    list-style: none;
                    line-height: 18px;

                    .img-item {
                        border: 1px solid #e1251b;
                        width: 269px;
                        float: left;
                        overflow: hidden;
                        margin: 0 12px 10px;
                        background: #fff;

                        .tab-pic {
                            width: 230px;
                            height: 210px;
                            overflow: hidden;
                            text-align: center;
                            margin: 5px auto 18px;

                            a {
                                img {
                                    width: 200px;
                                    height: 200px;
                                }
                            }
                        }

                        .tab-info {
                            background: #fafafa;

                            .info-title {
                                height: 50px;
                                line-height: 28px;
                                overflow: hidden;
                                margin: 0 auto;
                                padding-left: 10px;

                                a {
                                    color: #333;
                                    text-decoration: none;
                                }
                            }

                            .info-price {
                                font-size: 20px;
                                color: #e1251b;
                                height: 35px;
                                padding-left: 10px;
                                display: block;
                                line-height: 24px;
                                margin: 10px auto 0;
                            }
                        }
                    }
                }
            }
        }
    }

    .like {
        margin-top: 15px;

        .py-container {
            width: 1200px;
            margin: 0 auto;

            .title {
                overflow: hidden;

                .fl {
                    float: left;
                    font-size: 20px;
                    line-height: 30px;
                }

                .fr {
                    float: right;
                    background-image: url(./images/home/icons.png);
                    width: 66px;
                    height: 25px;
                    background-position: 182px -104px;
                    line-height: 30px;
                    font-size: 12px;
                    font-weight: 400;
                    color: #666;
                    text-decoration: none;
                }
            }

            .bd {
                .favourate {
                    border: 1px solid #e4e4e4;
                    overflow: hidden;
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: flex;

                    li {
                        height: 250px;
                        margin: 0 -1px;
                        overflow: hidden;
                        background: #fff;
                        position: relative;
                        width: 16.667%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;

                        img {
                            width: 142px;
                            height: 142px;
                            transition: all 400ms;

                            &:hover {
                                opacity: 0.8;
                                transform: scale(1.1)
                            }
                        }

                        .like-text {
                            padding: 0;
                            width: 142px;
                            border-right: 1px solid #e4e4e4;

                            p {
                                margin: 5px 0;
                            }

                            h3 {
                                color: #df3033;
                                font-size: 20px;
                                line-height: 30px;
                                margin: 9px 0;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
        }
    }



    .brand {
        margin: 10px 0;

        .py-container {
            width: 1200px;
            margin: 0 auto;

            .brand-list {
                overflow: hidden;
                padding: 15px 0;
                background: #f7f7f7;
                line-height: 18px;

                .brand-item {
                    width: 120px;
                    float: left;
                    height: 37px;

                    img {
                        border-left: 1px dotted #ccc;
                        padding: 0 10px;
                    }

                    &:first-child {
                        img {
                            border-left: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>