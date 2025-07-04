import { createApp } from 'vue'
import './style.scss'
import App from './App.vue' 
import router from './router'
import '@/assets/styles/common.scss'

createApp(App).use(router).mount('#app')
