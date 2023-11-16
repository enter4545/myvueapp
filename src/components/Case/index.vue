<template>
    <div v-if="!isMobile">
        <!-- banner背景 -->
        <Back></Back>
        <div class="bread inner"><span>您当前的位置 ：</span><span>首 页</span> > <span>{{breadList[1]}}</span> > <span>{{breadList[2]}}</span></div>
        <div class="content inner">
            <div class="left">
                <div class="box-1">
                    <div class="title">施工案例<span>/ case</span></div>
                    <div class="nav">
                        <router-link to="/image">
                            <div  class="nav-1">施工案例<span></span></div>
                        </router-link>
                       <router-link to="/video">
                            <div class="nav-2">视频案例<span></span></div>
                       </router-link>
                    </div>
                </div>
                <newnav class="box-2"></newnav>
                <Hot class="box-2"></Hot>
                <ContactUs class="box-2"></ContactUs>
                <liuyan></liuyan>
            </div>
            <div class="right">
                <router-view @getSon="getSon"></router-view>
            </div>
        </div>
    </div>
    <Mcase v-if="isMobile"></Mcase> 
</template>

<script setup>
import {ref, onMounted} from "vue"
// 引入手机端案例
import Mcase from '../zujian/MHeadNav.vue'
import Back from "../zujian/Back.vue"
import Newnav from "../zujian/Newnav.vue"
import Hot from "../zujian/Hot.vue"
import ContactUs from "../zujian/ContactUs.vue"
import liuyan from '../zujian/liuyan.vue'

const isMobile = ref(false)
const breadList = ref([])

// 获取子路由传过来的路由信息
const getSon = (msg)=>{
    breadList.value = msg.value
    console.log(msg,"11")
    console.log(breadList.value[2])
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

       }
       .right{
        // background-color: skyblue;
        width: 845px;
       }
   }
</style>