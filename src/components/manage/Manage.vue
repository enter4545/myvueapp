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
           <div class="menu-out">
            <div class="menu1">
            <span class="isIcon" @click="isColl" ></span>
            <span class="name" >客户列表</span>
           </div>
           </div>
      </el-aside>
      <!-- 右边内容 -->
        <el-main>
            <!-- <div class="main-head"></div> -->
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="name" label="名字" width="90" />
              <el-table-column prop="tel" label="电话" width="140" />
              <el-table-column prop="product" label="产品" width="170" />
              <el-table-column prop="date" label="日期" width="170" />
              <el-table-column prop="email" label="邮箱" />
              <el-table-column prop="address" label="地址" />
              <el-table-column prop="liuyan" label="留言" />
            </el-table>
        </el-main>
    </el-container>
  </div>

</template>

<script setup>
import {ref, onMounted} from 'vue'
import {getClientList} from '../../api/login.js'
import {ElMessage} from 'element-plus'
import {useRouter} from 'vue-router'
import Menu from './components/menu.vue'
const router = useRouter()

const tableData = ref([])


// console.log(headers)

const getList = async ()=>{
  const token = localStorage.getItem('token')
  const headers = {
      "Authorization": `Bearer ${token}`
  }
  console.log("faqi")
  const res = await getClientList(headers)

  console.log(res)
  tableData.value = res.data.results
  // console.log(res, '管理页')
  if(res.data.status != 0){
    ElMessage.error(res.data.message)
    // router.push('/login')
  }

}

onMounted(()=>{
  getList()
  console.log('发起请求')
})

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Fold
} from '@element-plus/icons-vue'

const isCollapse = ref(false)

const  isColl = ()=>{
  isCollapse.value = !isCollapse.value
}
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
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
    &:hover{
      background-color: #666;
      cursor: pointer;
    }
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
    .name{
      position: absolute;
      left: 40px;
      top: 10px;
      white-space: nowrap;
    }
  }
  }
}
   .el-main{

      .el-table{
        padding: 10px;
        height: calc(100vh - 40px);
      }
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