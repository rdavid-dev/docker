export default {
    namespaced: true,
    state: {
        title: "Project State",
        fields: {
            name: "Test Field"
        },
        count: 0
    },
    getters: {
        getTitle: (state) => state.title,
        getTotalCount: (state) => state.count
    },
    mutations: {
        SET_INCREASE_COUNT: (state, data) => state.count += data,
        SET_DECREASE_COUNT: (state, data) => state.count -= data
    },
    actions: {
        increaseCount({commit}, payload) {
            commit("SET_INCREASE_COUNT", payload)
        },
        decreaseCount({commit}, payload) {
            commit("SET_DECREASE_COUNT", payload)
        }
    }
}