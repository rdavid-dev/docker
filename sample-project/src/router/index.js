import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'dasboard',
        component: () => import('@/views/Dashboard.vue')
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: () => import('@/views/Gallery.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router