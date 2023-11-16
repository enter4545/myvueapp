<template>
<div class="liuyan" @click="toliuyan"></div>
</template>

<script setup>
import {useRouter} from "vue-router"

const router = useRouter()

const toliuyan = ()=>{
    router.push('/liuyan')
}
</script>

<style lang="scss" scoped>
        .liuyan{
            width: 305px;
            height: 106px;
            background-image: url("../../assets/images/liu.png");
            cursor: pointer;
        }
</style>