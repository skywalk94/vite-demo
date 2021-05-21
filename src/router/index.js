import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/main/:id',
        component: () => import('../views/main/main.vue')
    }
    ]
});

export default router