import axios from "axios";
import { ref } from "vue";

export default {
    namespaced: true,
    state: () => ({
        count: ref(0)
    }),
    getters: {
        getCounter(state) {
            return `Current count is: ${state.count}`;
        }
    },
    mutations: {
        increaseCount(store, value) {
            store.count += value;
        },
        decreaseCount(store, value) {
            store.count -= value;
            if (store.count <= 0) {
                store.count = 0;
            }
        }
    },
    actions: {
        increaseCounter({ commit }) {
            commit("increaseCount", Math.floor(Math.random() * 100));
        },

        decreaseCounter({ commit }) {
            commit("decreaseCount", Math.floor(Math.random() * 100));
        },

        async generateRandomNumber({commit}) {
            // const response = await axios
            //     .get(
            //         "random/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
            //     )
            const response = await axios.get("/products")
            const data = await response.data

            commit("increaseCount", data);
        }
    }
};
