import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/index.vue')
        }, {
            path: '/main/:id',
            component: () => import('../views/main.vue')
        }, {
            path: '/father',
            component: () => import('../views/father.vue')
        }, {
            path: '/pinia',
            component: () => import('../views/pinia.vue')
        }
    ]
})

export default router