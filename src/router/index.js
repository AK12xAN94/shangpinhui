import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Register from '@/views/Register'

const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, () => { }, () => { })
    }
}

const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, () => { }, () => { })
    }
}

const router = new VueRouter({
    routes: [
        {
            path: '*',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Home,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/search/:keyword?',
            component: Search,
            name: 'search',
            meta: {
                showFooter: true
            },
            props: ($route) => {
                return {
                    keyword: $route.params.keyword,
                    k: $route.query.k
                }
            }
        },
        {
            path: '/register',
            component: Register
        },
    ]
})

export default router