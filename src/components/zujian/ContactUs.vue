<template>
    <div class="box" >
        <div class="title">联系我们<span>/ Contact Us</span></div>
        <div class="nav">
            <div class="gongsi">广东鸿运通汽车销售服务有限公司</div>
            <div class="nav-1">电话： xx88888888888</div>
            <div class="nav-1">电话： xx88888888888</div>
            <div class="nav-1">邮箱： xx88888888888</div>
            <div>网址： 8888@mail.com</div>
        </div>
    </div>
</template>

<script setup>
const dianji = ()=>{
    console.log("dian")
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
                div{
                    height: 44px;
                    padding-left: 20px;
                    line-height: 44px;
                    font-size: #2f2f2f;
                    font-size: 14px;
                }
                .gongsi{
                    font-size: 16px;
                    color: #000;
                    font-weight: bold;
                    border-bottom: 1px solid #eeeeee;
                }
                .nav-1{

                    border-bottom: 1px solid #eeeeee;

                }
            }
        }
</style>