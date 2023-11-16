<template>
    <div class="p-product" v-if="!isMobile">
        <Back></Back>
        <div class="bread inner"><span>您当前的位置 ：</span><span>首 页</span> > <span>{{routeNames[1]}}</span><span v-if="routeNames[1] !== routeNames[2] "> > {{routeNames[2]}}</span></div>
        <div class="content inner">
            <div class="left">
                <div class="box-1">
                    <div class="title">防撞缓冲车<span>/ product</span></div>
                    <div class="nav">
                        <router-link to="/two">
                            <div  class="nav-1">xx防撞车<span></span></div>
                        </router-link>
                       <router-link to="/three">
                            <div class="nav-2">xxx防撞车<span></span></div>
                       </router-link>
                        
                    </div>
                </div>
                <newnav class="box-2"></newnav>
                <Hot class="box-2"></Hot>
                <ContactUs class="box-2"></ContactUs>
                <liuyan></liuyan>
            </div>
            <div class="right">
                <router-view @get-message="getMessage"></router-view>
            </div>
        </div>
    </div>
    <Mproduct v-if="isMobile"></Mproduct>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import Back from "../zujian/Back.vue"
import Newnav from "../zujian/Newnav.vue"
import Hot from "../zujian/Hot.vue"
import ContactUs from "../zujian/ContactUs.vue"
import Mproduct from "../zujian/MHeadNav.vue"
import liuyan from '../zujian/liuyan.vue'


const routeNames = ref([])
const isMobile = ref(false)

const getMessage = (msg)=>{
    console.log(msg,'电脑')
    routeNames.value = msg.value
}

// 挂载时识别pc还是手机端
onMounted(()=>{
    isMobile.value = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
})
</script>

<style lang="scss" scoped>
.p-product{
    .bread{
    font-size: 14px;
    color: #2f2f2f;
    padding: 15px 0;
   }
   .content{
    padding-bottom: 43px;
    display: flex;
    justify-content: space-between;
       .left{
        width: 305px;
        // background-color: pink;
        // height: 200px;
        .box-1{
            margin-bottom: 20px;
            .title{
                font-size: 20px;
                color: #fff;
                line-height: 30px;
                font-weight: bold;
                background-color: #bd0919;
                padding: 10px 20px;
                span{
                    font-size: 16px;
                    color: #fff;
                    opacity: 0.6;
                    margin-left: 10px;
                    text-transform: capitalize;
                }
            }
            .nav{
                // height: 105px;
                border: 1px solid #d2d2d2;
                div{
                    height: 52px;
                    padding: 15px 18px;
                    box-sizing: border-box;
                    position: relative;
                    color: #000;
                    &:hover{
                        color: #c0091a;
                        cursor: pointer;
                    }
                    span{
                        display: inline-block;
                        position: absolute;
                        height: 30px;
                        width: 30px;
                        background: url('../../assets/images/icon_spirit.png');
                        background-position: 0px -241px;
                        top: 10px;
                        right: 20px;
                    }
                }
                .nav-1{

                    border-bottom: 1px solid #eeeeee;

                }
            }
        }
        .box-2{
            margin-bottom: 20px;
        }
       }
       .right{
        // background-color: skyblue;
        width: 845px;
       }
   }
}
</style>