<template>
  <section>
      <h3>Cities</h3>
      <ul>
          <li v-for="(city, index) in cities" :key="index">
              {{ city }}
          </li>
      </ul>
  </section>
</template>

<script>
export default {
    name: "Cities",
    props: ["cities"]
}
</script>

<style>

</style>