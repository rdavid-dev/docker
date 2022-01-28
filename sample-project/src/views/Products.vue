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
import { defineComponent, getCurrentInstance, onBeforeMount, ref } from "vue";

import ProductList from "@/components/products/Product-List.vue";
import Pagination from "@/components/Pagination.vue";

export default defineComponent({
  components: {
    ProductList,
    Pagination,
  },
  setup() {
    const app = getCurrentInstance()
    const api = app.appContext.config.globalProperties.$api

    const products = ref([]);
    const paginate = ref({});
    const isLoading = ref(true)

    const loadProducts = async (page) => {
      const response = await api.get(`/products?page=${page}`);

      isLoading.value = false

      setPagination(response);
      products.value = response.data;

      console.log(products)
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