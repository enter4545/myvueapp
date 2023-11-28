<!-- <template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template> -->
<template>
  <div>
    <!-- <div>
      <button @click="insertText">insert text</button>
      <button @click="printHtml">print html</button>
      <button @click="disable">disable</button>
    </div> -->
    <div style="border: 1px solid #ccc; margin-top: 10px">
      <Toolbar
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        style="border-bottom: 1px solid #ccc"
      />
      <Editor
        :defaultConfig="editorConfig"

        v-model="valueHtml"
        style="height: 400px; overflow-y: hidden"
        @onCreated="handleCreated"
        @onChange="handleChange"
      />
    </div>
    <!-- <div style="margin-top: 10px">
      <textarea
        v-model="valueHtml"
        readonly
        style="width: 100%; height: 200px; outline: none"
      ></textarea>
    </div> -->
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const clear = ()=>{
  valueHtml.value = ''
  console.log('清除')
}


// export default {
  // components: { Editor, Toolbar },
  // setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('')

    // 模拟 ajax 异步获取内容
    // onMounted(() => {
    //     setTimeout(() => {
    //         valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    //     }, 1500)
    // })

    const toolbarConfig = {}
    //编辑器配置
    // const editorConfig = {
    //   MENU_CONF: {
    //     // 其他菜单配置...
    //     'insertImage': {
    //       onInsertedImage(imageNode) {
    //         if (imageNode == null) return
    //         const { src, alt, url, href } = imageNode
    //         console.log('插入的图片', src, alt, url, href)
    //       },
    //       checkImage: customCheckImageFn,
    //       parseImageSrc: customParseImageSrc,
    //     },
    //     // 其他菜单配置...
    //   },
    //    placeholder: '请输入内容...' 
    //   }
    const editorConfig = {
    placeholder: '请输入内容...',
    MENU_CONF: {
      uploadImage: {
        //上传图片配置
        server: 'http://127.0.0.1:3007/api/addImages', //上传接口地址
        fieldName: 'img', //上传文件名
        methods: 'post',
        metaWithUrl: true, // 参数拼接到 url 上
        // 单个文件上传成功之后
        onSuccess(file, res) {
          console.log(`${file.name} 上传成功`, res);
          console.log('111')
        },
        // 自定义插入图片
        customInsert(res, insertFn) {
          console.log(res,'222');
          insertFn('http://127.0.0.1:3007' + res.data.url);
          // insertFn('https://pic.imgdb.cn/item/654dd0a0c458853aef6a88ed.jpg')
          console.log('http://127.0.0.1:3007' + res.data.url)
        },
      },
    },
  };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
      console.log(editor)
    }

    // 自定义校验图片
// function customCheckImageFn(src: string, alt: string, url: string): boolean | undefined | string { // TS 语法
function customCheckImageFn(src, alt, url) {                                                    // JS 语法
    if (!src) {
        return
    }
    if (src.indexOf('http') !== 0) {
        return '图片网址必须以 http/https 开头'
    }
    return true

    // 返回值有三种选择：
    // 1. 返回 true ，说明检查通过，编辑器将正常插入图片
    // 2. 返回一个字符串，说明检查未通过，编辑器会阻止插入。会 alert 出错误信息（即返回的字符串）
    // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止插入。但不会提示任何信息
}

// 转换图片链接
// function customParseImageSrc(src: string): string {  // TS 语法
function customParseImageSrc(src) {               // JS 语法
    if (src.indexOf('http') !== 0) {
        return `http://${src}`
    }
    return src
}

// 插入图片
editorConfig.MENU_CONF['insertImage'] = {
    // onInsertedImage(imageNode: ImageElement | null) {  // TS 语法
    onInsertedImage(imageNode) {                    // JS 语法
        if (imageNode == null) return

        const { src, alt, url, href } = imageNode
        console.log('inserted image', src, alt, url, href)
    },
    checkImage: customCheckImageFn, // 也支持 async 函数
    parseImageSrc: customParseImageSrc, // 也支持 async 函数
}
// 编辑图片
editorConfig.MENU_CONF['editImage'] = {
    // onUpdatedImage(imageNode: ImageElement | null) {  // TS 语法
    onUpdatedImage(imageNode) {                    // JS 语法
        if (imageNode == null) return

        const { src, alt, url } = imageNode
        console.log('updated image', src, alt, url)
    },
    checkImage: customCheckImageFn, // 也支持 async 函数
    parseImageSrc: customParseImageSrc, // 也支持 async 函数
}

// editorConfig.MENU_CONF['uploadImage'] = {

//     server: 'http://127.0.0.1:3007/api/articleAdd',
//     // form-data fieldName ，默认值 'wangeditor-uploaded-image'
//     fieldName: 'img',

//     // 单个文件的最大体积限制，默认为 2M
//     maxFileSize: 1 * 1024 * 1024, // 1M

//     // 最多可上传几个文件，默认为 100
//     maxNumberOfFiles: 10,

//     // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
//     allowedFileTypes: ['image/*'],

//     // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
//     meta: {
//         token: 'xxx',
//         otherKey: 'yyy'
//     },

//     // 将 meta 拼接到 url 参数中，默认 false
//     metaWithUrl: false,

//     // 自定义增加 http  header
//     headers: {
//         Accept: 'text/x-json',
//         otherKey: 'xxx'
//     },

//     // 跨域是否传递 cookie ，默认为 false
//     withCredentials: true,

//     // 超时时间，默认为 10 秒
//     timeout: 5 * 1000, // 5 秒
//     // 上传之前触发
//     // onBeforeUpload(file: File) { // TS 语法
//     onBeforeUpload(file) {    // JS 语法
//         // file 选中的文件，格式如 { key: file }
//         return file

//         // 可以 return
//         // 1. return file 或者 new 一个 file ，接下来将上传
//         // 2. return false ，不上传这个 file
//     },

//     // 上传进度的回调函数
//     // onProgress(progress: number) {  // TS 语法
//     onProgress(progress) {       // JS 语法
//         // progress 是 0-100 的数字
//         console.log('progress', progress)
//     },

//     // 单个文件上传成功之后
//     // onSuccess(file: File, res: any) {  // TS 语法
//     onSuccess(file, res) {          // JS 语法
//         console.log(`${file.name} 上传成功`, res)
//     },

//     // 单个文件上传失败
//     // onFailed(file: File, res: any) {   // TS 语法
//     onFailed(file, res) {           // JS 语法
//         console.log(`${file.name} 上传失败`, res)
//     },

//     // 上传错误，或者触发 timeout 超时
//     // onError(file: File, err: any, res: any) {  // TS 语法
//     onError(file, err, res) {               // JS 语法
//         console.log(`${file.name} 上传出错`, err, res)
//     },

// }

// const emits = defineEmits(['get-message'])
// const send  = ()=>{
//   emits('get-message', valueHtml)
// }

// onMounted(()=>{})
const emit = defineEmits(['get-message'])
const sendMessage = ()=>{
  emit('get-message', valueHtml)

}

const handleChange = ()=>{
  sendMessage()
}
defineExpose({clear})

</script>    