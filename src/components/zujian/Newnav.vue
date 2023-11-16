<template>
    <div class="box">
        <div class="title">新闻资讯<span>/ news</span></div>
        <div class="nav">
            <ul>
                <li><span>+</span> 防撞缓冲车什么牌子好？</li>
                <li><span>+</span> 防撞缓冲车什么牌子好？</li>
                <li><span>+</span> 防撞缓冲车什么牌子好？</li>
                <li><span>+</span> 防撞缓冲车什么牌子好？</li>
                <li><span>+</span> 防撞缓冲车什么牌子好？</li>
                <li><span>+</span> 防撞缓冲车什么牌子好？</li>
            </ul>
        </div>
    </div>
</template>

<script setup>

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
                    padding: 10px 0;
                    li{
                        padding: 7px 14px;
                        color: #5a5a5a;
                        list-style: none;
                        font-size: 14px;
                        line-height: 20px;
                        height: 20px;
                        &:hover{
                            cursor: pointer;
                            color: #bd0919;
                        }
                        span{
                            display: inline-block;
                            // background-color: pink;
                            font-weight: bold;
                            font-size: 17px;
                            margin-bottom: 1px;
                            vertical-align: top;
                            line-height: 16px;
                        }
                    }
                }
            }
        }
</style>