<template>
  <nav id="nav">
    <router-link :to="{ name: 'Dashboard' }">Home</router-link>
    <router-link :to="{ name: 'Products' }">Products</router-link>
    <router-link :to="{ name: 'Carts' }">My Cart</router-link>
    <router-link :to="{ name: 'Counter' }">Simple Counter</router-link>
    <router-link :to="{ name: 'Todos' }">To Do List</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
#nav a {
  display: inline-block;
  padding: 5px;
}
</style>