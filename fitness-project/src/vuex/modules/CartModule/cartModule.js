export const cartModule = {
    namespaced: true,

    state() {
        return {
            subscription: {}
        }
    },
    mutations: {
        SET_CART: (state, subscription) => {
            state.subscription = {...subscription};
        },
        REMOVE_EVERYTHING_FROM_CART: (state) => {
            state.subscription = {};
        },
    },
    actions: {
        ADD_TO_CART({commit}, subscription) {
            commit('SET_CART', subscription)
        },
        DELETE_EVERYTHING_FROM_CART({commit}) {
            commit('REMOVE_EVERYTHING_FROM_CART');
        }
    },
    getters: {
        CART(state) {
            return state.subscription;
        }
    }
}