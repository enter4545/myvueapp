<template>
    <div class="p-wel" v-if="!isMobile">
        <div class="carousel">
    <el-carousel trigger="click" arrow="always" height="74vh">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
        </div>
        <div class="group1 auto">
           <div class="search-group inner">
               <div class="search1" >热门关键词:</div>
               <div class="search2">
                  <span>防撞车</span><span>防撞缓冲车</span><span>高速防撞缓冲车</span>
               </div>
               <div class="search3">
                    <input @focus="clear" @blur="put" type="text" :placeholder="placeholder"><p></p>
               </div>
           </div>
           <div class="g1-content inner">
             <div class="con-left">
                <p class="title">Product recommendation</p>
                <p class="tuijian"><span class="tuijian1">推荐</span><span> · 防撞缓冲车</span></p>
                <!-- <p></p> -->
                <p class="text">本公司专注于全国各地区高速防撞缓冲车销售与服务一体化，我们有福田单双排、大运、五十铃单双排、江铃单双排、日产皮卡等多种型号配置的防撞缓冲车。</p>
                <p class="gengduo" @click="goRouter('product')" ><span>查看更多</span><span class="arrow"></span></p>
             </div>
             <div class="con-right">
                <div class="animate">
                  <ul class="ani-1">
                  <li v-for="(item, i) in 12" :key="i">
                    <div class="an-image">
                        <img src="../../assets/images/li.jpg" alt="">
                    </div>
                    <div class="an-text">
                        <p>安全防撞缓冲</p>
                        <h2>安全防撞缓冲垫 主要应用于道路养护施工作业的安全防护，车辆停放在临时封闭的施工作业区域后方，通过防撞缓冲垫吸收</h2>
                    </div>
                  </li>
                  </ul>
                </div>
             </div>
           </div>
        </div>
        <div class="group2 auto">
            <div class="group-in inner">
              <div class="g2-left">
                <p class="l-title">PRODUCT CENTER</p>
                <p class="cate">防撞车品牌分类</p>
                <ul class="g2-list">
                    <li v-for="item in 9" :key="item">
                        <div class="list-image">
                            <img src="../../assets/images/20201126084915_690.jpg" alt="">
                        </div>
                        <div>
                            xxx防撞车
                        </div>
                    </li>
                </ul>
                <p class="xiaoshou">xxx汽车销售服务</p>
                <p class=" dianhua">服务热线：88888888888</p>
              </div>
              <div class="g2-right">
                <ul>
                    <li v-for="item in 9" :key="item">
                        <div class="r-list">
                            <img src="../../assets//images/li.jpg" alt="">
                        </div>
                        <p>xxx工具车</p>
                    </li>
                </ul>
              </div>
            </div>
        </div>
        <div class="group3 auto">
            <div class="group3-in inner">
                <p class="g3-title">Construction cases</p>
                <p class="g3-title2">xxx汽车 · 施工案例</p>
                <ul>
                    <li v-for="item in 5" :key="item">
                        <div class="g3-image">
                            <img src="../../assets/images//li.jpg" alt="">
                        </div>
                        <p>xxx施工现场</p>
                    </li>
                </ul>
                <p class="g3-gengduo" @click="goRouter('case')">
                    <span>查看更多</span><span class="icon"></span>
                </p>
            </div>
        </div>
        <div class="group4 auto">
            <div class="group4-in inner">
                <div class="g4-image">
                    <img src="../../assets/images//g4-image.png" alt="">
                </div>
                <div class="g4-list">
                    <ul>
                        <li class="one">
                            <div class="order">01</div>
                            <div class="g4-content">
                                <h3>
                                    防撞设备<br>
                                    <span>多种型号防撞车供您选择</span>
                                </h3>
                                <p>
                                    为您提供大运、庆铃五十铃、福田、江铃、日产、<br>
                                    纳瓦拉等型号防撞车。<br>
                                    所有防撞车销售前，都经过多重严格安全检查确保安全。
                                </p>
                            </div>
                        </li>
                        <li class="two">
                            <div class="order2">02</div>
                            <div class="g4-content">
                                <h3>
                                    量身定制<br>
                                    <span>为您提供量身定制解决方案</span>
                                </h3>
                                <p>
                                    省力：公司有专业的工程师，为您提供量身定制解决方案；<br>
                                    省钱：厂家直销，提供全套服务及量身定制的解决方案。<br>
                                </p>
                            </div>
                        </li>
                        <li class="three">
                            <div class="order">03</div>
                            <div class="g4-content">
                                <h3>
                                    完善服务<br>
                                    <span>提供7x24小时服务支持</span>
                                </h3>
                                <p>
                                    7*24小时内快速应答，力争客户满意；<br>
                                    我们的宗旨是以专业的设备、完善的服务回报我们的<br>
                                    客户。
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="group5 auto">
            <div class="group5-in inner">
                <div class="g5-lf">
                    <p class="p1">ABOUT US</p>
                    <p class="p2">鸿运通汽车 · 公司简介</p>
                    <p class="p3">xxxxxxx汽车销售服务有限公司专注于全国各地区高速防撞缓冲车销售与服务一体化，我们有福田单双排、大运、五十铃单双排、江铃单双排、日产皮卡等多种型号配置的防撞缓冲车，较大限度的降低了城市道路和高速公路养护施工中，施工车辆、养护人员和事故处理的交警的安全风险问题。中国的道路养护事业正蓬勃发展，本公司将持续专注于本领域的技术研究，提升自身的技术力量，不断完善产品结构，提升服务品质，努力向拥有品质、技术、企业文化的方向迈进！</p>
                </div>
                <div class="gengduo g5-more" @click="goRouter('introduce')"><span>查看更多</span><span class="arrow"></span></div>
            </div>
        </div>
        <div class="group6 auto">
            <div class="group6-in inner">
                <div class="g6-lf">
                    <p class="title">NEWS CENTER</p>
                    <p class="tuijian"><span class="tuijian1">xxx汽车</span><span> · 动态新闻</span></p>
                    <!-- <p></p> -->
                    <p class="text">本公司专注于全国各地区高速防撞缓冲车销售与服务一体化，我们有福田单双排、大运、五十铃单双排、江铃单双排、日产皮卡等多种型号配置的防撞缓冲车。</p>
                    <p class="gengduo" @click="goRouter('news')"><span>查看更多</span><span class="arrow"></span></p>
                </div>
                <div class="g6-rf">
                    <ul>
                        <li @mouseover="add(1)" :class="[activeId == 1 ? 'cur' : '']" >技术支持</li>
                        <li @mouseover="add(2)" :class="[activeId == 2 ? 'cur' : '']" >行业资讯</li>
                        <li @mouseover="add(3)" :class="[activeId == 3 ? 'cur' : '']" >公司新闻</li>
                    </ul>
                    <div class="g6-content">
                        <div class="chang" v-if="activeId === 1">
                            <div class="change-lf">
                                <img src="../../assets/images/bj2.jpg" alt="">
                                <p class="change-p1">关于高速防撞缓冲车保养的几个建议</p>
                                <p class="change-time">2023-09-05</p>
                                <p class="change-content">高速防撞缓冲车的维护和保养是确保其正常运行和提供有效保护的能力的关键，接下来我们讲一下关于高速防撞缓冲车保养的几个建议。1....</p>
                            </div>
                            <div class="change-rf">
                                <ul>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                </ul>
                            </div>
                        </div>
                        <div class="chang1" v-if="activeId === 2">
                            <div class="change-lf">
                                <img src="../../assets/images/li.jpg" alt="">
                                <p class="change-p1">高速防撞缓冲车的维护和保养是确保其正常运</p>
                                <p class="change-time">2023-09-05</p>
                                <p class="change-content">高速防撞缓冲车的维护和保养是确保其正常运行和提供有效保护的能力的关键，接下来我们讲一下关于高速防撞缓冲车保养的几个建议。1....</p>
                            </div>
                            <div class="change-rf">
                                <ul>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                </ul>
                            </div>
                        </div>
                        <div class="chang2" v-if="activeId === 3">
                            <div class="change-lf">
                                <img src="../assets/images/bj2.jpg" alt="">
                                <p class="change-p1">关于高速防撞缓冲车保养的几个建议</p>
                                <p class="change-time">2023-09-05</p>
                                <p class="change-content">高速防撞缓冲车的维护和保养是确保其正常运行和提供有效保护的能力的关键，接下来我们讲一下关于高速防撞缓冲车保养的几个建议。1....</p>
                            </div>
                            <div class="change-rf">
                                <ul>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                    <li>选择适合防撞缓冲车的防撞缓冲垫时，有几个要点需要考虑。以下是一些选择要点</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Pwel v-if="isMobile"></Pwel>
</template>

<script setup>
import Pwel from "./move/m-wel.vue"
import {ref, onMounted} from "vue"
import {useRouter} from 'vue-router'

const router = useRouter()

const placeholder = ref('请输入关键词搜索')
const activeId = ref(2)

// 跳转产品中心
const goRouter = (Rou)=>{
    console.log(Rou)
    router.push(Rou)
}

// input聚焦focus之后
const clear = () => {
  placeholder.value = '';
};

// input失焦blur之后
const put = () => {
  placeholder.value = '请输入搜索关键词';
};

const add = (id)=>{
    activeId.value = id
}
const isMobile = ref(false)
onMounted(()=>{
  isMobile.value = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
})

</script>

<style lang="scss" scoped>
// 电脑端样式
.p-wel{
    .carousel{
    .el-carousel{
        min-height: 433px;
    }

.el-carousel__item h3 {
  // color: #475669;
  color: red;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
//调整走马灯箭头-左箭头
 ::v-deep .el-carousel__arrow--left{
   top: 50%;
   transform: translateY(-50%);
   left: 0px;
   font-size: 30px;
   color: #d7d7d7;
   width: 50px;
   height: 65px;
   border-radius: 0;
   background: #424246;
 }
 //右箭头
 ::v-deep .el-carousel__arrow--right{
   top: 50%;
   transform: translateY(-50%);
   right: 0px;
   font-size: 30px;
   color: #d7d7d7;
   width: 50px;
   height: 65px;
   border-radius: 0;
   background: #424246;
 }
 /* 走马灯的指示器 */
  ::v-deep .el-carousel__indicator--horizontal .el-carousel__button {
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0);
      border: 2px solid #ffffff;
      border-radius: 50%;
      opacity: .5;
  }  
  /* 选中之后的走马灯指示器 */
  ::v-deep .el-carousel__indicator--horizontal.is-active .el-carousel__button{
      width: 20px;
      height: 20px;
      background: rgb(255, 255, 255);
      border-radius: 50%;
      border: 2px solid #ffffff;
      opacity: .8;
  }
}
.group1{
height: 667px;
background-image: url('../../assets/images/bj1.jpg');
.search-group{
     display: flex;
     align-items: center;
     justify-content: space-between;
     height: 65px;
     background-color: #c0091a;
     font-size: 14px;
    //  text-align: center;
     color: #fff;
     line-height: 65px;
     margin-bottom: 124px;
     .search1{
      width: 130px;
      height: 65px;
      border-right: 1px solid #2695ff;
      text-align: center;
     }
     .search2{
      flex: 1;
      display: flex;
         span{
          padding-left: 30px;
         }
         span:hover{
          cursor: pointer;
         }
     }
     .search3{
      width: 464px;
      height: 65px;
      border-left: 1px solid #2695ff;
      display: flex;
      justify-content: center;
      align-items: center;
      input{
        box-sizing: border-box;
        height: 35px;
        width: 322px;
        padding-left: 18px;
        color: #ddf3ff;
        font-size: 14px;
        line-height: 35px;
        background: rgba(255, 255, 255, 0);
        border: 1px solid #3da0fc;
      }
      input::placeholder {  
          color: rgb(255, 255, 255);
      }
      p{
        box-sizing: border-box;
        width: 58px;
        height: 35px;
        border: 1px solid #3da0fc;
        margin-left: -1px;
        background-image: url('../../assets/icon/search.png');
        background-size: 24px;
        background-position: center center;
        background-repeat: no-repeat;
      }
     }
}
.g1-content{
  // background-color: #d8ecff;
  height: 357px;
  display: flex;
  justify-content: space-between;
  .con-left{
    width: 240px;
    height: 100%;
    .title{
        font-weight: bold;
        font-size: 14px;
        color: #3b434e;
        text-transform: uppercase;
    }
    .tuijian{
        font-size: 24px;
        color: #3b434e;
        padding-top: 5px;
        padding-bottom: 38px;
        border-bottom: 5px solid #181820;
        font-weight: bold;
        .tuijian1{
            color: #bd0919;
        }
    }
    .text{
        color:#737373;
        font-size: 14px;
        line-height: 23px;
        padding-top: 44px;
        height: 98px   ;
        letter-spacing: -0.7px;
        overflow: hidden;
    }
    .gengduo{
        width: 240px;
        height: 60px;
        margin-top: 52px;
        background-color: #bd0919;
        color: #fff;
        line-height: 60px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        &:hover{
            cursor: pointer;
        }
        span{
            transition: .5s ease;
        }
        &:hover span{
            cursor: pointer;
            transform: translateX(10px);
        }
        .arrow{
            display: inline-block;
            background-image: url("../../assets/icon/arrow.png");
            width: 40px;
            height: 40px;
            background-repeat: no-repeat;
            background-size: 40px 40px;
        }
    }

  }
  .con-right{
    width: 890px;
    height: 100%;
    // background-color: #e7f8d6;
    overflow: hidden;
    .animate{

       ul{
        float: left;
        height: 357px;
        width: 3480px;
         li{
           float: left;
           width: 278px;
           height: 357px;
           list-style: none;
           padding-right: 19px;
           animation: move 30s linear infinite;
           &:hover .an-text{
                background-color: #bd0919;
                color: #fff;
           }
            &:hover .an-text p{
                color: #fff;
                border-color: #fff;
            }
            &:hover .an-text h2{
                color: #fff;
            }
           .an-image{
            width: 278px;
            height: 208px;
            overflow: hidden;
               img{
                width: 278px;
                height: 208px;
                vertical-align: middle;
                overflow: hidden;
                transition: .5s ease;
                &:hover{
                    transform: scale(1.2);
                }
               }
           }
           .an-text{
            background-color: #f4f4ff;
            &:hover{

            }

            p{
               height: 57.5px;
               font-size: 16px;
               color: #131313;
               text-align: center;
               line-height: 57.5px;

               border-bottom: 1px solid #ccc;
              }
              h2{
                box-sizing: border-box;
               height: 100px;
               font-size: 12px;
               color: #666;
               text-align: justify;
               padding: 28px 15px 0 15px;
              }
           }
         }
       }
       ul:hover li{
        animation-play-state: paused;
       }
    }
  }
}

@keyframes move{
  from {
    transform: translateX(0);
  }
  to{
    transform: translateX(-600%);
  }
}
}
.group2{
height: 849px;
background-color: #999;
background-image: url('../../assets/images/bj2.jpg');
.group-in{
  display: flex;
  justify-content: space-between;
    .g2-left{
     box-sizing: border-box;
     padding: 4px 11px 0px 13px;
     width: 273px;
     height: 849px;
     background-color: #e2e2ff;
       .l-title{
          color: #393939;
          font-size: 14px;
       }
       .cate{
          color: #c60a1b;
          border-color: #181820;
          padding-top: 5px;
          padding-bottom: 26px;
          font-weight: bold;
          font-size: 24px;
          border-bottom: 5px solid #181820;
       }
       .g2-list{
           li{
            margin-top: 16px;
            list-style-type: none;
            height: 58px;
            font-size: 14px;
            line-height: 58px   ;
            // border: 1px solid #999;
            background: url("../../assets//images//fen.jpg");
            color: #393939;
            display: flex;
            &:hover{
                cursor: pointer;
            }
               .list-image{
                  width: 135px;
                  text-align: center;
                position: relative;
                img{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                }
               }
           }
       }
       .xiaoshou{
        color: #b30f2f;
        font-size: 19px;
        font-weight: bold;
        margin-top: 29px;
        margin-bottom: 8px;
       }
       .dianhua{
        font-size: 17px;
        color: #2c2c2c;
        line-height: 30px;
       }
   }
   .g2-right{
     width: 890px;
     height: 746px;
     margin-top: 56px;
     ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            &:hover img{
                transform: scale(1.2);
            }
            &:hover p{
                color:#fff;
                background-color: #c60a1b;
            }
            width: 280px;
            list-style: none;
            margin-bottom: 19px;
            .r-list{
                width: 280px;
                height: 180px;
                overflow: hidden;
                img{
                width: 280px;
                height: 180px;
                transition: .5s ease;
            }
            }
            p{
                text-align: center;
                line-height: 44px;
                margin-top: 5px;
                background: #e0e0ff;
            }
        }
     }
   }
}
}
.group3{
height: 480px;
background: url('../../assets/images/bj3.jpg');
padding-top: 82px;
box-sizing: border-box;
.group3-in{
    .g3-title{
        color: #3b434e;
        font-size: 14px;
        line-height: 14px;
        text-transform: uppercase;
        font-weight: bold;
    }
    .g3-title2{
        color: #3b434e;
        font-size: 24px;
        line-height: 24px;
        margin-top: 12px;
        letter-spacing: -0.5px;
        font-weight: bold;
    }
    ul{
        height: 226px;
        display: flex;
        justify-content: space-between;
        margin-top: 26px;
        li{
            list-style: none;
            width: 225px;
            height: 226px;
            &:hover img{
                transform: scale(1.3);
            }
            &:hover p{
                color: #fff;
                background-color: #c60a1b;
            }
            .g3-image{
                width: 225px;
                height: 178px;
                overflow: hidden;
                img{
                width: 225px;
                height: 178px;
                transition: .7s ease;
            }
            }
            p{
                background-color: #dcdcff;
                text-align: center;
                line-height: 48px;
                color: #282828;
                font-size: 14px;
            }
        }
    }
    .g3-gengduo{
        margin-top: 25px;
        background-color: #c60a1b;
        width: 240px;
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;
        &:hover{
            cursor: pointer;
        }
        &:hover span{
            transform: translateX(10px);
        }
        span{
            transition: .5s ease;
        };
        .icon{
            width: 40px;
            height: 40px;
            background: url("../../assets/icon/arrow.png");
            background-size: 40px 40px;
        }
    }
}
}
.group4{
margin-top: 60px;
height: 732px;
background-color: #fff;
   .group4-in{
       height: 732px;
       position: relative;
       .g4-image{
        width: 655px;
        height: 638px;
        // background-color: pink;
        position: absolute;
        top: 25px;
        left: -26px;
       }
       .g4-list{
        height: 732px;
        width: 630px;
        // background: skyblue;
        float: right;
           ul{

               .one{
                list-style: none;
                margin-bottom: 60px;
                overflow: hidden;
                .order{
                    float: left;
                    color: #c60a1b;
                    font-size: 66px;
                    font-weight: 900;
                    margin-right: 10px;
                    line-height: 76px;
                    font-style: italic;
                }
                .g4-content{
                    float: left;
                    h3{
                        line-height: 33px;
                        font-size: 30px;
                        font-style: italic;
                        font-weight: bold;
                        color: #c60a1b;
                        span{
                            color: #282828;
                        }
                    }
                    p{
                        color: #42427a;
                        font-size: 18px;
                        line-height: 31px;
                        margin-top: 10px;
                    }
                }
               }
               .two{
                padding: 0 0 60px 87px;
                 list-style: none;
                 overflow: hidden;
                 .order2{
                    //  float: left;
                     color: #c60a1b;
                     font-size: 66px;
                     font-weight: 900;
                     margin-right: 10px;
                     line-height: 76px;
                     font-style: italic;
                 }
                 .g4-content{
                    //  float: left;
                     h3{
                         line-height: 33px;
                         font-size: 30px;
                         font-style: italic;
                         font-weight: bold;
                         color: #c60a1b;
                         span{
                             color: #282828;
                         }
                     }
                     p{
                         color: #42427a;
                         font-size: 18px;
                         line-height: 31px;
                         margin-top: 10px;
                     }
                 }
                }
                .three{
                list-style: none;
                // margin-bottom: 60px;
                overflow: hidden;
                .order{
                    float: left;
                    color: #c60a1b;
                    font-size: 66px;
                    font-weight: 900;
                    margin-right: 10px;
                    line-height: 76px;
                    font-style: italic;
                }
                .g4-content{
                    float: left;
                    h3{
                        line-height: 33px;
                        font-size: 30px;
                        font-style: italic;
                        font-weight: bold;
                        color: #c60a1b;
                        span{
                            color: #282828;
                        }
                    }
                    p{
                        color: #42427a;
                        font-size: 18px;
                        line-height: 31px;
                        margin-top: 10px;
                    }
                }
               }
           }
       }
   }
}
.group5{
height: 520px;
padding-top: 61px;
background: url("../../assets//images/bj4.jpg");
   .group5-in{
       div{
        float: left;
       }
       .g5-lf{
           margin-right: 11px;
           width: 579px;
           height: 438px;
           .p1{
               color: #3b434e;
               font-size: 14px;
               line-height: 14px;
               text-transform: uppercase;
               font-weight: bold;
           }
           .p2{
               width: 240px;
               color: #a61243;
               font-size: 24px;
               line-height: 24px;
               margin-top: 12px;
               font-weight: bold;
               letter-spacing: -0.5px;
               padding-bottom: 36px;
               border-bottom: 4px solid #22222c;
           }
           .p3{
               box-sizing: border-box;
               width: 579px;
               height: 334px;
               background-color: rgba(255,255,255,.85);
               color: #080808;
               margin-top: 14px;
               font-size: 14px;
               line-height: 32px;
               padding: 25px 30px 0 15px;
               text-indent: 2em;
               text-align: justify;
           }
       }
       .gengduo{
        width: 240px;
        height: 60px;
        margin-top: 52px;
        background-color: #bd0919;
        color: #fff;
        line-height: 60px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        &:hover{
            cursor: pointer;
        }
        span{
            transition: .5s ease;
        }
        &:hover span{
            cursor: pointer;
            transform: translateX(10px);
        }
        .arrow{
            display: inline-block;
            background-image: url("../../assets/icon/arrow.png");
            width: 40px;
            height: 40px;
            background-repeat: no-repeat;
            background-size: 40px 40px;
        }
       }
       .g5-more{
        float: left;
        margin-top: 104px;
       }

   }
}
.group6{
height: 500px;
background: url('../../assets/images/bj5.jpg');
box-sizing: border-box;
padding-top: 50px;
   .group6-in{
    //    height: 450px;
       .g6-lf{
           width: 240px;
           height: 350px;
           float: left;
               .title{
                    font-weight: bold;
                    font-size: 14px;
                    color: #39425c;
                    text-transform: uppercase;
                }
                .tuijian{
                    font-size: 24px;
                    color: #39425c;
                    padding-top: 5px;
                    padding-bottom: 38px;
                    border-bottom: 4px solid #b30f2f;
                    font-weight: bold;
                }
                .text{
                    color:#9898db;
                    font-size: 14px;
                    line-height: 23px;
                    padding-top: 44px;
                    height: 98px   ;
                    letter-spacing: -0.7px;
                    overflow: hidden;
                }
                .gengduo{
                    width: 240px;
                    height: 60px;
                    margin-top: 52px;
                    background-color: #bd0919;
                    color: #fff;
                    line-height: 60px;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    &:hover{
                        cursor: pointer;
                    }
                    span{
                        transition: .5s ease;
                    }
                    &:hover span{
                        cursor: pointer;
                        transform: translateX(10px);
                    }
                    .arrow{
                        display: inline-block;
                        background-image: url("../../assets/icon/arrow.png");
                        width: 40px;
                        height: 40px;
                        background-repeat: no-repeat;
                        background-size: 40px 40px;
                    }
                }
       }
       .g6-rf{
           width: 890px;
           height: 350px;
           float: right;
           ul{
              overflow: hidden;
               li{
                   float: right;
                   height: 35px;
                   padding: 0 20px;
                   color: #999999;
                   border-radius: 6px;
                   margin-left: 2px;
                   font-size: 14px;
                   line-height: 35px;
                   list-style: none;
               }
               .cur{
                   background: #b30f2f;
                   color: #fff;
               }
           }
           .g6-content{
                width: 890px;
                height: 210px;
                padding: 40px 0;
                margin-top: 25px;
                background-color: #fff;
                .chang{
                    margin-left: 10px;
                    .change-lf{
                        width: 560px;
                        height: 210px;
                        overflow: hidden;
                        float: left;
                        img{
                        width: 300px;
                        height: 210px;
                        float: left;
                        margin-right: 13px;
                        }
                        .change-p1{
                            color: #396faf;
                            font-size: 16px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            width: 247px;
                            margin-top: 8px;
                        }
                        .change-time{
                            color: #999;
                            font-size: 12px;
                            padding-top: 12px;
                            letter-spacing: 1px;
                        }
                        .change-content{
                            color: #666;
                            line-height: 23px;
                            font-size: 12px;
                            letter-spacing: 1px;
                            padding-top: 8px;
                        }
                    }
                    .change-rf{
                        width: 260px;
                        height: 200px;
                        // background-color: skyblue;
                        float: right;
                        overflow: hidden;
                        ul{
                            &:hover li{
                                animation-play-state: paused;
                            }
                            li{
                                box-sizing: border-box;
                                width: 230px;
                                height: 40px;
                                margin: 0;
                                padding: 0 0 0 15px;
                                float: none;
                                border-radius: 0;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                background-image: url("../../assets//images/ns.png");
                                background-repeat: no-repeat;
                                background-position: left center;
                                line-height: 40px;
                                color: #60676f;
                                font-size: 14px;
                                animation: up 5s linear infinite;
                                &:hover{
                                    cursor: pointer;
                                    color: #337ab7;
                                    // animation-play-state: paused;
                                }
                            }
                            @keyframes up{
                              from {
                                transform: translateY(0);
                              }
                              to{
                                transform: translateY(-300%);
                              }
                            }
                        }
                    }
                }
                .chang1{
                    margin-left: 10px;
                    .change-lf{
                        width: 560px;
                        height: 210px;
                        overflow: hidden;
                        float: left;
                        img{
                        width: 300px;
                        height: 210px;
                        float: left;
                        margin-right: 13px;
                        }
                        .change-p1{
                            color: #396faf;
                            font-size: 16px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            width: 247px;
                            margin-top: 8px;
                        }
                        .change-time{
                            color: #999;
                            font-size: 12px;
                            padding-top: 12px;
                            letter-spacing: 1px;
                        }
                        .change-content{
                            color: #666;
                            line-height: 23px;
                            font-size: 12px;
                            letter-spacing: 1px;
                            padding-top: 8px;
                        }
                    }
                    .change-rf{
                        width: 260px;
                        height: 200px;
                        // background-color: skyblue;
                        float: right;
                        overflow: hidden;
                        ul{
                            &:hover li{
                                animation-play-state: paused;
                            }
                            li{
                                box-sizing: border-box;
                                width: 230px;
                                height: 40px;
                                margin: 0;
                                padding: 0 0 0 15px;
                                float: none;
                                border-radius: 0;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                background-image: url("../../assets//images/ns.png");
                                background-repeat: no-repeat;
                                background-position: left center;
                                line-height: 40px;
                                color: #60676f;
                                font-size: 14px;
                                animation: up 5s linear infinite;
                                &:hover{
                                    cursor: pointer;
                                    color: #337ab7;
                                    // animation-play-state: paused;
                                }
                            }
                            @keyframes up{
                              from {
                                transform: translateY(0);
                              }
                              to{
                                transform: translateY(-300%);
                              }
                            }
                        }
                    }
                }
                .chang2{
                    margin-left: 10px;
                    .change-lf{
                        width: 560px;
                        height: 210px;
                        overflow: hidden;
                        float: left;
                        img{
                        width: 300px;
                        height: 210px;
                        float: left;
                        margin-right: 13px;
                        }
                        .change-p1{
                            color: #396faf;
                            font-size: 16px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            width: 247px;
                            margin-top: 8px;
                        }
                        .change-time{
                            color: #999;
                            font-size: 12px;
                            padding-top: 12px;
                            letter-spacing: 1px;
                        }
                        .change-content{
                            color: #666;
                            line-height: 23px;
                            font-size: 12px;
                            letter-spacing: 1px;
                            padding-top: 8px;
                        }
                    }
                    .change-rf{
                        width: 260px;
                        height: 200px;
                        // background-color: skyblue;
                        float: right;
                        overflow: hidden;
                        ul{
                            &:hover li{
                                animation-play-state: paused;
                            }
                            li{
                                box-sizing: border-box;
                                width: 230px;
                                height: 40px;
                                margin: 0;
                                padding: 0 0 0 15px;
                                float: none;
                                border-radius: 0;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                background-image: url("../../assets//images/ns.png");
                                background-repeat: no-repeat;
                                background-position: left center;
                                line-height: 40px;
                                color: #60676f;
                                font-size: 14px;
                                animation: up 5s linear infinite;
                                &:hover{
                                    cursor: pointer;
                                    color: #337ab7;
                                    // animation-play-state: paused;
                                }
                            }
                            @keyframes up{
                              from {
                                transform: translateY(0);
                              }
                              to{
                                transform: translateY(-300%);
                              }
                            }
                        }
                    }
                }
               }
       }
   }
}
}

</style>