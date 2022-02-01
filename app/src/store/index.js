import { createStore } from "vuex";
import projects from "@/store/modules/projects"

const store = createStore({
    modules: {
        projects: projects
    }
})

export default store