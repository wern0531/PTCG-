import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)

app.component('LoadingItem', Loading)

app.mount('#app')
