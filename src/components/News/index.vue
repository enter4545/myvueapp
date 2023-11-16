<template>
    <div v-if="!isMobile">
        <Back></Back>
        <div class="bread inner"><span>您当前的位置 ：</span><span>首 页</span> > <span>{{breadList[1]}}</span> > <span>{{breadList[2]}}</span></div>
        <div class="content inner">
            <div class="left">
                <div class="box-1">
                    <div class="title">新闻中心<span>/ news</span></div>
                    <div class="nav">
                        <router-link to="/compony">
                            <div  class="nav-1">公司新闻<span></span></div>
                        </router-link>
                       <router-link to="/industry">
                            <div class="nav-2">行业资讯<span></span></div>
                       </router-link>
                       <router-link to="technical">
                            <div class="nav-2">技术支持<span></span></div>
                       </router-link>
                        
                    </div>
                </div>
                <newnav class="box-2"></newnav>
                <Hot class="box-2"></Hot>
                <ContactUs class="box-2"></ContactUs>
                <liuyan></liuyan>
            </div>
            <div class="right">
                <router-view @get-son="getSon"></router-view>
            </div>
        </div>
    </div>
    <Mnews v-if="isMobile"></Mnews>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import Back from "../zujian/Back.vue"
import Newnav from "../zujian/Newnav.vue"
import Hot from "../zujian/Hot.vue"
import ContactUs from "../zujian/ContactUs.vue"
import Mnews from "../zujian/MHeadNav.vue"
import liuyan from '../zujian/liuyan.vue'

const breadList = ref([])

// 获取子组件的信息
const getSon = (msg)=>{
    breadList.value = msg.value
    console.log(msg)
}

const isMobile = ref(false)

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