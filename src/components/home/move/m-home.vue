<template>
    <div class="m-home">
        <div class="move-head">
            <img src="../../../assets/images/bj1.jpg" alt="tupian">
            <div class="head-btn">
                <span class="border" @click="open"></span>
                <span class="menu" @click="getMenu"></span>
            </div>
        </div>
        <div class="search" 
        :style="{height: height,padding:padding,/*borderTop: flag ? '1px solid #ddd':'none'*/}">
            <div class="search-in">
                <input @focus="clear" @blur="put" type="text"   :placeholder="placeholder"><span>搜索</span>
            </div>
        </div>
        <router-view></router-view>
        <!-- 底部固定定位四个tobar -->
        <div class="bar">
            <ul>
                <li @click="tobar(1)" :class="[active == 1 ? 'active' : '']"><span class="b-icon icon1"></span><span class="tobar">首页</span></li>
                <li @click="tobar(2)" :class="[active == 2 ? 'active' : '']"><span class="b-icon icon2"></span><span class="tobar">电话</span></li>
                <li @click="tobar(3)" :class="[active == 3 ? 'active' : '']"><span class="b-icon icon3"></span><span class="tobar">联系</span></li>
                <li @click="tobar(4)" :class="[active == 4 ? 'active' : '']"><span class="b-icon icon4"></span><span class="tobar">关于我们</span></li>
            </ul>
        </div>
        <!-- 侧边栏固定定位 -->
        <div 
        :class="[actMenu ? 'menulist u-act' : 'menulist act-menu']"
        >
            <p @click="getMenu"></p>
            <ul>
                <li @click="toRouter(item.router)" v-for="(item, index) in routeList" :key="index">{{item.title}}</li>
            </ul>
        </div>
    </div>

</template>

<script setup>
import {onMounted} from "vue"
import {useRouter} from "vue-router"
import {ref} from "vue"
// 动态绑定input 内文字
const placeholder = ref('请输入搜索关键词')
// 动态绑定搜索栏的高度
const height = ref('0')
const padding = ref('0')
const flag = ref(false)
const active = ref(1)
const actMenu = ref(true)
const router = useRouter()


const routeList = [
    {title:"首页",router:"welcome"},
    {title:"防撞缓冲车",router:"/one"},
    {title:"施工案例",router:"/image"},
    {title:"新闻中心",router:"/compony"},
    {title:"关于我们",router:"/intro"},
    {title:"联系我们",router:"contact"},

]

// input聚焦focus之后
const clear = () => {
  placeholder.value = '';
};

// input失焦blur之后
const put = () => {
  placeholder.value = '请输入搜索关键词';
};

// 隐藏或者打开搜索栏
const open = ()=>{
    if(!flag.value){
        flag.value = true
        height.value = '2.1rem'
        padding.value = '0.55rem 0.83rem'
    }else{
        flag.value = false
        height.value = '0'
        padding.value = '0 0.83rem'
    }
    
    
}
// 打开隐藏菜单栏
const getMenu = ()=>{
    actMenu.value = !actMenu.value
}

const tobar = (id)=>{
    console.log(typeof id)
    active.value = id
    switch(id){
        case 1:
        router.push('welcome');
        break;
        case 2:
        window.location.href = 'tel:88888888888';
        break;
        case 3:
        router.push('contact');
        break;
        case 4:
        router.push('introduce');
        break;

    }
    // if(id == 2){
    //    // 使用 window.location 模拟点击链接的效果
    //    window.location.href = 'tel:88888888888';
    // }
}

const toRouter =(rou)=>{
    router.push(rou)
    actMenu.value = true
    console.log(actMenu.value)
}

</script>

<style lang="scss" scoped>
.m-home{
    padding-bottom: 2.8rem;
    .move-head{
        height: 3.22rem;
        padding: 10px 0px;
        display: flex;
        justify-content: space-around;
        img{
            width: 13.9rem;
        }
        .head-btn{
            width: 4.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                height: 1.4rem;
                width: 2.2rem;
                // background-color: green;
            }
            .border{
                border-right: 1px solid #999;
                background-image: url('../../../assets/icon/搜索 (2).png');
                background-size: 1.5rem 1.5rem;
                background-repeat: no-repeat;
                background-position: center center;
            }
            .menu{
                background-image: url('../../../assets/icon/菜单.png');
                background-size: 1.5rem 1.5rem;
                background-repeat: no-repeat;
                background-position: center center;
            }
        }
    }
    .search{
        overflow: hidden;
        border-top: 1px solid #ddd;
        // height: 2.1rem;
        height: 0;
        // padding: 0.55rem 0.83rem;
        // background-color: pink;
        transition: all .2s linear;
        .search-in{
            border:  1px solid #444444;
            border-radius: 10px;
            height: 2.1rem;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            input{
                flex: 1;
                height: 1.3rem;
                padding-left: 15px;
                margin-left: 1px;
                font-size: 1rem;
            }
            span{
                border-left: 1px solid #b6b6b4;
                color: #323232;
                text-align: center;
                // height: 22px;
                // font-size: 16px;
                width: 25%;
            }
        }
    }
    .bar{
        height: 2.8rem;
        width: 100%;
        background-color: #434343;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 1;
        ul{
            display: flex;
            .active{
                background-color: #bd0919;
            }
            li{
               flex: 1; 
               list-style: none;
               text-align: center;
               line-height: 2.8rem;
               color: #fff;
               display: flex;
               justify-content: center;
               align-items: center;
               .b-icon{

                background-repeat: no-repeat;
                width: 1rem;
                height: 1rem;
                background-size: 1rem 1rem;
                padding: 0 3px;
               }
               .icon1{
                background-image: url('../../../assets/icon/首页.png');
               }
               .icon2{
                background-image: url('../../../assets/icon/电话.png');
               }
               .icon3{
                background-image: url('../../../assets/icon/客服.png');
               }
               .icon4{
                background-image: url('../../../assets/icon/share-fill.png');
               }
            }
        }
    }
    .act-menu{
    transform: translateX(0%);
    opacity: 1;
}
.u-act{
    transform: translateX(-100%);
    opacity: 0;
}
.menulist{
        transition: all .6s ease;
        width: 100%;
        height: 100%;
        background-color: #bd0919;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        p{
            padding: 0.83rem 0.83rem 0 0 ;
            height: 1.92rem;
            // background-color: skyblue;
            text-align: right;
            background-image: url('../../../assets//icon/打叉.png');
            background-repeat: no-repeat;
            background-size: 1.2rem 1.2rem;
            background-position: 95% 1.2rem
        }
        ul{
            text-align: center;
            li{
                line-height: 2.22rem;
                font-size: 0.78;
                color: #fff;
                border-bottom: 1px solid #fff;
            }
        }
    }
}

</style>