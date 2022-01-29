<template>
  <main>
    <ul>
      <li><router-link :to="{ name: 'Dashboard' }">Dashboard</router-link></li>
      <li><router-link :to="{ name: 'Countries' }">Country</router-link></li>
    </ul>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>

</style>