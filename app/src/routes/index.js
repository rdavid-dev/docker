import { createRouter, createWebHistory } from "vue-router";
import routes from "@/routes/modules/init"

const baseApp = "emersion"

const router = createRouter({
    history: createWebHistory(baseApp),
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to)
    if (to.meta.requiredAuth) {
        next("/login")
    } else {
        next()
    }
    
})

export default router