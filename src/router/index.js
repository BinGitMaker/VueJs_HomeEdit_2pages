import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import Edit from '../components/Edit.vue'

const routes = [ 
    {path: '/', name: 'home', component: Home},
    {path: '/edit/:text', name: 'edit', component: Edit, props: true},
    {path: '/:text', name: 'accueil', component: Home, props: true},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

