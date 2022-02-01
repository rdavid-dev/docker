<template>
    <section>
        <h2>Projects</h2>
    </section>
</template>

<script>
export default {
    name: "ProjectList"
}
</script>

<script setup>
import { onMounted }  from "vue"
import { useStore } from "vuex"

const store = useStore()

onMounted(() => {
    console.log("Store", store.getters["projects/getCount"])  
})
</script>

<style lang="scss" scoped>

</style>