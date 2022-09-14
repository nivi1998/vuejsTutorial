import {createWebHistory, createRouter} from 'vue-router'

import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Login from './components/Login.vue';
import RoutingVue from './components/RoutingVue.vue'

const routes = [
    {
        name:'Home',
        path:'/',
        component: Home
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'Profile',
        path:'/profile/:name',
        component:Profile
    },
    
    {
        name:'RoutingVue',
        path:'/routingpage',
        component:RoutingVue
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes

});
export default router;