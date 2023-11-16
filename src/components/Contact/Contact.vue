<template>
    <div v-if="!isMobile">
        <Back></Back>
        <div class="bread inner"><span>您当前的位置 ：</span><span>首 页</span> > <span>联系我们</span></div>
        <div class="content inner">
            <div class="left">
                <div class="box-1">
                    <div class="title">联系我们<span>/ About</span></div>
                    <div class="nav">
                        <router-link to="contact">
                            <div  class="nav-1">联系我们<span></span></div>
                        </router-link>
                    </div>
                </div>
                <newnav class="box-2"></newnav>
                <Hot class="box-2"></Hot>
                <ContactUs class="box-2"></ContactUs>
                <liuyan></liuyan>
            </div>
            <div class="right">

                <router-view></router-view>
                <!-- <div class="video"></div>
                <h1>xxxxx汽车销售服务有限公司位于广东省广州市，长期致力于全国各地区工程类汽车销售行业，是一家专业的汽车销售公司。旗下合作的汽车包括:北汽福田、东风、勇士等。现在国家对高危行业人员安全更加重视，其中高速施工、路桥养护等作业要求配备防撞保护措施，我司看到了防撞设施的市场，近几年和大运、福田、五十铃、江铃等合作推出防撞车系列防撞设施</h1>
                <h1>公司始终坚持“以客户为中心、以服务为导向、以安全为基础〃的服务宗旨,公司以“专注机械设备升级改装，用心服务客户"为中心价值，希望经过我们的专业服务和不懈努力，为用户解决问题。广东鸿运通不断秉承以用户需求为中心，为超一百家大中小企业提供专业的防撞緩冲车销售与租赁，用心的服务博得了众多企业的信任和好评，逐步树立起公司皂好的口碑。公司不仅提供专业的防撞緩冲车销售与租赁、桥梁检测车租赁服务，同时还建立了完善的售后服务体系，为用户施工中谒到的困难提供协助。为全国广大检测单位、施工单位、维修养护单位，提供专业、快捷、经济的操作台。公司秉成“诚信合作、长远合作、一次客户、终身朋友”的理念与多家公司合作，实现了共嬴。“安全化、标准化、责任化、制度化、服务化”的管理，为您提供：安全、优价、稳健的租赁服务。公司期待与各各界朋友合作，为祖国的交通建设事业而不懈奋斗。

</h1> -->
            </div>
        </div>
    </div>
    <MContact v-if="isMobile"></MContact>
</template>

<script setup>
import Back from "../zujian/Back.vue"
import Newnav from "../zujian/Newnav.vue"
import Hot from "../zujian/Hot.vue"
import ContactUs from "../zujian/ContactUs.vue"
import MContact from '../zujian/MHeadNav.vue'
import liuyan from '../zujian/liuyan.vue'
import {useRouter} from 'vue-router'
import {ref, onMounted} from "vue"

const router = useRouter()
const isMobile = ref(false)

const toliuyan = ()=>{
    router.push('/liuyan')
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
                        background: url('../assets/images/icon_spirit.png');
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
        .gongsi{
            color: rgb(102, 102, 102);
            font-weight: 700;
            font-size: 20px;
        }
        p{
            text-indent: 2em;
            font-size: 16px;
            color: rgb(102, 102, 102);
        }
       }
   }
</style>