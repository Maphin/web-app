import { VisitsAPI } from "@/api/VisitsAPI/visitsAPI";

export const visitsModule = {
    namespaced: true,

    state() {
        return {
            visits: []
        }
    },
    mutations : {
        SET_VISITS_TO_STATE(state, data) {
            state.visits = data.visits;
        },
        // EDIT_ORDER(state, {orderId}) {
        //     const editableOrder = state.orders.find(({id}) => id === orderId);
        //     if (editableOrder) {
        //         editableOrder.trainingsLeft -= 1;
        //     }
        // }
    },
    actions : {
        async GET_VISITS_FROM_API({commit}, params) {
            const res = await VisitsAPI.visits(params);
            if (res && res.status === 200 && res.data) {
                commit('SET_VISITS_TO_STATE', res.data);
            }
            
            return res.data;
        },
        async CREATE_VISIT(_, {userId}) {
            return await VisitsAPI.createVisit(userId);
        },
        async GET_ONE_VISIT(_, {id}) {
            const res = await VisitsAPI.visit(id);
            if (res && res.status === 200 && res.data) {
                return res.data;
            }

            return res;
        },
    },
    getters: {
        VISITS(state) {
            return state.visits;
        }
    },
}