<template>
    <div>
        <button :disabled="!paginate.prev_page_url" @click="prevPage">Prev</button>
        <label>Showing Page {{ paginate.current_page }} of {{ paginate.last_page }}</label>
        <button :disabled="!paginate.next_page_url" @click="nextPage">Next</button>
    </div>
</template>

<script>
import { defineComponent, toRefs, ref, watch } from "vue";

export default defineComponent({
    emits: ['prevPage', 'nextPage'],
    props: {
        pagination: {
            type: Object
        }
    },
    setup(props, {emit}) {
        const { pagination } = toRefs(props)
        const paginate = ref({})
        const activePage = ref(1)

        const nextPage = () => {
            activePage.value += 1
            emit('nextPage', activePage.value)
        }

        const prevPage = () => {
            activePage.value -= 1
            emit('prevPage', activePage.value)
        }

        watch(pagination , (items) => {
            activePage.value = items.current_page
            paginate.value = items
        }, {
            lazy: false
        })

        return {
            paginate,
            nextPage,
            prevPage
        }
    }
})
</script>

<style lang="scss" scoped>

</style>