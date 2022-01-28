import { createApp } from 'vue'
import Api from './api/api.js'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.config.globalProperties.$api = Api

app.use(router)
app.use(store)
app.mount('#app')
