<template>
    <div>
         <el-form :model="form" label-width="120px" :rules='rules' ref="ruleFormRef" status-icon>
             <el-form-item label="产品名称:" class="my-lable">
               <el-input  v-model="form.product" placeholder="请输入您需要询价的产品名称" />
             </el-form-item>
             <el-form-item label="联系人:"  prop="name" >
               <el-input v-model="form.name" placeholder="请输入您的姓名"/>
             </el-form-item>
             <el-form-item label="电话:"  prop="tel"   >
               <el-input v-model="form.tel" placeholder="请输入您的联系方式"/>
             </el-form-item>
             <el-form-item label="邮箱:">
               <el-input v-model="form.email" placeholder="请输入您的邮箱地址"/>
             </el-form-item>
             <el-form-item label="地址:">
               <el-input v-model="form.address" placeholder="请输入您的地址"/>
             </el-form-item>
             <el-form-item class="custom-textarea" label="留言内容:">
               <el-input :rows="5" style="width: 550px" resize="none" v-model="form.liuyan" type="textarea" placeholder="请输入您的留言内容"/>
             </el-form-item>
             <el-form-item style="margin-top:30px;">
               <el-button style="width: 116px;height: 34px;background-color:#337ab7;border-color: #2e6da4;color: #fff;" type="primary" @click="onSubmit(ruleFormRef)">提交</el-button>
               <el-button style="width: 116px;height: 34px;background-color: #d9534f;border-color: #d43f3a;color: #fff;" @click="resetForm(ruleFormRef)">重置</el-button>
             </el-form-item>
         </el-form>
    </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
import {ElMessage} from 'element-plus'
import {postClients} from '../../../api/login.js'

const ruleFormRef = ref()

const form = ref({
    product: '',
    name: '',
    tel: '',
    email: '',
    adress: '',
    liuyan: '',
    date:''
})

const rules = ref({
  name:[
    {required:true,message:'请输入您的姓名'}
  ],
  tel: [
    {required:true,message:'请输入您的联系方式'},
    { pattern: /^1[3456789]\d{9}$/, message: '请输入有效的电话号码' }
  ]
})

const onSubmit = async (formEl)=>{
  console.log(formEl)
  console.log(form.value)
    if(!formEl) return
    await formEl.validate((valid, fields)=>{
      if(valid){
        console.log(form.value ,getTime())
        console.log("submit")

        form.value.date = getTime()
        postClients(form.value)
        formEl.resetFields()
        form.value = {
          product: '',
          name: '',
          tel: '',
          email: '',
          adress: '',
          liuyan: ''
       }

        ElMessage({
            message: '提交成功',
            type: 'success',
        })

      }else{
        console.log('error submit', fields)
      }
    })  
}



const getTime = ()=>{
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
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

console.log(getTime())


const resetForm = (formEl)=>{
  if(!formEl) return
  formEl.resetFields()
  form.value = {
          product: '',
          name: '',
          tel: '',
          email: '',
          adress: '',
          liuyan: ''
      }
}

</script>

<style lang="scss" scoped>
.el-input{
    width: 550px;
    color: red;
}
::v-deep .el-form-item__label {
    color: red;
    font-size: 14px;
    font-weight: 600;
    color: #666;
    padding-right: 30px;
}


.my-label .el-form-item__label {
    color: red;
}
</style>