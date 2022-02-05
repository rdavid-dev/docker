<template>
    <section>
        Login
        <form @submit.prevent="authenticateUser">
            <label for="">Email</label>
            <input type="text" v-model="fields.email">
            <label for="">Password</label>
            <input type="password"  v-model="fields.password">
            <button type="submit">Login</button>
        </form>
    </section>
</template>
<script>
export default {
    name: "Login"
}
</script>
<script setup>

import { reactive } from 'vue'
import { useStore } from "vuex"
import { useRoute, useRouter } from "vue-router"

const store = useStore()
const route = useRoute()
const router = useRouter()

const fields = reactive({
    email: "",
    password: ""
})

const authenticateUser = async() => {
    await store.dispatch("user/authenticateUser", {...fields})
        .then(response => {
            router.push({name: "Dashboard"})
        }).catch(error => {
            console.log(error)
        })
}
</script>

<style lang="scss" scoped>

</style>