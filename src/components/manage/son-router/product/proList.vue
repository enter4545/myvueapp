<template>
    <div class="proALl">
        <el-button 
        style="margin:20px 20px 20px 60px" type="primary"
        @click="dialogFormVisible = true"
        >新增产品</el-button>
        <el-table :data="tableData" stripe style="width: 100%;overflow: auto;">
            
              <el-table-column prop="name" label="产品名称"  />
              <el-table-column prop="category" label="产品类别"  />
              <el-table-column prop="description" label="产品描述" >
              </el-table-column>
              <el-table-column  label="封面" >
                <template #default="scope">
                  <!-- 这里使用插槽来自定义 "封面" 列的内容 -->
                  <img :src="scope.row.url" alt="封面" style="width: 50px; height: 50px;" />
                </template>
              </el-table-column>

              <!-- <el-table-column prop="date" label="时间"  /> -->
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

        <!-- 新增产品 -->
        <el-dialog v-model="dialogFormVisible" title="新增产品" style="padding:20px;">
          <el-form 
          :model="form" 
          ref='ruleFormRef'
          :rules="rules"
          >
            <el-form-item prop="name" label="产品名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item prop="category" label="产品类别" :label-width="formLabelWidth">
              <el-select v-model="form.category" placeholder="请选择分类">
                <el-option label="大运防撞" value="0" />
                <el-option label="福田防撞" value="1" />
              </el-select>
            </el-form-item>
            <el-form-item prop="description" label="产品描述" :label-width="formLabelWidth">
              <el-input v-model="form.description" autocomplete="off" />
            </el-form-item>
            <el-form-item prop="fileList" label="上传图片" :label-width="formLabelWidth">
              <el-upload
               action="http://127.0.0.1:3007/api/addImages"
                :on-success="handleUploadSuccess"
                :on-remove="handleRemove"
                v-model:file-list="form.fileList"

                list-type="picture"
                name="img"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <!-- {{form.url}} -->
              </el-upload>
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              
              <el-button type="primary" @click="submit(ruleFormRef)">
                确认
              </el-button>
              <!-- <el-button @click="dialogFormVisible = false">取消</el-button> -->
              <el-button @click="resetForm(ruleFormRef)">取消</el-button>
            </span>
          </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import {ref, onMounted} from 'vue'
import {getprolist, addproduct, deleteproduct} from '../../../../api/product'
import {deleteImages} from '../../../../api/images'
import {useRouter} from 'vue-router'
const router = useRouter()

//table数据
const tableData = ref()

// 表单ref
const ruleFormRef = ref()

// 
const formLabelWidth = "140px"

const centerDialogVisible = ref(false)
//表单弹窗
const dialogFormVisible = ref(false)


//form表单内容
const form = ref({
  name: '',
  category:'',
  url:'',
  description:'',
  region: '',
  date: '',
  // date2: '',
  // delivery: false,
  // type: [],
  // resource: '',
  // desc: '',
  // fileList:[]
})

const rules = ({
  name: [
    {required:true, message:'请输入产品名称',trigger:'blur'}
  ],
  category: [
    {required:true, message:'请选择类别',trigger:'change'}
  ],
  description: [
    {required:true, message:'请输入产品名称',trigger:'blur'}
  ],
  fileList: [
    {required:true,type:'array', message:'请选择图片',trigger:'change'},
    // {
    //   type: 'array',
    //   validator: (rule, value, callback) => {
    //     if (value.length === 0) {
    //       callback(new Error('请至少上传一张图片'));
    //     } else {
    //       callback();
    //     }
    //   },
    //   trigger: 'change',
    // },
  ],

})

//上传图片返回的结果
const fileList= ref()

//上传图片
const handleUploadSuccess = (res)=>{
    console.log(res,'上传图片成功')
    fileList.value = res.data
    console.log(fileList.value)
    console.log(form.value, "上传图片")
    form.value.url = res.data.url
}
// 删除图片
const handleRemove = (uploadFile, uploadFiles) => {
  deleteImages(fileList.value.id, fileList.value.filename).then(res=>{
    console.log(res)
  }).catch(err =>{
    console.log(err)
  })
}

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

// 确认删除产品
const open = (id) => {
  console.log(id)
  ElMessageBox.confirm(
    '确定删除这个产品?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      console.log(tableData.value[id].id, '删除成功')
      deleteproduct(tableData.value[id].id).then(res =>{
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
getprolist().then(res => {
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
             tableData.value[i].category = '大运防撞';
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


const handlePreview = (file) => {
  console.log(file)
}

const getTime = ()=>{
  const date = new Date()
  const year = date.getFullYear(); // 获取年份
  const month = date.getMonth() + 1; //获取月份
  const dates = date.getDate();
  const hour = date.getHours()
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return year + '-' + month + '-' + dates + ' ' + hour + ':' + minute + ':' + second
}

// 产品提交
const submit = async (formEl)=>{

  

  addproduct
  
  if(!formEl) return
  await formEl.validate((valid, fields)=>{
    if(valid){
      form.value.date = getTime()
      console.log(form.value.date)
      console.log('submit!',form.value)

      addproduct(form.value).then(res=>{
        console.log(res)
        if(res.data.status == 0){
          //关闭弹窗
          dialogFormVisible.value = false
          //提示成功
             ElMessage({
               type: 'success',
               message: '添加成功'
             })
             //清空表单
             form.value = {
               name: '',
               category:'',
               url:'',
               description:'',
               region: '',
               date: '',
             }
             //清空验证
             formEl.resetFields() 
             //重新获取列表
             getList()            
        }
      }).catch(err=>{
        console.log(err)
      })
      

    }else{
      console.log('error submit!', fields)
    }
  })
  
}

const resetForm = (formEl) => {
  dialogFormVisible.value = false
  if (!formEl) return
  formEl.resetFields()
}

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
        height: calc(100vh - 112px);
        border-top: 1px solid #d4d4d4;
        overflow: auto;
      }
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.el-form{
    text-align: center;
}
</style>