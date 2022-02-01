import dashboard from "@/routes/modules/dashboard"
import projects from "@/routes/modules/projects"
import errors from "@/routes/modules/errors"

export default [
    {
        path: "/",
        name: "App",
        redirect: {
            name: 'Dashboard'
        },
        component: () => import("@/views/Layouts/Default.vue" /* webpackChunkName: "Layout/App" */),
        children: [
            ...dashboard,
            ...projects
        ]
    },
    {
        path: "/",
        name: "Error",
        component: () => import("@/views/Layouts/Errors.vue" /* webpackChunkName: "Layout/App" */),
        children: [
            ...errors
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        beforeEnter: (to, from, next) => {
            next({ name: 'Error404', replace: true})
        }
    }
]