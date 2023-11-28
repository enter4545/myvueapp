import { createRouter, createWebHashHistory } from "vue-router"

const _isMobile = function(){
    const flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
        return flag
  }

const routes = [
    {
        path: '',
        name: '首页',
        component: () => import('../components/home/Home.vue'),
        redirect: 'welcome',
        children: [
            {
                path: 'welcome',
                component: ()=> import('../components/welcome/Welcome.vue')
            },
            {
                path: 'introduce',
                name: '公司概况',
                component: () => import('../components/Introduce/Introduce.vue'),
                redirect:'intro',
                children: [
                    {
                        path: '/intro',
                        name: '公司概况',
                        component: ()=> import("../components/Introduce/son-router/Jianjie.vue")
                    },
                    {
                        path: '/honor',
                        name: '公司荣誉',
                        component: ()=> import("../components/Introduce/son-router/Honor.vue")
                    }
                ]
            },
            {
                path: 'product',
                name: '防撞缓冲车',
                component: () => import('../components/Product/Product.vue'),
                redirect: '/one',
                children: [
                    {
                        path: '/one',
                        name: '防撞缓冲车',
                        component: () => import('../components/Product/son-router/one.vue'),
                        children: [
                            {
                                path: '/one-id',
                                component: ()=> import('../components/Product/detail/detail.vue'),
                                meta: {
                                    showfater: true
                                }
                            }
                        ]
                    },
                    {
                        path: '/two',
                        name: 'xx缓冲车',
                        component: ()=> import('../components/Product/son-router/two.vue')
                    },
                    {
                        path: '/three',
                        name: 'xxx缓冲车',
                        component: ()=> import('../components/Product/son-router/three.vue')
                    }
                ]
            },
            {
                path: 'news',
                component: () => import('../components/News/index.vue'),
                name:"新闻中心",
                redirect: '/compony',
                children: [
                    {
                        path: '/compony',
                        name:"公司新闻",
                        component: () => import('../components/News/son-router/Compony.vue'),
                        children: [
                            {
                                path: '/newsDetail/:id',
                                component: () => import('../components/News/G-son/index.vue'),
                                meta:{
                                    showfather: false
                                 }
                            }
                        ]
                    },
                    {
                        path: '/industry',
                        name:"行业资讯",
                        component: () => import('../components/News/son-router/Industry.vue'),
                        children: [
                            {
                                path: '/newsDetail/:id',
                                component: () => import('../components/News/G-son/index.vue'),
                                meta:{
                                    showfather: false
                                 }
                            }
                        ]
                    },
                    {
                        path: '/technical',
                        name:"技术支持",
                        component: () => import('../components/News/son-router/Technical.vue'),
                        children: [
                            {
                                path: '/newsDetail/:id',
                                component: () => import('../components/News/G-son/index.vue'),
                                meta:{
                                    showfather: false
                                 }
                            }
                        ]
                    }
                ]
            },
            {
                path: 'case',
                name: '相关案例',
                component: () => import('../components/Case/index.vue'),
                redirect: "/image",
                children: [
                    {
                        path: '/image',
                        name: '施工案例',
                        component: ()=> import("../components/Case/son-router/CaseImage.vue")
                    },
                    {
                        path: '/video',
                        name: '视频案例',
                        component: ()=> import("../components/Case/son-router/CaseVideo.vue")
                    },
                ]
            },
            {
                path: 'contact',
                component: () => import('../components/Contact/Contact.vue'),
                name:'联系我们',
                redirect: '/contactus',
                children: [
                    {
                        path: '/contactus',
                        name: '联系我们',
                        component: ()=> import('../components/Contact/son-router/index.vue')
                    }
                ]
            },
            {
                path: 'inquiry',
                component: () => import('../components/Inquiry/Inquiry.vue'),
                // redirect: 'inquiry/in',
                children: [
                    {
                        path: '/liuyan',
                        component: ()=> import('../components/Inquiry/son-router/index.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/manage',
        name: '/Manage',
        redirect: 'clients',
        component: () => import('../components/manage/Manage.vue'),
        children: [
            {
                path: '/clients',
                name: 'Clients',
                component: ()=> import('../components/manage/son-router/clientsList.vue')
            },
            {
                path: '/artUpdata',
                name: 'ArtUpdata',
                component: ()=> import('../components/manage/son-router/article/artUpdata.vue')
            },
            {
                path: '/artList',
                name: 'ArtList',
                component: ()=> import('../components/manage/son-router/article/artList.vue')
            },
            {
                path: '/imagesList',
                name: 'ImagesList',
                component: ()=> import('../components/manage/son-router/images/imgList.vue')
            },
            {
                path: '/prolist',
                name: 'Prolist',
                component: ()=> import('../components/manage/son-router/product/proList.vue')
            }
        ]
    }
    ,
    {
        path: '/login',
        name: 'Login',
        component: ()=> import('../components/manage/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 如果目标路由有锚点标记，直接滚动到锚点
        if (to.hash) {
            return { selector: to.hash };
        }
        // 否则滚动到页面顶部
        return { top: 0 };
    },
})

export default router
