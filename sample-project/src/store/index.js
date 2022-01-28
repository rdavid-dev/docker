import { createStore } from "vuex";
import CounterModule from "@/store/modules/counter.js";
import TodoModule from "@/store/modules/todos";

const store = createStore({
    //With namespaced format
    modules: {
        counter: CounterModule,
        todo: TodoModule
    }
});

export default store;
