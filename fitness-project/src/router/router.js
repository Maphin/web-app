import { createRouter, createWebHistory } from "vue-router";
import Register from '../components/Register/Register.vue';
import Login from '../components/Login/Login.vue';
import Home from '../components/Home/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});