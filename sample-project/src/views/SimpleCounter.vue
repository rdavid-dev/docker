<template>
  <section>
    <h1>Simple Counter 2</h1>
    <button @click="$store.dispatch('counter/increaseCounter')">
      Increase
    </button>
    <span class="counter">{{ $store.state.counter.count }}</span>
    <button @click="$store.dispatch('counter/decreaseCounter')">
      Decrease
    </button>
    <br /><br />
    <button @click.prevent="$store.dispatch('counter/generateRandomNumber')">
      Generate Random Number
    </button>
  </section>
</template>

<script>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "SimpleCounter",
  setup() {
    onMounted(() => {
      console.log(process.env.VUE_APP_API_BASE_PATH)
    })

    return {};
  },
});
</script>

<style scoped>
.counter {
  padding: 0 15px;
  font-size: 20px;
}
</style>