import { OrdersAPI } from "@/api/OrdersAPI/ordersAPI";

export const ordersModule = {
    namespaced: true,

    state() {
        return {
            orders: []
        }
    },
    mutations : {
        SET_ORDERS_TO_STATE(state, data) {
            state.orders = data.orders;
        },
        EDIT_ORDER(state, {orderId}) {
            const editableOrder = state.orders.find(({id}) => id === orderId);
            if (editableOrder) {
                editableOrder.trainingsLeft -= 1;
            }
        }
    },
    actions : {
        async GET_ORDERS_FROM_API({commit}, {currentPage, pageSize}) {
            const res = await OrdersAPI.orders(currentPage, pageSize);
            if (res && res.status === 200 && res.data) {
                commit('SET_ORDERS_TO_STATE', res.data);
            }
            
            return res.data;
        },
        async GET_USER_ORDERS({commit}, {currentPage, pageSize, userId}) {
            const res = await OrdersAPI.orders(currentPage, pageSize, userId);
            if (res && res.status === 200 && res.data) {
                commit('SET_ORDERS_TO_STATE', res.data);
                return res.data;
            }
            return res;
        },
        async CREATE_ORDER(_, {subscriptionId}) {
            console.log(subscriptionId);
            return await OrdersAPI.createOrder(subscriptionId);
        },
        async UPDATE_ORDER({commit}, {id, trainingsLeft}) {
            const res = await OrdersAPI.updateOrder(id, trainingsLeft);
            if (res && res.status === 200 && res.data) {
                commit('EDIT_ORDER', {id, trainingsLeft});
            }

            return res;
        },
        async GET_ONE_ORDER(_, {id}) {
            const res = await OrdersAPI.order(id);

            if (res && res.status === 200 && res.data) {
                return res.data;
            }

            return res;
        },
    },
    getters: {
        ORDERS(state) {
            return state.orders;
        }
    },
}