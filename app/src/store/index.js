import { createStore } from "vuex"

import projectStore from "@/store/modules/projects"
import userStore from "@/store/modules/user"

const store = createStore({
    modules: {
        projects: projectStore,
        user: userStore
    }
})

export default store