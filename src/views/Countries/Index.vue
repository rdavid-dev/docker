<template>
  <section>
    <h1>Countries</h1>
    <CountryList :countries="countries" />
  </section>
</template>

<script>
import useCountries from "@/composables/useCountries.js"
import { onMounted } from 'vue'

import CountryList from "@/components/Countries/Lists.vue"

export default {
    name: "CountryIndex",
    components : {
      CountryList
    },
    setup() {
      const { countries, getCountries } = useCountries()

      onMounted(getCountries)

      return {
        countries
      }
    }
}
</script>

<style>

</style>