import '../asset/main.css'
import router from "../route/route.js";
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).use(router).mount('#app')
