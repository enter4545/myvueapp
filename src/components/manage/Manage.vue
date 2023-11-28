<template>
    <div class="common-layout">
    <el-container>
      <!-- 左边菜单栏 -->
      <el-aside :width="isCollapse ?'80px' : '200px'">
           <!-- 菜单伸缩按钮 -->
           <div class="myComponey" >
            <span class="isIcon" @click="isColl" ></span>
            <span class="name" >六六顺交通</span>
           </div>
           <!-- 客户信息列表 -->
           <div class="menu-out">
              <div class="menu1">
                 <span class="isIcon" @click="isColl" ></span>
                 <span class="name" @click="goRoute(1)"  >客户列表</span>
              </div>

              <div class="menu1">
                 <span class="isIcon article" @click="isColl" ></span>
                 <span class="name" @click="IsChange(1)" >文章管理</span>
                 <ul class="article-in" :style="{height: artIs ? '0' : '90px',marginTop: artIs ? '0' : '10px'}">
                    <li @click="goRoute(3)" >文章列表</li>
                    <!-- <li>文章类别</li> -->
                    <li @click="goRoute(2)">发布文章</li>
                 </ul>
              </div>

              <div class="menu1">
                 <span class="isIcon productIcon" @click="isColl" ></span>
                 <span class="name" @click="goRoute(4)"  >产品管理</span>
              </div>

              <div class="menu1">
                 <span class="isIcon imagesIcon" @click="isColl" ></span>
                 <span class="name" @click="goRoute(6)"   >图片管理</span>
              </div>
           </div>
           <el-button class="loginout" @click="logout">退出</el-button>
      </el-aside>
      <!-- 右边内容 -->
        <el-main>
          <router-view></router-view>

            <!-- <div class="main-head"></div> -->

            <!-- 富文本编辑 -->
            <!-- <fuwenben></fuwenben> -->
        </el-main>
    </el-container>

  </div>

</template>

<script setup>
import {ref, onMounted} from 'vue'

import {ElMessage} from 'element-plus'
import {useRouter} from 'vue-router'
import Menu from './components/menu.vue'
import fuwenben from './components/fuwenben.vue'
import {getClientList} from '../../api/login'

const tableData = ref()
const router = useRouter()



// 文章展开，收缩
const artIs = ref(true)
// 产品展开，收缩
const proCollapse = ref(true)
//图片管理展开
const imgCollapse = ref(true)

// console.log(headers)



import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Fold
} from '@element-plus/icons-vue'

const isCollapse = ref(false)


//侧边栏收起函数
const  isColl = ()=>{
  isCollapse.value = !isCollapse.value
}
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
//文章下拉菜单函数
const IsChange = (index)=>{
  switch(index){
      case 1 :
        artIs.value = !artIs.value
        console.log(artIs.value)
        proCollapse.value = true
        imgCollapse.value = true
        break;
      case 2 :
        artIs.value = true
        proCollapse.value = !proCollapse.value
        imgCollapse.value = true
        break;
      case 3 :
        artIs.value = true
        proCollapse.value = true
        imgCollapse.value = !imgCollapse.value
        break;
   }
}
//产品下拉菜单函数
const proIsChange = ()=>{
  proCollapse.value = !proCollapse.value
}
//图片下拉菜单函数
const imgIsChange = ()=>{
  imgCollapse.value = !imgCollapse.value
}

const goRoute = (path)=>{
   switch(path){
      case 1 :
        router.push('/clients')
        break;
      case 2 :
        router.push('/artUpdata')
        break;
      case 3 :
        router.push('/artList')
        break;
      case 4 :
        router.push('/prolist')
        break;
      case 6 :
        router.push('/imagesList')
        break;
   }
}

//退出登录
const logout = ()=>{
  router.push('/login')
  localStorage.removeItem('token');
}


</script>

<style lang="scss" scoped>
.common-layout{
  background-color: #e7e7e7;
  .el-aside{
  background-color:#545c64;
  overflow: hidden;
  height: 100vh;
  transition: width .5s linear;
  position: relative;
  .myComponey{
    margin: 30px 30px 10px 20px;
    // height: 56px;
    background-color:#545c64;
    font-size: 20px;
    vertical-align: middle;
    color: #333;
    position: relative;
    color: #fff;
    overflow: hidden;
    .isIcon{
      position: relative;
      display: block;
      width: 30px;
      height: 30px;
      // background-color: pink;
      background-image: url('../../assets/icon/通用-收起.png');
      background-size: 30px 30px;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .name{
      position: absolute;
      left: 50px;
      top: 0;
      white-space: nowrap;
    }
  }
  .menu-out{
    
    .menu1{
    margin: 30px 30px 10px 20px;
    padding: 10px;
    font-size: 16px;
    vertical-align: middle;
    color: #333;
    position: relative;
    color: #fff;
    overflow: hidden;
    line-height: 20px;
    overflow: hidden;

    .isIcon{
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      // background-color: pink;
      background-image: url('../../assets/icon/新客户.png');
      background-size: 20px 20px;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .article{
      background-image: url('../../assets/icon/文章管理.png');
      background-size: 20px 20px;
    }
    .productIcon{
      background-image: url('../../assets/icon/车.png');
      background-size: 16px 16px;
    }
    .imagesIcon{
      background-image: url('../../assets/icon/图片列表.png');
      background-size: 16px 16px;
    }
    .name{
      position: absolute;
      left: 40px;
      top: 10px;
      white-space: nowrap;
      &:hover{
            // background-color: #666;
            cursor: pointer;
      }
    }
    .article-in{
      // width: ;
      // height: 0;
      box-sizing: border-box;
      // margin-top: 10px ;
      margin-left: 30px;
      text-align: center;
      overflow: hidden;
      transition: all 1s ease;
      li{
        &:hover{
            background-color: #666;
            cursor: pointer;
        }
        padding: 5px;
        list-style: none;
        white-space: nowrap;
      }
    }
  }
  }
  .loginout{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.el-main {
  padding: 0;
  margin: 20px;
  background-color: #fff;
  min-width: 800px;
  min-height: 556px;
}

.side-in{
    text-align: center;
    padding: 30px 10px 10px 10px;
}
.main-head{
    height: 50px;
    margin-bottom: 20px;
    background-color: pink;
}
}
</style>