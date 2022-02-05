import { createStore } from "vuex"

import projectStore from "@/store/modules/projects"

const store = createStore({
    modules: {
        projects: projectStore
    }
})

export default store