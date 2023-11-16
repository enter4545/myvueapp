<template>
    <div>
        <div class="video"></div>
                <h1>xxxxx汽车销售服务有限公司位于广东省广州市，长期致力于全国各地区工程类汽车销售行业，是一家专业的汽车销售公司。旗下合作的汽车包括:北汽福田、东风、勇士等。现在国家对高危行业人员安全更加重视，其中高速施工、路桥养护等作业要求配备防撞保护措施，我司看到了防撞设施的市场，近几年和大运、福田、五十铃、江铃等合作推出防撞车系列防撞设施</h1>
                <h1>公司始终坚持“以客户为中心、以服务为导向、以安全为基础〃的服务宗旨,公司以“专注机械设备升级改装，用心服务客户"为中心价值，希望经过我们的专业服务和不懈努力，为用户解决问题。广东鸿运通不断秉承以用户需求为中心，为超一百家大中小企业提供专业的防撞緩冲车销售与租赁，用心的服务博得了众多企业的信任和好评，逐步树立起公司皂好的口碑。公司不仅提供专业的防撞緩冲车销售与租赁、桥梁检测车租赁服务，同时还建立了完善的售后服务体系，为用户施工中谒到的困难提供协助。为全国广大检测单位、施工单位、维修养护单位，提供专业、快捷、经济的操作台。公司秉成“诚信合作、长远合作、一次客户、终身朋友”的理念与多家公司合作，实现了共嬴。“安全化、标准化、责任化、制度化、服务化”的管理，为您提供：安全、优价、稳健的租赁服务。公司期待与各各界朋友合作，为祖国的交通建设事业而不懈奋斗。

</h1>
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
        .video{
            width: 70%;
            height: 498px;
            margin: 10px auto;
            background-color: pink;
        }
        h1{
            color: #666;
            text-indent: 2em;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }
</style>