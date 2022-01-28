import { reactive } from "vue"

export default {
    namespaced: true, //always use namespaced when working in modules format
    state: () => ({
        todos: reactive([
            {
                id: 1,
                title: 'Test 1',
                description: 'Test Description'
            },
            {
                id: 2,
                title: 'Test 2',
                description: 'Test 2 Description'
            }
        ])
    }),
    getters: {
        getTodos(state) {
            return state.todos
        }
    },
    mutations: {
        SAVE_TODO(state, item) {
            state.todos.push(item)
        },

        DELETE_TODO(state, id) {
            state.todos = state.todos.filter((todo) => todo.id != id)
        }
    },
    actions: {
        saveTodo({commit}, payload) {
            commit('SAVE_TODO', payload)
        },

        deleteTodo({commit}, id) {
            commit('DELETE_TODO', id)
        }
    }
}