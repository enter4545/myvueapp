<script setup>
import {onMounted, ref} from "vue"
import {getImages, deleteImages} from '../../../../api/images'


const getImagesList = ()=>{
    getImages().then(res=>{
        fileList.value = res.data
        console.log(fileList)
    }).catch(err =>{
        console.log(err)
    })
}

onMounted(()=>{
    getImagesList()
})

//图片列表数据
const fileList = ref()

const dayin = ()=>{
    console.log(fileList.value)
}

// 删除图片
const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
  console.log(uploadFile.id, uploadFiles)

  deleteImages(uploadFile.id, uploadFile.filename).then(res=>{
    console.log(res)
  }).catch(err =>{
    console.log(err)
  })
}

const handlePreview = (file) => {
  console.log(file)
}

</script>


<template>
    <div class="imgContainer">
      <!-- v-model:file-list="fileList" -->
        <el-upload
           v-model:file-list="fileList"
           class="upload-demo"
           action="http://127.0.0.1:3007/api/addImages"
           :on-preview="handlePreview"
           :on-remove="handleRemove"
           list-type="picture"
           name="img"
           :on-success="getImagesList"
         >
           <el-button type="primary">Click to upload</el-button>
           <template #tip>
             <div class="el-upload__tip">
               jpg/png files with a size less than 500kb
             </div>
           </template>
         </el-upload>
    </div>
    
</template>



<style lang="scss" scoped>
.imgContainer{
    box-sizing: border-box;
    height: calc(100vh - 40px);
    // min-height: 556px;
    overflow: hidden;
    padding: 20px;
    // background-color: pink;
    ::v-deep .el-upload-list{
        overflow: auto;
        height: calc(100vh - 40px - 100.5px);
        padding: 10px;
    }
    .el-upload-list--picture{
        background-color: pink;
    }
}

</style>