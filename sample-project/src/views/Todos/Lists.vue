<template>
    <section>
        <h2>Lists</h2>
        <br>
        <h3>List of Todos</h3>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <p>{{ todo.title }}</p>
                <blockquote>{{ todo.description }}</blockquote>
                <button @click="deleteToDo(todo.id)">Delete</button>
            </li>
        </ul>
    </section>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex"

export default defineComponent({
    name: "TodoLists",
    setup() {
        const store = useStore()
        const todos = computed(() => store.getters["todo/getTodos"])

        const deleteToDo = (id) => {
            store.dispatch("todo/deleteTodo", id)
        }

        return {
            todos,
            deleteToDo
        }
    }
})
</script>

<style lang="scss" scoped>

</style>