import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        props: true
    },
    {
        path: "/",
        name: "products",
        component: () => import("@/views/Products.vue"),
        props: true
    },
    {
        path: "/",
        name: "carts",
        component: () => import("@/views/Carts.vue"),
        props: true
    },
    {
        path: "/",
        name: "counter",
        component: () => import("@/views/SimpleCounter.vue"),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
