<script>
export default {
    name: "Dashboard"
}
</script>
<script setup>
import { useStore } from "vuex"

const store = useStore()

const increaseStoreCount = () => {
    let randomNumber = Math.floor(Math.random(1,999) * 100)
    store.dispatch("projects/increaseCount", randomNumber)
}

const decreaseStoreCount = () => {
    let randomNumber = Math.floor(Math.random(1,999) * 100)
    store.dispatch("projects/decreaseCount", randomNumber)
        .then(response => {
            console.log(response)
        })
}

</script>

<template>
    <section>
        <h1>Dashboard</h1>
        <h2>{{ store.getters["projects/getTitle"] }}</h2>
        <h3>{{ store.state.projects.fields.name }}</h3>

        <h2>{{ store.getters["projects/getTotalCount"] }} </h2>
        <button @click="increaseStoreCount">Increase</button>
        <button @click="decreaseStoreCount">Decrease</button>
    </section>
</template>

<style lang="scss" scoped>

</style>