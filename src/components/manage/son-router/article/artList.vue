<template>
    <div>
        <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="title" label="标题"  />
              <el-table-column prop="category" label="类别"  />
              <!-- <el-table-column prop="content" label="内容"  /> -->
              <el-table-column prop="date" label="时间"  />
              <el-table-column fixed="right" label="操作" width="150">
                <template #default="scope">
                 <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                   >Edit</el-button
                 > -->
                 <el-button
                   size="small"
                   type="danger"
                   @click="open(scope.$index)"
                   >删除</el-button
                 >
                </template>
              </el-table-column>
        </el-table>
        <el-dialog
          v-model="centerDialogVisible"
          width="30%"
          title="确认删除吗"
          align-center
        >
          <span>确认删除？</span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取消</el-button>
              <el-button type="primary" @click="centerDialogVisible = false">
                确认
              </el-button>
            </span>
          </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import {ref, onMounted} from 'vue'
import {getArticle, deleteArticle} from '../../../../api/article'
import {useRouter} from 'vue-router'
const router = useRouter()
const tableData = ref()

const centerDialogVisible = ref(false)

const deleteRow = (index) => {
  console.log(index)
  // tableData.value.splice(index, 1)

}

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

// 确认删除新闻
const open = (id) => {
  ElMessageBox.confirm(
    '确定删除这条新闻吗?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      console.log(tableData.value[id].id, '删除成功')
      deleteArticle(tableData.value[id].id).then(res =>{
        console.log(res.data.status)
        if(res.data.status == 0){
          ElMessage({
            type: 'success',
            message: '删除成功',
          });
          getList()
        }else{
          ElMessage({
            type: 'error',
            message: '删除失败，稍后再试',
          });
        }
      })

    })
    .catch(() => {
      // ElMessage({
      //   type: 'info',
      //   message: 'Delete canceled',
      // });
    });
};

const getList =  ()=>{
//   const token = localStorage.getItem('token')
//   const headers = {
//       "Authorization": `Bearer ${token}`
//   }
//   console.log("faqi")
  getArticle().then(res => {
      tableData.value = res.data
      console.log(res)
      // 遍历数组中的每个元素
       for (let i = 0; i < tableData.value.length; i++) {
         // 检查元素是否存在以及是否具有category属性
         if (tableData.value[i] && tableData.value[i].category !== undefined) {
           // 使用条件语句进行替换
           console.log(tableData.value[i].category)
           switch (tableData.value[i].category) {
             case 0:
             tableData.value[i].category = '公司新闻';
               break;
             case 1:
             tableData.value[i].category = '行业新闻';
               break;
             case 2:
             tableData.value[i].category = '技术支持';
               break;
             // 可以添加更多的情况来处理其他可能的值
             default:
               // 如果category的值不是0、1或2，保持原样或进行其他处理
               break;
           }
         }
       }

   }).catch(err =>{
      console.log(err)
   })


}

onMounted(()=>{
  getList()
  console.log('发起请求')
})
</script>

<style lang="scss" scoped>

::v-deep .el-overlay{
  background-color: transparent;
}
.dialog-footer button:first-child {
  margin-right: 20px;
}
      .el-table{
        padding: 10px;
        height: calc(100vh - 40px);
      }
</style>