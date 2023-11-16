import { createApp } from 'vue'
import './assets/css/normal.css'
import './assets/css/style.css'
import ElementPlus from 'element-plus'
import './assets/css/index.css'
import App from './App.vue'

// 引入swiper的样式
import 'swiper/css/swiper.css'


// 引入路由
import router from "./router/index.js"

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

