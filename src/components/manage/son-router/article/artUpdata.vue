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
    <el-form-item label="标题" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>

    <el-form-item label="标题" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>

    <el-form-item label="内容" prop="name">
      <editor id="tinymce" v-model="ruleForm.content" :init="init"></editor>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
  <script setup>
  import { ref, onMounted } from "vue";
  import tinymce from "tinymce/tinymce";
  import "tinymce/models/dom"; // 特别注意 tinymce 6.0.0 版本之后必须引入，否则不显示
  import "tinymce/themes/silver/theme";
  import Editor from "@tinymce/tinymce-vue"; // 引入组件
  // 都是富文本插件
  import "tinymce/icons/default";
  import "tinymce/plugins/image";
  import "tinymce/plugins/link";
  import "tinymce/plugins/code";
  import "tinymce/plugins/table";
  import "tinymce/plugins/lists";
  import "tinymce/plugins/wordcount";
  // 以上所有的样式在 node_modules 下面 tinymce 里面的 plugins 都能找到。
  const tinymceHtml = ref("请输入内容");

  const init = {
    //去掉推荐商标
    promotion: false ,
    //初始化数据
    language_url: "/langs/zh-Hans.js", // 引入语言包（该语言包在public下，注意文件名称）
    language: "zh-Hans", // 这里名称根据 zh-Hans.js 里面写的名称而定
    skin_url: "/skins/ui/oxide", // 这里引入的样式
    width: 720,
    height: 300, // 限制高度
    plugins: "link lists image code table wordcount", // 富文本插件
    toolbar:
      "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat",
    branding: false, // //是否禁用“Powered by TinyMCE”
    menubar: true, //顶部菜单栏显示
    // paste_convert_word_fake_lists: false, // 插入word文档需要该属性
    content_css: "/skins/content/default/content.css", //以css文件方式自定义可编辑区域的css样式，css文件需自己创建并引入
    images_upload_handler: (blobInfo,success, failure) => {
            // console.log(blobInfo.blob());
            // 上传图片需要，FormData 格式的文件；
            const formDataUp = new FormData();
           // img  是接口需要的上传的属性名，一般属性名是 file
            formDataUp.append("img", blobInfo.blob());
            // // console.log(formDataUp);
            axios.post("xxxx", formDataUp).then((res) => {
                success("返回的上传图片后的地址");
              });
            }
      };
  onMounted(() => {
    tinymce.init({}); // 初始化富文本
  });
  const tijiao = ()=>{
    console.log(tinymceHtml.value)
  }


  const ruleForm = ref({
  name: "",
  content: ""
  })  
  
  const rules = ref({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ]
})


const submitForm = ()=>{
  console.log(ruleForm.value)
}


  </script>
  <style lang="scss" scoped>
  // .app-container{
  //   background-color: #fff;
  //   height: calc(100vh - 40px);
  // }
  .all{
    background-color: #fff;
    height: calc(100vh - 40px);
    min-height: 556px;
    h3{
      padding: 10px;
      text-align: center;
    }
    .demo-ruleForm {
    box-sizing: border-box;

    padding: 0px 100px;
    width: 800px;
    margin: 0 auto;
  }
  }
  </style>