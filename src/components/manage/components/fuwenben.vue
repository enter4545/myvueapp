<template>
    <div class="app-container">
      <h1>tinymce</h1>
      <editor id="tinymce" v-model="tinymceHtml" :init="init"></editor>
      <div v-html="tinymceHtml"></div>
    </div>
    <div  @click="tijiao">提交</div>
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
  </script>