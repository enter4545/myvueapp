<template>
    <div>
        <ul>
            <li>
                <div class="image">
                    <img src="../../../assets/images/li.jpg" alt="">
                </div>
                <h3>xxx施工现场</h3>
            </li>
            <li>
                <div class="image">
                    <img src="../../../assets/images/li.jpg" alt="">
                </div>
                <h3>xxx施工现场</h3>
            </li>
            <li>
                <div class="image">
                    <img src="../../../assets/images/li.jpg" alt="">
                </div>
                <h3>xxx施工现场</h3>
            </li>
            <li>
                <div class="image">
                    <img src="../../../assets/images/li.jpg" alt="">
                </div>
                <h3>xxx施工现场</h3>
            </li>
            <li>
                <div class="image">
                    <img src="../../../assets/images/li.jpg" alt="">
                </div>
                <h3>xxx施工现场</h3>
            </li>

        </ul>
    </div>
</template>

<script setup>
import {ref, onMounted} from "vue"
import {useRoute} from "vue-router"
const route = useRoute()

const match = route.matched
const SonMsg = ref([])
for(let i=0; i<match.length; i++){
    SonMsg.value.push(match[i].name)
}

const emit = defineEmits(['getSon'])
const send = ()=>{
    emit('getSon', SonMsg)
}
onMounted(()=>{
    send()
})
</script>

<style lang="scss" scoped>
ul{
    display: flex;
    flex-wrap: wrap;
    li{
        width: 31.333%;
        margin: 0 1% 10px 1%;
        list-style: none;
        overflow: hidden;
        &:hover .image img{
            transform: scale(1.3);
        }
        &:hover h3{
            color: #bd0919;
        }
        .image{
            width: 100%;
            overflow: hidden;
            height: 170px;
            img{
                height: 170px;
                width: 100%;
                transition: all .8s ease;
            }
        }
        h3{
            text-align: center;
            color: #5a5a5a;
            line-height: 1.6;
            font-size: 14px;
            font-weight: bold;
            padding: 12px 0;
        }
    }
}
@media screen and (max-width: 820px) {
    ul{
        justify-content: space-around;
        li{
            width: 46%;
        }
    }
} 
</style>