import { SubscriptionsAPI } from '@/api/SubscriptionsAPI/subscriptionsAPI';

export const subscriptionModule = {
    namespaced: true,

    state() {
        return {
            subscriptions: []
        }
    },
    mutations : {
        SET_PRODUCTS_TO_STATE(state, data) {
            state.subscriptions = data.subscriptions;
        },
        SET_NEW_SUBSCRIPTION(state, data) {
            state.subscriptions.push(data);
        },
        EDIT_SUBSCRIPTION(state, {subscriptionId, title, description, type, period, price}) {
            let editableSubscription = state.subscriptions.find(({id}) => id === subscriptionId);
            if (editableSubscription) {
                editableSubscription = {
                    ...editableSubscription,
                    title: title,
                    description: description,
                    type: type,
                    price: price,
                    period: period
                }
            }
        },
        REMOVE_SUBSCRIPTION(state, id) {
            const index = state.subscriptions.findIndex(subscription => subscription.id === id);

            if (index) {
                state.subscriptions.splice(index, 1);
            }
        }
    },
    actions : {
        async GET_SUBSCRIPTIONS_FROM_API({commit}, {currentPage, pageSize, saveState=true}) {
            const res = await SubscriptionsAPI.subscriptions(currentPage, pageSize);
            
            if (res && res.status === 200 && res.data && saveState) {
                commit('SET_PRODUCTS_TO_STATE', res.data);
            }
            
            return res.data;
        },

        async CREATE_SUBSCRIPTION({commit}, {title, description, type, period, price}) {
            const res = await SubscriptionsAPI.createSubscription(title, description, type, period, price);
            if (res && res.status === 200 && res.data) {
                commit('SET_NEW_SUBSCRIPTION', res.data);
            }
            
            return res;
        },

        async UPDATE_DISH({commit}, {id, title, description, type, period, price}) {
            const res = await SubscriptionsAPI.updateSubscription(id, title, description, type, period, price);
            if (res && res.status === 200 && res.data) {
                commit('EDIT_SUBSCRIPTION', {id, title, description, type, period, price});
            }

            return res;
        },

        async GET_ONE_SUBSCRIPTION({commit}, id) {
            const res = await SubscriptionsAPI.subscription(id);

            if (res && res.status === 200 && res.data) {
                return res.data;
            }

            return res;
        },

        async DELETE_SUBSCRIPTION({commit}, id) {
            const res = await SubscriptionsAPI.deleteSubscription(id);
            if (res && res.status === 200 && res.data) {
                commit('REMOVE_SUBSCRIPTION', id);
            }

            return res;
        },
    },
    getters: {
        SUBSCRIPTIONS(state) {
            return state.subscriptions;
        },
    },
}