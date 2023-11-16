<template>
    <div>
        <div class="gongsi">xxxxx汽车销售服务有限公司</div>
                <br>
                <p>电话：xxx888888888</p>
                <p>公司邮箱：xxxxxxxxxx@xxx.com</p>
                <p>网址：www.xxxxxx.com</p>
                <p>公司地址：xxxxxxxx路16号1栋1022房</p>
    </div>
</template>

<script setup>
import { onMounted, ref} from "vue"
import {useRoute} from "vue-router"
const route = useRoute()
const routes = route.matched
const routeName = ref([])
for(let i = 0; i < routes.length; i++){
    const name = routes[i].name
    console.log(name)
    routeName.value.push(name)
    console.log(routeName.value)
    // console.log(routeName.value)
}

const emit = defineEmits(['get-message','get-son'])

const sendMsg = ()=>{
    emit('get-message', routeName)
    emit('get-son', routeName)
}
onMounted(()=>{
    sendMsg()
})
</script>

<style lang="scss" scoped>

</style>