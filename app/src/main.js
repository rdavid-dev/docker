import { createApp } from 'vue'
import App from '@/App.vue'

import store from "@/store/index"
import routes from "@/routes/index"

import '@/assets/app.css'

const app = createApp(App)

app.use(store)
app.use(routes)

import core from "@/core"
core(app)

app.mount('#app')
