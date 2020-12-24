import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: "/",
            name: "index",
            component: () => import("../views/index/index.vue"),
            meta: {
                title: "首页"
            }
        },
        {
            path: "/main",
            name: "main",
            component: () => import("../views/main/main.vue"),
            meta: {
                title: "主要"
            }
        }
    ]
})

export default router;