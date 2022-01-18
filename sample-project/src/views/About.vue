<template>
  <section>
      <h1>About here</h1>
      <ul>
          <li v-for="list in lists" :key="list"> {{  list }} </li>
      </ul>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
    setup() {
        const lists = ref([]);

        const loadRandomNumber = async () => {
            try {
                lists.value = await axios.get('http://localhost:5010/api/testcall').then(response => response.data)
            } catch (error) {
                return error.response.data
            }
        }

        onMounted(() => {
            loadRandomNumber()
        })

        return {
            lists
        }
    }
}
</script>

<style>

</style>