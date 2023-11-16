import { createRouter, createWebHistory } from "vue-router";
import Register from '../components/Register/Register.vue';
import Login from '../components/Login/Login.vue';
import Home from '../components/Home/Home.vue';
import Dashboard from '../components/Dashboard/Dashboard.vue';
import DashboardUsers from '../components/Dashboard/Users/Users.vue';
import DashboardSubscriptions from '../components/Dashboard/Subscriptions/Subscriptions.vue';
import DashboardOrders from '../components/Dashboard/Orders/Orders.vue';
import DashboardVisits from '../components/Dashboard/Visits/Visits.vue';

// const checkoutGuard = (to, from, next) => {
//     if (store.state.cart.length) {
//         next();
//     } else {
//         next({name: 'cart'});
//     }
// }

const authGuard = (to, from, next) => {
    const isAuthorized = localStorage.hasOwnProperty('token');
    if (!isAuthorized) {
        next({ name: 'login' });
    } else {
        next();
    }
};

const managerAuthGuard = (to, from, next) => {
    const isAuthorized = localStorage.hasOwnProperty('token');
    if (!isAuthorized) {
        next({name: 'login'});
    } else if (localStorage.getItem('userRole') !== UserRoles.Admin) {
        next({name: 'home'});
    } else {
        next();
    }
};

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
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        //beforeEnter: managerAuthGuard
    },
    {
        path: '/dashboard/users',
        name: 'dashboardUsers',
        component: DashboardUsers,
        //beforeEnter: managerAuthGuard
    },
    {
        path: '/dashboard/subscriptions',
        name: 'dashboardSubscriptions',
        component: DashboardSubscriptions,
        //beforeEnter: managerAuthGuard
    },
    {
        path: '/dashboard/orders',
        name: 'dashboardOrders',
        component: DashboardOrders,
        //beforeEnter: managerAuthGuard
    },
    {
        path: '/dashboard/visits',
        name: 'dashboardVisits',
        component: DashboardVisits,
        //beforeEnter: managerAuthGuard
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});