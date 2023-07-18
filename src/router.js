import { createRouter,createWebHistory } from "vue-router";

import AppHome from './pages/AppHome';
import About from './pages/About';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})

export {router}