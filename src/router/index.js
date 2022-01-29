import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: () => import("@/views/Dashboard.vue")
    },
    {
        path: "/countries",
        name: "Countries",
        component: () => import("@/views/Countries/Index.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router