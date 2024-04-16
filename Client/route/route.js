import  {createWebHashHistory} from 'vue-router'
import { createRouter} from 'vue-router';

const routes =[

    {
        path: '/',
        component:()=>import('../src/main.vue')
    },
    {
        path:'/study',
        component:()=>import('../Blog/studyPage.vue')
    },
    {
        path:'/login',
        component:()=>import('../src/component/Login/login.vue')
    },
    {
        path:'/write',
        component:()=>import('../src/component/markdown/markdown.vue')
    },



]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes,
    })

export default router