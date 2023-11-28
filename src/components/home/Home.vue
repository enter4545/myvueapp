<script setup>
import {ref, onMounted}  from "vue"
import {useRouter} from "vue-router"
import Mmove from "./move/m-home.vue"
const router = useRouter()
const toRouter = (rou)=>{
  console.log(rou)
  // console.log(event)
  event.stopPropagation();
  router.push(rou)
}
const toliuyan = ()=>{
  router.push('/liuyan')
}

const navList = [
  {id:1,"title":'首页',router:"/welcome"},
  {id:2,"title":'公司简介',router:"/introduce",children:[{id:1,title:'公司概况',router:'/intro'},{id:2,title:'公司荣誉',router:'/honor'}]},
  {id:3,"title":'防撞车可租售',router:"/product",children:[{id:1,title:'xx防撞车',router:'/two'},{id:2,title:'xxx防撞车',router:'/three'}]},
  {id:4,"title":'行业资讯',router:"/news",children:[{id:1,title:'公司新闻',router:'/compony'},{id:2,title:'行业资讯',router:'/industry'},{id:3,title:'技术支持',router:'/technical'}]},
  {id:5,"title":'相关案列',router:"/case",children:[{id:1,title:'施工案例',router:'/image'},{id:2,title:'视频案例',router:'/video'}]},
  {id:6,"title":'联系我们',router:"/contact",children:[{id:1,title:'联系我们',router:'contact'}]}
]
const dianji  = ()=>{
  console.log("11")
  return setActiveItem(2)
} 

// 组件加载完后媒体查询，设备是否是手机端

const isMobile = ref(false)

onMounted(()=>{
  isMobile.value = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
})

// 定义 scrollToTop 方法
const scrollToTop = () => {
  console.log('回到顶部')
  // 使用 window.scrollTo 将页面滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 添加平滑滚动效果
  });
};


</script>

<template>
<!-- 电脑端首页 -->
<div class="p-home" v-if='!isMobile'>
  <!-- 顶部 -->
  <div class="head">
    <div class="head-in inner">
      <div>服务有限公司</div>
      <div><span>热推信息</span>|<span>企业分站</span>|<span>网站地图</span>|<span>RSS</span>|<span>XML</span></div>
    </div>
  </div>
  <!-- 顶部导航栏 -->
  <div class="nav">
    <div class="nav-in inner">
      <div class="logo-image">图片</div>
      <div class="tel-number">
        <p>销售咨询热线</p>
        <p>电话:88888888888</p>
      </div>
      <div class="nav-list">
        <ul>
          <li v-for="item in navList" :key="item.id" @click="toRouter(item.router,event)">
             {{item.title}}
            <div class="drop-menu" v-if="item.children">
              <div class="drop-list" @click="toRouter(i.router,event)" v-for="i in item.children" :key="i.id" >{{i.title}}</div>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
  <!-- 路由内容 -->
  <router-view></router-view>
  <!-- 底部 -->
  <div class="foot">
    <div class="foot-in inner">
      <ul>
        <li>友情连接：</li>
        <li>亚克力浴缸</li>
        <li>不锈钢砂泵</li>
        <li>兰州推拉门</li>
        <li>艺术涂料</li>
        <li>阀杆厂家</li>
      </ul>
      <div class="f-content">
        <div class="f-left">
          <h1>xxx汽车销售服务有限公司</h1>
          <p>电话：xxx88888888888</p>
          <p>电话：xxx88888888888</p>
          <p>电话：xxx88888888888</p>
        </div>
        <div class="f-center">
          <ul>
            <li>产品中心</li>
            <li>产品中心</li>
            <li>产品中心</li>
            <li>产品中心</li>
            <li>产品中心</li>
            <li>产品中心</li>
            <li>产品中心</li>
            <li>产品中心</li>
          </ul>
        </div>
        <div class="f-right">
          <div>
            <p>扫描添加联系人</p>
            <img src="../../assets/images/QRcode/wechat.jpg" alt="">
          </div>
          <div>
            <p>扫描添加抖音</p>
            <img src="../../assets/images/QRcode/douying.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="foot1">
    <div class="foot1-in inner">
      版权所有©2018   xxxx汽车销售服务有限公司 备案号：粤ICP备xxxxxxxxx号 服务支持：xxxx
    </div>
  </div>
  <!-- 固定定位内容 -->
  <div class="position">
    <ul>
      <!-- qq -->
      <li>
        <span class="space">
          <span class="spring">
            <span class="s-icon icon-qq"></span>
          </span>
          
        </span>
        </li>
        <!-- 电话 -->
      <li>
        <span class="space">
          <span class="spring">
            <span class="s-icon icon-tel"></span>
          </span>
          <span class="content">12355556666</span>
        </span>

      </li>
      <!-- 二维码 -->
      <li>
        <span class="space-erweima">
          <span class="spring">
            <span class="icon-erweima"></span>
          </span>
          <div class="erweima"><div class="arrow"></div></div>
        </span>
      </li>
      <!-- 在线留言 -->
      <li @click="toliuyan">
        <span class="space">
          <span class="spring">
            <span class="s-icon icon-liuyan"></span>
          </span>
          <span class="content">在线留言</span>
        </span>
      </li>
      <!-- 返回顶部 -->
      <li>
        <span @click="scrollToTop" class="space-top">
          <span class="spring">
            <span class="icon-top"></span>
          </span>
        </span>
      </li>
    </ul>
  </div>
</div>
<!-- 手机端首页 -->
<Mmove v-if='isMobile'></Mmove>
</template>

<style lang="scss" scoped>
.p-home{
  .head{
  height: 40px;
  background-color: #242424;
  .head-in{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 12px;
    line-height: 40px;
    span{
      margin: 0 5px;
    }
  }
}
.nav{
  background-color: #fff;
  height: 100px;
  border-bottom: 1px solid #131219;
  .nav-in{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
      .logo-image{
         background-color: pink;

         width: 250px;
         text-align: center;
         line-height: 100px;
       }
       .tel-number{
        font-size: 20px;
        font-weight: 900;
        p:nth-child(1){
          color: #c0091a;
          font-weight: 900;
        }
        p:nth-child(2){
          color: #1e1e1e;
          font-weight: 900;
        }
       }
       .nav-list{
         width: 618px;
         ul{
             li{
              float: left;
              color: #32323f;
              font-size: 16px;
              list-style: none;
              position: relative;
              text-align: center;
              width: 100px;
              height: 100px;
              line-height: 103px;
              background-repeat: no-repeat;
              background-size: 65px 3px;
              background-position: center 75px;
              &:hover{
                  cursor: pointer;
                  color: #c0091a;
                  border-color:  #666 ; 
                  background-image: url('../../assets/images/line1.png');
              }
              &:hover .drop-menu{
                height: 200px;
              }
              .drop-menu{
                position: absolute;
                top: 100px;
                left: 0;
                height: 0;
                z-index: 10;
                width: 100%;
                overflow: hidden;
                transition: height 0.8s cubic-bezier(0.16, 0.71, 1, 2.67);
                .drop-list{
                  background-color: #c0091a;
                  height: 38px;
                  color: #fff;
                  line-height: 38px;
                  font-size: 14px;
                  padding: 0 1px;
                }
              }
             }
         }
       }
  }
}

.foot{
  // height: 452px;
  background-color: #424252;
  .foot-in{
    overflow: hidden;
    ul{
      margin-top: 20px;
      border-bottom: 1px solid #e3e3ff;
      overflow: hidden;
      li{
        padding: 15px 0;
        float: left;
        height: 24px;
        line-height: 24px;
        color: #e3e3ff;
        margin-right: 50px;
        list-style: none;
        &:hover{
          cursor: pointer;
        }
      }
    }
    .f-content{
      padding-top: 56px;
      padding-bottom: 55px;
      color: #e5e5e5;
      display: flex;
      justify-content: space-between;
      .f-left{
        float: left;
        width: 665px;
        height: 174px;
        color: #e3e3ff;
        h1{
          font-size: 22px;
          margin-bottom: 38px;
          font-weight: bold;
        }
        p{
          height: 28px;
        }
      }
      .f-center{
        width: 220px;
        height: 188px;
        ul{
          border: none;
          margin: 0;
          li{
            float: left;
            margin-right: 10px;
            padding: 0;
            width: 90px;
            height: 47px;
          }
        }
      }
      .f-right{
        box-sizing: border-box;
        width: 284px;
        height: 152px;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        p{
          height: 43px;
        }
        img{
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
.foot1{
  height: 78px;
  background-color: #32323f;
  font-size: 12px;
  color: #e3e3ff;
  line-height: 78px;
}
.position{
  position: fixed;
  right: 17px;
  bottom: 10%;
  z-index: 10;
  // background-color: pink;
  ul{
    li{
      position: relative;
      list-style: none;
      width: 57px;
      height: 57px;
      cursor: pointer;
      margin-bottom: 3px;
      &:hover .space{
        background: #bd0919;
        width: 200px;
      }



      &:hover .space .spring{
        background: #bd0919;
      }
      &:hover .space .spring .icon-qq{
        background-image: url('../../assets/images/icon_spirit.png');
        background-position: -30px -151px;
      }
      &:hover .space .spring .icon-tel{
        background-position: -30px -90px;
      }
      &:hover .space .spring .icon-liuyan{
        background-position: -30px -120px;
      }

      &:hover .space-erweima .spring {
        background: #bd0919;
      }

      &:hover .space-erweima .spring .icon-erweima{
        background-position: -30px -30px;
      }


      &:hover .space-top .spring {
        background: #bd0919;
      }

      &:hover .space-top .spring .icon-top{
        background-position: -30px -60px;
      }

      .space{
        position: absolute;
        right: 0;
        width: 57px;
        height: 57px;
        opacity: 1;
        transition: all .5s ease;
        background: #bd0919;
        overflow: hidden;
        .spring{
        position: absolute;
        left: 0;
        display: block;
        width: 57px;
        height: 57px;
        background-color: #d9d9d9;
        transition: all 0.1s cubic-bezier(0, 1.07, 1, 1);
        .s-icon{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 30px;
          height: 30px;
          background-image: url('../../assets/images/icon_spirit.png');
          background-position: 0px -151px;
          background-repeat: no-repeat;
        }
        .icon-tel{
            background-position: 0px -90px;
        }
        .icon-liuyan{
            background-position: 0px -120px;
        }
        }
        .content{
          margin-left: 70px;
          color: #fff;
          line-height: 57px;
        }
      }
      .space-erweima{
        position: absolute;
        right: 0;
        width: 57px;
        height: 57px;
        opacity: 1;
        transition: all .5s ease;
        background: #bd0919;
        // overflow: hidden;
        &:hover .erweima{
        right: 70px;
        opacity: 1;
      }
        .spring{
        position: absolute;
        left: 0;
        display: block;
        width: 57px;
        height: 57px;
        background-color: #d9d9d9;
        // transition: all 0.1s cubic-bezier(0, 1.07, 1, 1);
        .icon-erweima{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 30px;
          height: 30px;
          background-image: url('../../assets/images/icon_spirit.png');
          background-position: 0px -30px;
          background-repeat: no-repeat;
          // pointer-events: none;
        }
        }
        .erweima{
          box-sizing: border-box;
          width: 110px;
          height: 110px;
          background-color: pink;
          position: absolute;
          right: -127px;
          bottom: 0;
          transition: all .7s;
          opacity: 0;
          pointer-events: none;
          background-image: url('../../assets/images/QRcode/wechat.jpg');
          background-size: 100px 100px;
          background-repeat: no-repeat;
          background-position: center center;
          border: 5px solid #bd0919;
          .arrow{
          position: absolute;
          // width: 10px;
          // height: 10px;
          border-top: 8px solid transparent;
          border-right: 8px solid transparent;
          border-left: 8px solid #bd0919;
          border-bottom: 8px solid transparent;
          // border-bottom: transparent;
          // background-color: #bd0919;
          right: -20px;
          bottom: 16px;
        }
        }

      }
      .space-top{
        position: absolute;
        right: 0;
        width: 57px;
        height: 57px;
        opacity: 1;
        transition: all .5s ease;
        background: #bd0919;
        overflow: hidden;
        .spring{
        position: absolute;
        left: 0;
        display: block;
        width: 57px;
        height: 57px;
        background-color: #d9d9d9;
        // transition: all 0.1s cubic-bezier(0, 1.07, 1, 1);
        .icon-top{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 30px;
          height: 30px;
          background-image: url('../../assets/images/icon_spirit.png');
          background-position: 0px -60px;
          background-repeat: no-repeat;
        }
        }
      }

    }
  }
}
}
</style>
