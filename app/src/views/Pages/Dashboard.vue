<template>
    <section>
        <h2>Dashboard</h2>
        <img src="@/assets/logo.png" alt="">
    </section>
</template>

<script>
export default {
    name: "Dashbord"
}
</script>

<script setup>
import { inject, onMounted } from "vue"

const api = inject("$api")

const getArticle = async () => {
    const response = await api.get("articles/8")

    console.log(response.data)
}
onMounted(async () => {
    await getArticle()
})
</script>

<style lang="scss" scoped>

</style>