<template>
    <div>
        <ul v-show="route.meta.showfather !== false">
            <li @click="todetail(item.id)" v-for="item in artList" :key="item.id">
                <div class="newtitle"><h1>{{item.title}}</h1><div>{{item.date}}</div></div>
                <div class="info">{{item.content}}</div>
                <div class="more">
                    <span>了解详情 +</span>
                </div>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script setup>
import {ref, onMounted } from "vue"
import {useRoute} from "vue-router"
import {useRouter} from "vue-router"
import {getArticle} from '../../../api/article'

const artList = ref()

const route = useRoute()
const router = useRouter()
console.log(route)

const matched = route.matched


const SonMsg = ref([])

for( let i=0; i<matched.length; i++){
    SonMsg.value.push(matched[i].name)
    console.log(SonMsg.value)
}

//获取新闻列表
const getArtList = ()=>{
    getArticle(0).then((res)=>{
        console.log(res)
        artList.value = res.data
        for(let i = 0; i < artList.value.length; i++){
            artList.value[i].content = artList.value[i].content.replace(/<[^>]*>/g, '');
            artList.value[i].content = artList.value[i].content.replace(/&nbsp;/g, '');
        }
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

// 跳转路由
const todetail = (id)=>{
    router.push( `/newsDetail/${id}` );
}

const emit = defineEmits(['get-son'])
const send =  ()=>{
    emit('get-son', SonMsg)
}
onMounted(()=>{
    send()
})
onMounted(()=>{
    getArtList()
})
</script>

<style lang="scss" scoped>
ul{
    li{
        border: 1px solid #e1e1e1;
        padding: 30px;
        background-color: #fff;
        margin-bottom: 35px;
        list-style: none;
        // box-shadow: 1px 1px 1px 1px;
        &:hover{
            cursor: pointer;
            box-shadow: 2px 1px 6px -2px;
        }
        &:hover .newtitle h1{
            color: #bd0919;
        }
        &:hover .more span{
            background-color: #bd0919;
            color: #fff;
        }
        .newtitle{
            border-bottom: 1px solid #cbcbcb;
            margin-bottom: 15px;
            overflow: hidden;
            h1{
                color: #565656;
                font-size: 18px;
                float: left;
                padding-bottom: 15px;
            }
            div{
                float: right;
                color: #666;
                font-size: 14px;
            }
        }
        .info{
            font-size: 14px;
            color: #999;
            line-height: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
        .more{
            margin-top: 15px;
            span{
                display: inline-block;
                width: 130px;
                line-height: 33px;
                text-align: center;
                font-size: 14px;
                color: #666;
                border: 1px solid #e1e1e1;
            }
        }
    }
}
</style>