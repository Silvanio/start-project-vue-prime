import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home.vue'
import Login from '../Login.vue'
import EmptyPage from "../views/pages/EmptyPage";
import Base from "../Base";


const ifNotAuthenticated = (to, from, next) => {

    if (localStorage.getItem('token') == null || localStorage.getItem('token') == '') {
        next('/login');
        return
    }
    next()
}

const ifAuthenticated = (to, from, next) => {
    if (localStorage.getItem('token') != null && localStorage.getItem('token') != '') {
        next('/empty');
        return
    }
    next()
}

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        component: Base,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
                beforeEnter: ifNotAuthenticated,
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('../views/pages/About.vue'),
                beforeEnter: ifNotAuthenticated,
            },
            {
                path: 'empty',
                name: 'Empty',
                component: EmptyPage,
                beforeEnter: ifNotAuthenticated,
            }

        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: ifAuthenticated,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
