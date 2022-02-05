export default [
    {
        path: "/login",
        name: "Login",
        meta: {
            title: "Welcome to Emersion"
        },
        component: () => import("@/views/Pages/Auth/Login.vue" /* webpackChunkName: "Pages/Auth/Login" */)
    }
]