<template>
    <section>
        <h3>Product List</h3>
        <h2>{{ message }}</h2>
        <ul>
            <li v-for="(product) in products" :key="product.id">
                {{  product.name }}
            </li>
        </ul>
    </section>
</template>

<script>
import { defineComponent, toRefs, ref, watch } from "vue";

export default defineComponent({
    name: 'ProductList',
    props: {
        productLists: {
            type: Array
        }
    },
    setup(props) {
        const { productLists } = toRefs(props);
        const products = ref([])
        const message  = ref('Loading....')

        watch(productLists , (lists) => {
            products.value = lists
            message.value = "Done"
        }, {
            lazy: false
        })

        return {
            products,
            message
        }
    }
})
</script>

<style lang="scss" scoped>

</style>