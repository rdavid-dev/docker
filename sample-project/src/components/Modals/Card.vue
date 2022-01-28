<template>
    <div>
        <div class="modal" :class="isModalShow ? 'is-active' : ''">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{{ title }}</p>
                    <button class="delete" @click="closeModal" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <slot name="body"></slot>
                </section>
                <footer class="modal-card-foot align-button-right">
                    <button class="button is-success" @click="processModal">Save changes</button>
                    <button class="button" @click="closeModal">Close</button>
                </footer>
            </div>
        </div>
    </div>    
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ModalCard",
    emits: ["processModal", "closeModal"],
    props: {
        title: {
            type: String,
            default: "Modal Title"
        },
        isModalShow: {
            type: Boolean,
            default: false
        }
    },
    setup(_, { emit }) {
        const processModal = () => {
            emit("processModal")
        }

        const closeModal = () => {
            emit("closeModal")
        }

        return {
            processModal,
            closeModal
        }
    }
})
</script>

<style scoped>
    .align-button-right {
        justify-content: end
    }
</style>