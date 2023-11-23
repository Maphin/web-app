import { DefaultAPIInstance } from "..";

export const UsersAPI = {
    users(currentPage, pageSize) {
        const url = `/users?page=${currentPage}&pageSize=${pageSize}`;
        return DefaultAPIInstance.get(url);
    },
    user(id) {
        const url = `users/${id}`;
        return DefaultAPIInstance.get(url);
    },
}