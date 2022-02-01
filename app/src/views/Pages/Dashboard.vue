<template>
    <section>
        <h2>Dashboard</h2>
        <img src="@/assets/logo.png" alt="">
        Article ID: {{  article.id  }} <br>
        Article Title: {{  article.title  }} <br>
        Article Excerpt: {{  article.excerpt  }}

        <br>
        <br>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <p>Articles</p>
            <ul>
                <li v-for="article in articles.data" :key="article.id">
                    {{ article.title }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "Dashbord"
}
</script>

<script setup>
import { inject, onMounted, ref, reactive } from "vue"

const initArticle = {
    id: null,
    title: "",
    excerpt: ""
}
const loading = ref(true)
const article = reactive({ ...initArticle })
const articles = reactive({
    data: []
})

const api = inject("$api")

const getArticle = async () => {
    try {
        const response = await api.get("articles/8");
        Object.assign(article, response)
    } catch (error) {
        console.log(error)
    }
}

const getArticles = async () => {
    try {
        const response = await api.get("testoci");
        loading.value = false
        Object.assign(articles, response)
    } catch (error) {
        loading.value = false
        console.log(error)
    }
}

onMounted(async () => {
    await getArticle()
    await getArticles()
})
</script>

<style lang="scss" scoped>

</style>