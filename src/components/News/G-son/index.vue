<template>
    <div class="detail" v-if="detail">
        <h1>{{detail.title}}</h1>
        <div class="date"> {{detail.date}}</div>
        <div v-html="detail.content"></div>
    </div>
</template>

<script setup>
import { roleTypes } from 'element-plus'
import { onMounted, ref, computed, onBeforeMount,watch } from 'vue'
import {useRoute} from 'vue-router'
import {getDetail} from '../../../api/article'

const route = useRoute()
console.log(route.params.id, "新闻详情")

const detail = ref()

const getdetail = (id)=>{
    console.log("faqi")
    getDetail(id).then((res)=>{
        console.log(res)
        detail.value = res.data[0]
        detail.value.content = detail.value.content.replace(/<img/g, "<img style='max-width:80%;height:auto;display:block;margin:20px auto;'");
        console.log(detail.value)
    })
}
// 使用 watch 监听路由参数的变化
watch(
  () => route.params.id,
  (newId, oldId) => {
    // 在路由参数变化时重新获取数据
    getdetail(newId);
  }
);

// vm.obj.NewsContent = vm.obj.NewsContent.replace(/<img/g, "<img style='max-width:100%;height:auto;'");

console.log(route)

onMounted(()=>{
    console.log('页面加载完成')
    getdetail(route.params.id)
})

</script>

<style lang="scss" scoped>
.detail{
    h1{
        font-size: 20px;
        color: #363636;
        font-weight: bold;
        padding: 20px 0px;
    }
    .date{
        font-size: 14px;
        font-family: Arial;
        color: #9e9e9e;
        line-height: 35px;
        border-bottom: 1px dashed #cfcfcf;
        margin-bottom: 20px;
    }
}
</style>