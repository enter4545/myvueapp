<template>
    <div v-if="!isMobile">
        <Back></Back>
        <div class="bread inner"><span>您当前的位置 ：</span><span>首 页</span> > <span>{{routeNames[1]}}</span> > <span>{{routeNames[2]}}</span></div>
        <div class="content inner">
            <div class="left">
                <div class="box-1">
                    <div class="title">公司概况<span>/ About</span></div>
                    <div class="nav">
                        <router-link to="/intro">
                            <div  class="nav-1">公司概况<span></span></div>
                        </router-link>
                       <router-link to="/honor">
                            <div class="nav-2">公司荣誉<span></span></div>
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
    <Mintro v-if="isMobile"></Mintro>
</template>

<script setup>
import {onMounted, ref} from "vue"
import Back from "../zujian/Back.vue"
import Newnav from "../zujian/Newnav.vue"
import Hot from "../zujian/Hot.vue"
import ContactUs from "../zujian/ContactUs.vue"
import Mintro from '../zujian/MHeadNav.vue'
import liuyan from '../zujian/liuyan.vue'

const routeNames = ref([])
const isMobile = ref(false)

const getMessage = (msg)=>{
    routeNames.value = msg.value
    console.log(routeNames.value)
  }

onMounted(()=>{
    isMobile.value = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
})  

</script>

<style lang="scss" scoped>
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
        .liuyan{
            width: 305px;
            height: 106px;
            background-image: url("../../assets/images/liu.png");
        }
       }
       .right{
        // background-color: skyblue;
        width: 845px;
       }
   }
</style>