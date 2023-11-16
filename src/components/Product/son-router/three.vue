<template>
    <div>
        <ul>
            <li v-for="(item,index) in ( isMobile ? activeList() : showList)" :key="index">
                <div class="image">
                    <img :src="item.imgUrl" alt="">
                </div>
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, ref, computed} from "vue"
import {useRoute} from "vue-router"
const route = useRoute()
const routes = route.matched

const isMobile = ref(false)
const routePath = ref([])

const showList = ref([
    {title:'xxx防撞车', imgUrl:'https://pic.imgdb.cn/item/654d82e1c458853aef9dd616.png'},
    {title:'xxx防撞车', imgUrl:'https://pic.imgdb.cn/item/654d82e1c458853aef9dd616.png'},
    {title:'xxx防撞车', imgUrl:'https://pic.imgdb.cn/item/654d82e1c458853aef9dd616.png'},
    {title:'xxx防撞车', imgUrl:'https://pic.imgdb.cn/item/654d82e1c458853aef9dd616.png'},

    {title:'x防撞车', imgUrl:'https://pic.imgdb.cn/item/654d835ac458853aef9f4520.png'},
])
// 每页显示数量
const itemsPerPage = ref(8)
// 当前页数
const currentPage = ref(1)

// 筛选出需要显示的数组
const activeList = ()=>{
    // 开始的下标
    const startIndex = (currentPage.value - 1 ) * itemsPerPage.value
    // 结束的下标
    const endIndex = startIndex + itemsPerPage.value
    //返回一个数组
    return showList.value.slice(startIndex, endIndex)
}
// 计算需要显示的总页数
const totalPages = computed(() => Math.ceil(showList.value.length / itemsPerPage.value));

// 上一页事件
const prev = ()=>{
    if(currentPage.value > 1){
        currentPage.value -= 1
    }
}
// 下一页事件
const next = ()=>{
    if(currentPage.value < totalPages.value){
        currentPage.value += 1
    }
}
//跳转到某一页
const topage = (i)=>{
    currentPage.value = i
    console.log(i)
}

for(let i = 0; i < routes.length; i++){
    const name = routes[i].name
    routePath.value.push(name)
}

const emit = defineEmits(['get-message','get-son'])

const sendMsg = ()=>{
    emit('get-message', routePath)
    emit('get-son', routePath)
    console.log('发出')
}

onMounted(()=>{
    isMobile.value = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
})

onMounted(()=>{
    sendMsg()
    console.log('子组件加载了')
})
</script>

<style lang="scss" scoped>
ul{
    width: 100%;
    display: flex;
    // justify-content: space-around;
    justify-content: left;
    flex-wrap: wrap;
    li{
        width: 29%;
        height: 226px;
        border: 1px solid #EEE;
        margin-bottom: 20px;
        list-style: none;
        margin: 7px;
        padding: 10px 10px 0px 10px;
        &:hover{
            border-color: #bd0919;
        }
        &:hover img{
            transform: scale(1.3);
        }
        .image{
            width: 242px;
            height: 181.5px;
            overflow: hidden;
            img{
             width: 242px;
             height: 181.5px;
             transition: all .8s ease;
            }
        }
        p{
            line-height: 45px;
            text-align: center;
            font-size: 14px;
            color: #5a5a5a;
            font-weight: bold;
            letter-spacing: 1px;

        }
    }
    @media screen and (max-width: 820px) {   
            width: 100%;
            display: flex;
            // justify-content: space-around;
            justify-content: center;
            flex-wrap: wrap;

          li{
              border: none;
              width: 46%;
              overflow: hidden;
              padding: 0;
              .image{
                  width: 100%;
                  img{
                      width: 100%;
                  }
              }
          }
}
}
.page{
    text-align: center;
    display: flex;
    justify-content: center;
    height: 2rem;
    margin-bottom: 1rem;
    span{
        border: 1px solid #999;
        border-radius: 3px;
        margin-right:4px;
        padding:3px 1rem;
    }
    .cur{
        color: red;
    }
}
</style>