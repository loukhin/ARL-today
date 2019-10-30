import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {router} from './router.js'
import App from './App.vue'

Vue.use(BootstrapVue)

new Vue ({
    el: '#app',
    router,
    render: h => h(App)
})