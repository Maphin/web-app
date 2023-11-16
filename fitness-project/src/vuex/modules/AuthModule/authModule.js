import { DefaultAPIInstance } from "@/api"
import { AuthAPI } from "@/api/AuthAPI/authAPI"
import { RegisterAPI } from "@/api/RegisterAPI/registerAPI"

export const UserRoles = {
    Guest: 'guest',
    Customer: 'customer',
    Coach: 'coach'
}

export const authModule = {
    namespaced: true,

    state() {
        return {
            credentials: {
                token: localStorage.getItem('token') || null,
                userRole: localStorage.getItem('userRole') || UserRoles.Guest
            }
        }
    },
    getters: {
        GET_USER_ROLE(state) {
            return state.credentials.userRole;
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.credentials.token = token;
            localStorage.setItem('token', token);
        },
        SET_USER_ROLE(state, isCoach) {
            if (isCoach) {
                state.credentials.userRole = UserRoles.Coach;
                localStorage.setItem('userRole', UserRoles.Coach);
            } else {
                state.credentials.userRole = UserRoles.Customer;
                localStorage.setItem('userRole', UserRoles.Customer);
            }
        },
        DELETE_TOKEN(state) {
            state.credentials.token = null;
            localStorage.removeItem('token');
        },
        DELETE_USER_ROLE(state) {
            state.credentials.userRole = UserRoles.Guest;
            localStorage.removeItem('userRole');
        },
    },

    actions: {
        async onLogin({commit}, {email, password}) {
            console.log(email, password);
            const res = await AuthAPI.login(email, password);

            if (res && res.status === 200 && res.data) {
                commit('SET_TOKEN', res.data.token);
                commit('SET_USER_ROLE', res.data.isCoach);
                
                DefaultAPIInstance.defaults.headers['authorization'] = `Bearer ${res.data.token}`;
            }
            
            return res;
        },

        onLogout({commit}) {
            commit('DELETE_TOKEN');
            commit('DELETE_USER_ROLE');
            delete DefaultAPIInstance.defaults.headers['authorization'];
        },

        async onRegister({commit}, userData) {
            const res = await RegisterAPI.register(userData, 0);
            
            if (res && res.status === 200 && res.data) {
                return res.data;
            }
            return res; 
        },

        async GET_USER_BY_TOKEN() {
            const res = await AuthAPI.getUserByToken();
            if (res && res.status === 200 && res.data) {
                return res.data;
            }

            return res;
        }
    }
}