export default [
    {
        path: "projects",
        name: "Projects",
        redirect: { name: "ProjectIndex" },
        // meta: {
        //     label: 'Project',
        //     icon: 'fas fa-projects'
        // },
        component: {
            template: '<router-view></router-view>'
        },
        // component: () => import("@/views/Pages/Projects/Default.vue" /* webpackChunkName: "Pages/Projects" */),
        children: [
            {
                path: "",
                name: "ProjectIndex",
                meta: {
                    label: 'Project List',
                },
                component: () => import("@/views/Pages/Projects/Index.vue" /* webpackChunkName: "Pages/Projects/Index" */)
            },
            {
                path: "create",
                name: "ProjectForm",
                meta: {
                    label: 'Project Form',
                },
                component: () => import("@/views/Pages/Projects/Form.vue" /* webpackChunkName: "Pages/Projects/Form" */)
            },
            {
                path: ":uuid/update",
                name: "ProjectFormEdit",
                meta: {
                    label: 'Project Form Edit',
                },
                component: () => import("@/views/Pages/Projects/Form.vue" /* webpackChunkName: "Pages/Projects/Form" */)
            }
        ]
    }
]