<template>
    <div class="box">
        <div class="title">热门关键词<span>/ news</span></div>
        <div class="nav">
            <ul>
                <li @click="dianji">xxx防撞车</li>
                <li>xxx防撞车</li>
                <li>xxx防撞车</li>
                <li>xxx防撞车</li>
                <li>xxx防撞车</li>
                <li>xxx防撞车</li>
                <li>xxx防撞车</li>
                <li>xxx防撞车</li>
                <li>xxx防撞车</li>
                <li>xxx防撞车</li>
                <li>xxx防撞车</li>
                <li>xxx防撞车</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const dianji = ()=>{
    console.log("dianji")
}
</script>

<style lang="scss" scoped>
        .box{
            .title{
                font-size: 20px;
                color: #fff;
                line-height: 30px;
                font-weight: bold;
                background-color: #bd0919;
                padding: 10px 20px;
                span{
                    font-size: 16px;
                    color: #fff;
                    opacity: 0.6;
                    margin-left: 10px;
                    text-transform: capitalize;
                }
            }
            .nav{
                // height: 105px;
                border: 1px solid #d2d2d2;
                ul{
                    box-sizing: border-box;
                    margin: 20px 7px 8px 7px;
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    li{
                        list-style: none;
                        flex-wrap: wrap;
                        text-align: center;
                        font-size: 14px;
                        color: #5a5a5a;
                        border: 1px dashed #f1f1f1;
                        width: 129px;
                        height: 42px;
                        margin-bottom: 14px;
                        line-height: 42px;
                        &:hover{
                            cursor: pointer;
                            color: #bd0919;
                            border-color: #bd0919;
                        }
                    }
                }
            }
        }
</style>