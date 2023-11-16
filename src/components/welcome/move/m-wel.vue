<template>
    <div class="m-wel">
        <div class="neirong">
            <carousel></carousel>
        </div>
        <video 
            controls="controls"
            muted="muted"
            autoplay="autoplay" 
            src="../../../assets/video/视频示例.mp4">
        </video>
        <div class="pro-show">
            <h3>产品<span>展示</span></h3>
            <p>product display</p>
            <div class="show-list">
                <ul>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d8111c458853aef9aa120.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d8111c458853aef9aa120.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d8111c458853aef9aa120.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d8111c458853aef9aa120.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d8111c458853aef9aa120.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d8111c458853aef9aa120.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                </ul>
            </div>
            <div class="pro-more" ><span>查看更多</span></div>
        </div>
        <div class="intro">
            <div class="intro-in">
                <h3><span>公司</span>简介</h3>
                <p>company profile</p>
                <div class="intro-text">
                    xxxxx汽车销售服务有限公司专注于全国各地区高速防撞缓冲车销售与服务一体化，我们有福田单双排、大运、五十铃单双排、
                </div>
            </div>
        </div>
        <div class="case">
            <h3>工程<span>案例</span></h3>
            <p>Engineering case</p>
            <div class="show-list">
                <ul>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d835ac458853aef9f4520.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d835ac458853aef9f4520.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d835ac458853aef9f4520.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d835ac458853aef9f4520.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d835ac458853aef9f4520.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                    <li>
                        <img src="https://pic.imgdb.cn/item/654d835ac458853aef9f4520.png" alt="">
                        <p>xxx工具车</p>
                    </li>
                </ul>
            </div>
            <div class="pro-more" ><span>查看更多</span></div>
        </div>
        <div class="newscen">
            <h3>新闻<span>中心</span></h3>
            <p>News center</p>
            <div class="new-back"></div>
            <ul>
                <li>
                    <span class="dian"></span>
                    <span class="new-text">关于高速防撞缓冲车保养的几个建议</span>
                    <span class="new-time">2019-09-05</span>
                </li>
                <li>
                    <span class="dian"></span>
                    <span class="new-text">关于高速防撞缓冲车保养的几个建议</span>
                    <span class="new-time">2019-09-05</span>
                </li>
                <li>
                    <span class="dian"></span>
                    <span class="new-text">关于高速防撞缓冲车保养的几个建议</span>
                    <span class="new-time">2019-09-05</span>
                </li>
                <li>
                    <span class="dian"></span>
                    <span class="new-text">关于高速防撞缓冲车保养的几个建议</span>
                    <span class="new-time">2019-09-05</span>
                </li>
                <li>
                    <span class="dian"></span>
                    <span class="new-text">关于高速防撞缓冲车保养的几个建议</span>
                    <span class="new-time">2019-09-05</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
// import {onMounted} from "vue"
import carousel from "./carousel/carousel.vue"

</script>

<style lang="scss" scoped>
.m-wel{
    margin: 0 auto;
    min-width: 320px;
    max-width: 820px;
    .neirong{
        // height: 500px;
        width: 100%;
        background-color: pink;
    }
    video{
        width: 100%;
        height: 12rem;
    }
    .pro-show{
        padding: 1rem 0;
        h3{
            text-align: center;
            font-size: 1.1rem;
            color: #bd0919;
            margin-bottom: 10px;
            span{
                color: #252222;
            }
        }
        p{
            text-transform: uppercase;
            font-size: 0.67rem;
            text-align: center;
            margin-bottom: 1.1rem;
        }
        .show-list{
            width: 100%;
            // height: 500px;
            // background-color: pink;
            ul{
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                li{
                    margin-bottom: 18px;
                    width: 45%;
                    list-style: none;
                    img{
                        width: 100%;
                        vertical-align: middle;
                    }
                    p{
                        background-color: #434343;
                        padding: 5px;
                        margin: 0;
                    }
                }
            }
        }
        .pro-more{
            text-align: center;
            span{
                display: inline-block;
                width: 7.2rem;
                height: 2.2rem;
                color: #fff;
                line-height: 2.2rem;
                border-radius: 10px;
                background-color: #bd0919;
            }
        }
    }
    .intro{
        width: 100%;
        height: 15.2rem;
        background-image: url('https://pic.imgdb.cn/item/654d835ac458853aef9f4520.png');
        background-size: 100% 100%;
        overflow: hidden;
        .intro-in{
            margin: 2.2rem auto;
            box-sizing: border-box;
            width: 19.4rem;
            height: 10.8rem;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 1rem;
            padding: 1.1rem;
            h3{
                text-align: center;
                color: #252222;
                margin-bottom: .5rem;
                font-size: 1.1rem;
                span{
                    color: #bd0919;
                }
            }
            p{
                text-transform: uppercase;
                text-align: center;
                font-size: 0.66rem;
                margin-bottom: 1.1rem;
            }
            .intro-text{
                font-size: 0.78rem;
                color: #323232;
                line-height: 1.2rem;
            }
        }
    }
    .case{
        padding: 1rem 0;
        h3{
            text-align: center;
            font-size: 1.1rem;
            color: #bd0919;
            margin-bottom: 10px;
            span{
                color: #252222;
            }
        }
        p{
            text-transform: uppercase;
            font-size: 0.67rem;
            text-align: center;
            margin-bottom: 1.1rem;
        }
        .show-list{
            width: 100%;
            // height: 500px;
            // background-color: pink;
            ul{
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                li{
                    margin-bottom: 18px;
                    width: 45%;
                    list-style: none;
                    img{
                        width: 100%;
                        vertical-align: middle;
                    }
                    p{
                        background-color: #ffffff;
                        padding: 5px;
                        margin: 0;
                    }
                }
            }
        }
        .pro-more{
            text-align: center;
            span{
                display: inline-block;
                width: 7.2rem;
                height: 2.2rem;
                color: #fff;
                line-height: 2.2rem;
                border-radius: 10px;
                background-color: #bd0919;
            }
        }
    }
    .newscen{
        padding: 1rem 0;
        h3{
            text-align: center;
            font-size: 1.1rem;
            color: #bd0919;
            margin-bottom: 10px;
            span{
                color: #252222;
            }
        }
        p{
            text-transform: uppercase;
            font-size: 0.67rem;
            text-align: center;
            margin-bottom: 1.1rem;
        }
        .new-back{
            width: 100%;
            height: 4.2rem;
            background-image: url('https://pic.imgdb.cn/item/654dd0a0c458853aef6a88ed.jpg');
            background-size: 100% 100%;
        }
        ul{
            padding: 0 1.93rem;
            li{
                padding: 0.5rem;
                line-height: 1.39rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px dashed #e2e2e2;
                color: #292929;
                .dian{
                     display: inline-block;
                     width: 8px;
                     height: 8px;
                     background-color: #bd0919;
                     vertical-align: middle;
                     margin-right: 5px;
                 }
                 .new-text{
                    flex: 1;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 0.78rem;
                    margin-right: 3px;
                 }
                 .new-time{
                    color: #b0b0b0;
                    font-size: 0.66rem;
                 }
            }
        }
    }
}
</style>