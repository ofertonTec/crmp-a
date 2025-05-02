import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {plugin,defaultConfig} from '@formkit/vue'
import config from '../formKit.config'
import {createPinia} from 'pinia'
import '@fortawesome/fontawesome-free/css/all.min.css'
const app = createApp(App)
app.use(router)
app.use(plugin,defaultConfig(config))
app.use(createPinia())

app.mount('#app')
