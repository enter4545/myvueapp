<template>
<div class="all">
  <h3>发布文章</h3>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    size="small"
    label-position="top"
    status-icon
  >
    <el-form-item label="标题" prop="title">
      <el-input v-model="ruleForm.title" />
    </el-form-item>

    <!-- <el-form-item label="新闻类别" prop="">
      <el-input v-model="ruleForm.category" />
    </el-form-item> -->
    <el-form-item label="新闻类别" prop="category">
      <el-select v-model="ruleForm.category" placeholder="请选择新闻类别">
        <el-option label="公司新闻" value="0" />
        <el-option label="行业新闻" value="1" />
        <el-option label="技术支持" value="2" />
      </el-select>
    </el-form-item>

    <el-form-item label="内容" prop="content">
      <Fuwenben ref='fuwenben' @get-message='getMessage'></Fuwenben>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        添加
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>

</div>
</template>
  <script setup>
  import { ref, onMounted } from "vue";
  import Fuwenben from '../../components/fuwenben.vue'

  import {addArticle} from '../../../../api/article.js'
import { ElMessage } from "element-plus";

const ruleFormRef =ref()

const fuwenben = ref(null)

  const tijiao = ()=>{
    console.log(tinymceHtml.value)
  }
  //清空富文本
  const clear = ref(true)

  const ruleForm = ref({
  title: "",
  category: "",
  content: "",
  date: ''
  })  
  
  const rules = ref({
  title: [
    { required: true, message: '请填写文章标题', trigger: 'blur' },
    // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  category: [
  { required: true, message: '请选择文章类别', trigger: 'change' },
  ]
})

const getTime = ()=>{
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() +1
  const dates = date.getDate()
  const arr = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
  const day = date.getDay()
  const hour = date.getHours()
  const minute = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
  const second = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
  // 带星期几
  // return year + ' ' + month + ' ' + dates + ' ' + arr[day] + ' ' + hour + ':' + minute + ':' + second
  // 不带周几
  return year + '-' + month + '-' + dates + ' ' + hour + ':' + minute + ':' + second
}

//提交验证
const submitForm = async (formEl)=>{
  console.log(formEl)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
  ruleForm.value.date = getTime()
  addArticle(ruleForm.value).then(res=>{
    console.log(res.data)
    if(res.data.status === 0){
      // 设置所有属性为 ''
      Object.keys(ruleForm.value).forEach(key => {
        ruleForm.value[key] = '';
      });
      console.log(fuwenben.value)
      if(fuwenben.value){
        fuwenben.value.clear()
      }
      ElMessage({
        type: "success",
        message: '添加成功'
      })
    }
  })
  console.log(ruleForm.value)
}

//重置
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}


const getMessage = (msg)=>{
  ruleForm.value.content = msg.value
  console.log(ruleForm.value.content)
}

  </script>
  <style lang="scss" scoped>
  // .app-container{
  //   background-color: #fff;
  //   height: calc(100vh - 40px);
  // }
  .all{
    // background-color: #fff;
    height: calc(100vh - 40px);
    min-height: 556px;
    h3{
      padding: 10px;
      text-align: center;
    }
    .demo-ruleForm {
    box-sizing: border-box;

    padding: 0px 100px 30px 100px;
    width: 800px;
    margin: 0 auto;
  }
  }
  </style>