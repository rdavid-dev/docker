import * as API from "@/core/apis"

export default {
    namespaced: true,
    state: {
        
    },
    getters: {
        
    },
    mutations: {
        SET_AUTHENTICATED_USER(state, data) {
            console.log("Mutations:", data)
        }
    },
    actions: {
        async authenticateUser({ commit }, inputs) {
            const response = await API.post("login", {
                email: inputs.email,
                password: inputs.password
            }).then(response => {
                commit("SET_AUTHENTICATED_USER", response)
                return response
            })

            return response;
        }
    }
}