import { ref } from "vue"

export default {
    namespaced: true,
    state: {
        count: ref(6)
    },
    getters: {
        getCount: (state) => state.count
    },
    mutations: {

    },
    actions: {

    }
}