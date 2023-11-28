<template>
    <div class="login" >
        <div class="title">用户登录</div>
       <el-form
         ref="ruleFormRef"
         :model="ruleForm"
         :rules="rules"
         label-width="120px"
         class="demo-ruleForm"
         size="large"
         status-icon
       >
         <el-form-item label="用户名" prop="username">
           <el-input  v-model="ruleForm.username"  placeholder="请输入用户名" />
         </el-form-item>
         
         <el-form-item label="密码" prop="password">
           <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" />
         </el-form-item>

         <el-form-item label-width="152px" style="padding:10px;">
           <el-button type="primary" @click="submitForm(ruleFormRef)">
             登录
           </el-button>
           <el-button @click="resetForm(ruleFormRef)">重置</el-button>
         </el-form-item>
       </el-form>
    </div>
</template>

<script  setup>
import { reactive, ref } from 'vue'
const ruleFormRef = ref();
import {login} from '../../api/login'
import { ElMessage } from 'element-plus'
import {useRouter} from 'vue-router'


const router = useRouter()

const ruleForm = ref({
    username:'',
    password: ''
})

const rules = {
    username:[
        {required:true,message:'请输入用户名'}
    ],
    password:[
        {required:true,message:'请输入密码'}
    ],
}

const submitForm = async (formEl)=>{
    if(!formEl)return
    //进行本地表单验证
    await formEl.validate((valid, fields)=>{
        if(valid){
            console.log(ruleForm.value)
        }else{
            console.log('error,submit!', fields)
        }
    })
    //请求后台登录接口，并传递参数
    await login(ruleForm.value).then((res, req)=>{
        console.log(res, "响应内容")
        //将接收的token保存在本地
        localStorage.setItem('token',res.data.token)
        // 跳转后台
        if(res.data.status == 0){
            router.push('/manage')
        }else{
            ElMessage.error(res.data)
        }
    }).catch(err =>{
        //验证账户密码错误
        ElMessage.error('请求失败')
    })
    
}

const resetForm = (formEle)=>{
    console.log(formEle)
    if(!formEle) return
    formEle.resetFields()
}

</script>


<style lang="scss" scoped>
.login{
    width: 460px;
    height: 300px;
    // background-color: pink;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:  translateX(-50%) translateY(-50%);
    box-shadow: 1px 1px 9px -2px;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    .title{
        padding: 20px 0;
        font-size: 30px;
    }
    .el-input{
        width: 300px;
    }
}
</style>