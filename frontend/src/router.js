import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './dashboard/Dashboard.vue'

Vue.use(Router)

export const router = new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        }
    ]
})