export default [
    {
        path: "",
        name: "TodoLists",
        component: () => import(/* webpackChunkName: "todo" */ "@/views/Todos/Lists.vue")
    },
    {
        path: "/create",
        name: "TodoCreate",
        component: () => import(/* webpackChunkName: "todo" */ "@/views/Todos/Create.vue")
    },
]