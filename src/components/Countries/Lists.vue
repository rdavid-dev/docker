<template>
  <div>
    <h2>List of Countries</h2>
    <div style="width:100%">
        <ul style="width:50%;float:left">
            <li v-for="(country, index) in countries" :key="index">
                {{ country.Iso3 + "-" + country.name }}
                <button @click="getListOfCities(country.name)">Get Suburb</button>
            </li>
        </ul>
        <div style="width:40%:float:left">
            <Cities :cities="cities"/>
        </div>
    </div>
  </div>
</template>

<script>
import Cities from "@/components/Countries/Cities.vue"
import useCountries from "@/composables/useCountries"

export default {
  props: ["countries"],
  components: {
      Cities
  },
  setup() {
      const { cities, getCities } = useCountries()

      const getListOfCities = (country) => {
          getCities(country)
      }

      return {
          cities,
          getListOfCities
      }
  }
};
</script>

<style scoped>
ul li {
    padding:15px
}
</style>