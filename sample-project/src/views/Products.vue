<template>
  <section>
    <h1>Products</h1>
    <h2>{{ $store.getters["counter/getCounter"] }}</h2>
    <br />

    <div v-show="!isLoading">
      <Pagination
        :pagination="paginate"
        @nextPage="nextPage"
        @prevPage="prevPage"
      />
    </div>
    <br />
    <ProductList :productLists="products" />
  </section>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from "vue";
import axios from "axios";

import ProductList from "@/components/products/Product-List.vue";
import Pagination from "@/components/Pagination.vue";

export default defineComponent({
  components: {
    ProductList,
    Pagination,
  },
  setup() {
    const products = ref([]);
    const paginate = ref({});
    const isLoading = ref(true)

    const loadProducts = async (page) => {
      const response = await axios.get(`/products?page=${page}`);
      const resp = await response.data;

      isLoading.value = false

      setPagination(resp);
      products.value = resp.data;
      
    };

    const setPagination = (item) => {
      paginate.value = {
        current_page: item.current_page,
        last_page: item.last_page,
        next_page_url: item.next_page_url,
        prev_page_url: item.prev_page_url,
      };
    };

    const nextPage = (page) => {
      loadProducts(page);
    };

    const prevPage = (page) => {
      loadProducts(page);
    };

    onBeforeMount(() => {
      loadProducts(1);
    });

    return {
      isLoading,
      products,
      paginate,
      nextPage,
      prevPage,
    };
  },
});
</script>

<style>
</style>