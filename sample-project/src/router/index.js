import { createRouter, createWebHistory } from "vue-router";
import todoRoutes from "./todo-routes.js"
import Dasboard from "@/views/Dashboard.vue"

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: () => Dasboard,
        props: true
    },
    {
        path: "/products",
        name: "Products",
        /**
         * Use lazy loading code splitting to make the site faster
         * Only loads the component when needed
         * 
         * using @import()
         * using webpackChunkName to name the js file
         */
        component: () => import(/* webpackChunkName: "product" */ "@/views/Products.vue"),
        props: true
    },
    {
        path: "/carts",
        name: "Carts",
        component: () => import(/* webpackChunkName: "carts" */ "@/views/Carts.vue"),
        props: true
    },
    {
        path: "/counter",
        name: "Counter",
        component: () => import(/* webpackChunkName: "counter" */ "@/views/SimpleCounter.vue"),
        props: true
    },
    
    {
        path: "/todo",
        name: "Todos",
        redirect: {
            name: "TodoLists"
        },
        component: () => import(/* webpackChunkName: "todo" */ "@/views/Todos/Default.vue"),
        children: todoRoutes
    },
    {
        path: "/:catchAll(.*)",
        name: "PageNotFound",
        component: () => import(/* webpackChunkName: "error" */ "@/views/Errors/PageNotFound.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
