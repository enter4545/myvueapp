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

console.log(localStorage.getItem('token'))

// 路由拦截
// router.beforeEach(async (to, from) => {
//     if (
//       // 检查用户是否已登录
//       localStorage.getItem('token') != '123456' &&
//       // ❗️ 避免无限重定向
//       to.name == '/Manage'
//     ) {
//       // 将用户重定向到登录页面
//       return { name: 'Login' }
//     }
//   })

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

