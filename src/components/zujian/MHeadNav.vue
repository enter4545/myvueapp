<template>
    <div class="m-product">
        <!-- 头部 -->
        <div class="mhead">
            <span class="menu" @click="showNav"></span>
            <span>{{breadName[2]}}</span>
        </div>
        <!-- 固定定位nav -->
        <div :class="[ navActive ? 'sidenav sideactive' : 'sidenav sidehidden'  ]">
            <p><span class="text">{{route.matched[1].name}}</span><span class="navbtn" @click="showNav"></span></p>
            <ul>
                <li @click="goRouter(item.path)" v-for="(item,index) in navlist" :key="index">{{item.name}} ></li>
            </ul>
        </div>
        <div class="mhaed"></div>
        <!-- 0000 -->
       <router-view @get-son="getSon"></router-view>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRoute,useRouter} from "vue-router"
const route = useRoute()
const router = useRouter()

const navlist =  route.matched[1].children

// console.log(route,"手机组件")
const navActive = ref(false)
const breadName = ref([])


const goRouter = (path)=>{
    navActive.value = !navActive.value
    router.push(path)
}

const showNav = ()=>{
    navActive.value = !navActive.value
}
const getSon = (msg)=>{
    // console.log(msg.value, '手机组件3')
    breadName.value = msg.value
    console.log(breadName.value,'手机组件3')
}
</script>

<style lang="scss" scoped>
.m-product{
    position: relative;
    padding-bottom: 1rem;
    .mhead{
    position: absolute;
    
    width: 100%;
   padding-bottom: 1px solid #e5e5e5;
   color: #323232;
   display: flex;
   justify-content: space-between;
   padding: 12px 15px;
   border-bottom: 1px solid #e5e5e5;
   box-sizing: border-box;
     .menu{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #bd0919;
        background-image: url('../../assets/icon/菜单 (1).png');
        background-size: 25px 25px;
        background-repeat: no-repeat;
        background-position: center center;
     }
}
.sideactive{
    transform: translateX(0);
    opacity: 1;
}
.sidehidden{
    transform: translateX(-100%);
    opacity: 0;
}
.sidenav{
    position: absolute;
    width: 50%;
    height: 100%;
    min-height: 90vh;
    background-color: #eeeeee;
    transition: all .3s linear;
    z-index: 1;
    p{
        font-size: 1.1rem;
        padding: 12px 0 12px 12px;
        .navbtn{
            float: right;
            width: 30px;
            height: 30px;
            background-color: #bd0919;
            border-radius: 50%;
            margin-right: .5rem ;
            background-image: url('../../assets/icon/打叉.png');
            background-size: 15px 15px;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
    ul{
        li{
            background: #e5e5e5;
            padding: 10px 0 10px 10%;
            font-size: 1rem;
            margin-bottom: 10px;
            color: #323232;
        }
    }
}
.mhaed{
    height: 3.1rem;
}
}
</style>