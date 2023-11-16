import { LoginAPIInstance } from "..";

export const RegisterAPI = {
    register(userData, isCoach) {
        const url = '/auth/register';
        const data = {...userData, isCoach};
        return LoginAPIInstance.post(url, data);
    }
}