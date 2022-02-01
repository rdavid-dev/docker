<template>
  <section>
    <h2>Projects Create</h2>
    <h2>{{ route.params.uuid ? "Update" : "Save" }}</h2>
  </section>
</template>
<script>
export default {
  name: "ProjectForm",
};
</script>
<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log("Mounted:", route.params.uuid);
});
</script>

<style lang="scss" scoped>
</style>