export default [
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Pages/Auth/Login.vue" /* webpackChunkName: "Pages/Auth/Login" */)
    }
]