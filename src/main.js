import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia"

import router from '@/router'
import 'lib-flexible'
import { Button, Popup } from 'vant'

const app = createApp(App)
const pinia = createPinia()

app.use(Button).use(Popup)

app.use(router).use(pinia)
app.mount('#app')