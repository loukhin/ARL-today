import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Multiselect from 'vue-multiselect'

import {router} from './router.js'
import App from './App.vue'

Vue.use(BootstrapVue)
Vue.component('multiselect', Multiselect)

new Vue ({
    el: '#app',
    router,
    render: h => h(App)
})