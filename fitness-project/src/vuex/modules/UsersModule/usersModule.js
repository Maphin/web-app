import { UsersAPI } from "@/api/UsersAPI/usersAPI";

export const usersModule = {
    namespaced: true,

    state() {
        return {
            users: []
        }
    },
    mutations : {
        SET_USERS_TO_STATE(state, data) {
            state.users = data.users;
        }
    },
    actions : {
        async GET_USERS_FROM_API({commit}, {currentPage, pageSize}) {
            const res = await UsersAPI.users(currentPage, pageSize);
            if (res && res.status === 200 && res.data) {
                commit('SET_USERS_TO_STATE', res.data);
            }
            
            return res.data;
        }
    },
    getters: {
        USERS(state) {
            return state.users;
        }
    },
}