<template>
  <div>
    <Header />
    <Nav />
    <main>
      <h1>Vue using Store</h1>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import Nav from "@/components/partials/Nav.vue";
import Footer from "@/components/partials/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Nav,
    Footer,
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
section {
  min-height: 300px;
}
</style>
