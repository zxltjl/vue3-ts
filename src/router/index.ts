import {createRouter,createWebHistory} from 'vue-router';
import Index from '../components/index.vue';
import Login from '../components/login.vue';
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'index',
            component:Index
        },
        {
            path:'/login',
            name:'login',
            component:Login
        }
    ]
});
export default router;