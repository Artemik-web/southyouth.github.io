
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//样式初始化
import './assets/init.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
