<template>
  <div class="container">
    <!-- 第二外层 -->
    <div  class="containerBox">
      <!-- 开始影响  轮播点 -->
      <div   class="swiper-container" id="one" >
        <div  class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in pointImgList" :key="index">
            <a  target="_blank" :href="item.url">
              <div  class="pic" >
                <img  class="img" :src="item.imageUrl" alt="" style="width: 100%;height: 13.2rem;">
              </div>
            </a>      
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import Swiper from 'swiper'
import { onMounted, ref} from 'vue'

const bannerPoint1 = function(){
  new Swiper("#one", {
        loop: true,
          autoplay: {
            delay: 5000, //1秒切换一次
            disableOnInteraction: false
          },
          updateOnImagesReady: true,
          slidesPerView: 1,
          spaceBetween: 0,
          //spaceBetween : '10%',按container的百分比
 
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
        
        pagination: {
          el: ".swiper-pagination",
          clickable :true,
        },
      })
}

const pointImgList  = ref([
        {
          imageUrl: 'https://pic.imgdb.cn/item/654d8111c458853aef9aa120.png',
        },
        {
           imageUrl: 'https://pic.imgdb.cn/item/654d82e1c458853aef9dd616.png',
        },
        {
            imageUrl: 'https://pic.imgdb.cn/item/654d835ac458853aef9f4520.png',
        }
      ])

  onMounted(()=>{
    bannerPoint1()
  })

</script>
  
  <style>
  #ap {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .swiper-container {
    /* width: 600px; */
    height: 13.1rem;
  }
  </style>
  