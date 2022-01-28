<template>
    <section>
        <ul>
            <li><router-link :to="{ name: 'TodoLists' }">Lists</router-link></li>
            <li><router-link :to="{ name: 'TodoCreate' }">Create ToDo</router-link></li>
        </ul>
        <router-view></router-view>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>