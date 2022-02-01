import { createRouter, createWebHistory } from "vue-router";
import routes from "./modules/index"

const baseUrl = "/app"

const router = createRouter({
    history: createWebHistory(baseUrl),
    routes: routes
})

export default router