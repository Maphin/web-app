import { createRouter, createWebHistory } from "vue-router";
import { store } from '@/vuex/store'
import Register from '../components/Register/Register.vue';
import Login from '../components/Login/Login.vue';
import Profile from '../components/Profile/Profile.vue';
import Tariff from '../components/Tariff/Tariff.vue';
import Home from '../components/Home/Home.vue';
import Checkout from '../components/Checkout/Checkout.vue';
import Dashboard from '../components/Dashboard/Dashboard.vue';
import DashboardUsers from '../components/Dashboard/Users/Users.vue';
import DashboardSubscriptions from '../components/Dashboard/Subscriptions/Subscriptions.vue';
import DashboardOrders from '../components/Dashboard/Orders/Orders.vue';
import DashboardVisits from '../components/Dashboard/Visits/Visits.vue';
import DashboardUpdateSubscription from '../components/Dashboard/Subscriptions/UpdateSubscription.vue';
import DashboardAddSubscription from '../components/Dashboard/Subscriptions/AddSubscription.vue';
import { UserRoles } from "@/vuex/modules/AuthModule/authModule";

const checkoutGuard = (to, from, next) => {
    if (Object.keys(store.state.cart.subscription).length !== 0) {
        next();
    } else {
        next({name: 'home'});
    }
}

const authGuard = (to, from, next) => {
    const isAuthorized = localStorage.hasOwnProperty('token');
    if (!isAuthorized) {
        next({ name: 'login' });
    } else {
        next();
    }
};

const isAuthorized = (to, from, next) => {
    const isAuthorized = localStorage.hasOwnProperty('token');
    if (isAuthorized) {
        next({ name: 'home' });
    } else {
        next();
    }
};

const managerAuthGuard = (to, from, next) => {
    const isAuthorized = localStorage.hasOwnProperty('token');
    if (!isAuthorized) {
        next({name: 'login'});
    } else if (localStorage.getItem('userRole') !== UserRoles.Coach) {
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
        component: Register,
        beforeEnter: isAuthorized
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter: isAuthorized
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        beforeEnter: authGuard
    },
    {
        path: '/tariff',
        name: 'tariff',
        component: Tariff
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
        props: true,
        beforeEnter: [authGuard, checkoutGuard]
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        beforeEnter: managerAuthGuard
    },
    {
        path: '/dashboard/users',
        name: 'dashboardUsers',
        component: DashboardUsers,
        beforeEnter: managerAuthGuard
    },
    {
        path: '/dashboard/subscriptions',
        name: 'dashboardSubscriptions',
        component: DashboardSubscriptions,
        beforeEnter: managerAuthGuard
    },
    {
        path: '/dashboard/orders',
        name: 'dashboardOrders',
        component: DashboardOrders,
        beforeEnter: managerAuthGuard
    },
    {
        path: '/dashboard/visits',
        name: 'dashboardVisits',
        component: DashboardVisits,
        beforeEnter: managerAuthGuard
    },
    {
        path: '/dashboard/updateSubscription/:id',
        name: 'dashboardUpdateSubscription',
        component: DashboardUpdateSubscription,
        beforeEnter: managerAuthGuard,
        props: true,
    },
    {
        path: '/dashboard/addSubscription',
        name: 'dashboardAddSubscription',
        component: DashboardAddSubscription,
        beforeEnter: managerAuthGuard,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});