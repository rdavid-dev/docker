<template>
  <nav id="nav">
    <router-link :to="{ name: 'dashboard' }">Home</router-link>
    <router-link :to="{ name: 'products' }">Products</router-link>
    <router-link :to="{ name: 'carts' }">My Cart</router-link>
    <router-link :to="{ name: 'counter' }">Simple Counter</router-link>
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