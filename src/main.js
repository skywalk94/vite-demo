import { createApp } from 'vue'
import App from './App.vue'

import vant from 'vant'
import 'vant/lib/index.css'
import './assets/style/vant-theme.css'

const app = createApp(App)
app.use(vant).mount('#app')