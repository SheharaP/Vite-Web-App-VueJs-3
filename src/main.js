import { createApp } from 'vue'
import App from './App.vue'
import './index.css' //tailwind properties
import router from './router'

createApp(App).use(router).mount('#app')
