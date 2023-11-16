import { LoginAPIInstance, DefaultAPIInstance } from "..";

export const AuthAPI = {
    login(email, password) {
        const url = '/auth/login';
        const data = {email, password};
        return LoginAPIInstance.post(url, data);
    },
    getUserByToken() {
        const url = '/auth/me';
        return DefaultAPIInstance.get(url);
    }
}