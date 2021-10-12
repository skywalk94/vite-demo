import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'

import vuex from './store'
import { Button, Popup } from 'vant';

const app = createApp(App)
app.use(Button)
app.use(Popup)
app.use(router)
app.use(vuex)
app.mount('#app')