<template>
    <div>
        
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