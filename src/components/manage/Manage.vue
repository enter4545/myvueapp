<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-aside style="background-color: skyblue;height: 100vh;" width="200px">
            <div class="side-in">
                <div>xxx公司</div>
                <div>咨询列表</div>
            </div>
        </el-aside>
        <el-main>
            <div class="main-head"></div>
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
    </el-container>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {getClientList} from '../../api/login.js'
const tableData = ref([])

const getList = async ()=>{
  const res = await getClientList()
  tableData.value = res.data
  console.log(res.data)
}

onMounted(()=>{
  getList()
})
</script>

<style lang="scss" scoped>
.side-in{
    text-align: center;
    padding: 30px 10px 10px 10px;
}
.main-head{
    height: 50px;
    margin-bottom: 20px;
    background-color: pink;
}
</style>