<template>
    <div>
        <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="name" label="名字" width="90" />
              <el-table-column prop="tel" label="电话" width="140" />
              <el-table-column prop="product" label="产品" width="170" />
              <el-table-column prop="date" label="日期" width="170" />
              <el-table-column prop="email" label="邮箱" />
              <el-table-column prop="address" label="地址" />
              <el-table-column prop="liuyan" label="留言" />
        </el-table>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import {ref, onMounted} from 'vue'
import {getClientList} from '../../../api/login'
import {useRouter} from 'vue-router'
const router = useRouter()
const tableData = ref()

// //数据绑定
// const tableData = ref([])
// //请客户信息列表
// const getList = async ()=>{
//   const token = localStorage.getItem('token')
//   const headers = {
//       "Authorization": `Bearer ${token}`
//   }
//   console.log("faqi")
//   const res = await getClientList(headers)

//   console.log(res)
//   tableData.value = res.data.results
//   console.log(res, '管理页')
//   if(res.data.status != 0){
//     ElMessage.error(res.data.message)
//     // router.push('/login')
//   }

// }

const getList =  ()=>{
  const token = localStorage.getItem('token')
  const headers = {
      "Authorization": `Bearer ${token}`
  }
  console.log("faqi")
   getClientList(headers).then(res => {
      tableData.value = res.data.results
      console.log(res,'then')
   }).catch(res =>{
    console.log(res,'catch')
      if(res.response.status == 401 || res.response.data == 'Token expired'){
        ElMessage.error('token失效，请重新登录')
        // router.push('/login')
      }
      if(res.data.status != 0 ){
        ElMessage.error(res.data.message)
        // router.push('/login')
      }
   })


}

onMounted(()=>{
  getList()
  console.log('发起请求')
})
</script>

<style lang="scss" scoped>
      .el-table{
        padding: 10px;
        height: calc(100vh - 40px);
      }
</style>