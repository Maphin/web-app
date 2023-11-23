//import Vue from 'vue';
import actions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters';
import { createStore } from 'vuex';
import { authModule } from './modules/AuthModule/authModule';
import { usersModule } from './modules/UsersModule/usersModule';
import { subscriptionModule } from './modules/SubscriptionsModule/subscriptionsModule';
import { ordersModule } from './modules/OrdersModule/ordersModule';
import { visitsModule } from './modules/VisitsModule/visitsModule';


export const store = createStore({
    state: {

    },
    mutations,
    actions,
    getters,
    modules: {
        auth: authModule,
        users: usersModule,
        subscriptions: subscriptionModule,
        orders: ordersModule,
        visits: visitsModule
    }
})