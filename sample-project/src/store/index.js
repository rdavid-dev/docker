import { createStore } from "vuex";
import CounterModule from "@/store/modules/counter.js";
//import article from "@/store/modules/article";

const store = createStore({
    modules: {
        counter: CounterModule
    }
});

export default store;
