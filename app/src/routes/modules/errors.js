export default [
    {
        path: "/505",
        name: "Error505",
        component: () => import("@/views/Pages/Errors/Index.vue" /* webpackChunkName: "Pages/Erros/Error505" */)
    },
    {
        path: "/404",
        name: "Error404",
        component: () => import("@/views/Pages/Errors/NotFound.vue" /* webpackChunkName: "Pages/Erros/Error404" */)
    }
]