const AuthLayout = () => import("@/views/Layouts/Auth.vue" /* webpackChunkName: "Layouts/Default" */)
const DefaultLayout = () => import("@/views/Layouts/Default.vue" /* webpackChunkName: "Layouts/Default" */)

import authRoutes from "@/routes/modules/auth"
import dashboardRoutes from "@/routes/modules/dashboard"
import errorRoutes from "@/routes/modules/errors"

export default [
    {
        path: "/",
        name: "Auth",
        component: AuthLayout ,
        children: [
            ...authRoutes
        ]
    },
    {
        path: "/",
        name: "App",
        redirect: { name: "Dashboard" },
        component: DefaultLayout ,
        meta: {
            requiredAuth: true
        },
        children: [
            ...dashboardRoutes
        ]
    },
    {
        path: "/",
        name: "Errors",
        component: DefaultLayout ,
        children: [
            ...errorRoutes
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        beforeEnter: (to, from, next) => {
            next({ name: 'Error404', replace: true})
        }
    }
]