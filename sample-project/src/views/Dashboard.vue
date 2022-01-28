<template>
  <section>Dashboard</section>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue'

export default {
  setup() {
    const app = getCurrentInstance()
    const api = app.appContext.config.globalProperties.$api

    const loadPage = async () => {
      const response = await api.get('/api/testoci')
      console.log(response)
    }

    onMounted(loadPage)
  }
};
</script>

<style>
</style>