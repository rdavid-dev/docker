<template>
    <section>
        <h2>Add Todo</h2>
        <br>
        <div class="box-form">
            <form @submit.prevent="addNewTodo">
                <label for="title">Title</label>
                <input type="text" class="input is-primary" v-model="title" id="title" />
                <br><br>
                <label for="description">Description</label>
                <br>
                <textarea id="description" class="input is-primary" v-model="description" rows="4" cols="50"></textarea>
                <br><br>
                <button type="submit" class="button is-primary is-outlined">Save Todo</button>
            </form>
        </div>  
        
        <ModalCard 
            title="Confirmation"
            :isModalShow="showModal"
            @processModal="saveNewtodo"
            @closeModal="closeModal">  
            <template v-slot:body>
                Do you want to proceed?
            </template>
        </ModalCard>
    </section>
</template>

<script>
import { defineComponent, toRefs, reactive, ref } from "vue";
import { useStore } from "vuex";

import ModalCard from "@/components/Modals/Card.vue"

export default defineComponent({
    name: "CreateTodo",
    components: {
        ModalCard
    },
    setup() {
        const store = useStore()
        const formData = reactive({
            title: "",
            description: ""
        })
        const showModal = ref(false)
        
        const addNewTodo = () => {
            showModal.value = true
        }

        const saveNewtodo = () => {
            const newTodo = {
                id: Math.floor(Math.random(5, 1000) * 100),
                title: formData.title,
                description: formData.description
            }
            store.dispatch("todo/saveTodo", newTodo)
            clearForm()
        }

        const closeModal = () => {
            console.log("Close")
            showModal.value = false
        }

        const clearForm = () => {
            showModal.value = false
            formData.title = ""
            formData.description = ""
        }

        return {
            ...toRefs(formData),
            showModal,
            addNewTodo,
            saveNewtodo,
            closeModal
        }
    }
})
</script>

<style scoped>
    .box-form {
        width:400px;
        margin:0 auto;
    }
</style>