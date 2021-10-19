import {
    createRouter,
    createWebHistory
} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/main/:id',
        component: () => import('../views/main/main.vue')
    },
    {
        path: '/father',
        component: () => import('../views/father/father.vue')
    }]
});

export default router