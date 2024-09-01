import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .use(ElementPlus)
    .mount('#app')
