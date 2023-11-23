import { DefaultAPIInstance } from "..";

export const VisitsAPI = {
    visits(currentPage, pageSize, userId) {
        const url = `/visits?page=${currentPage}&pageSize=${pageSize}`;
        const queryParams = userId ? {params: {user: userId}} : undefined;
        return DefaultAPIInstance.get(url, queryParams);
    },
    visit(id) {
        const url = `visits/${id}`;
        return DefaultAPIInstance.get(url);
    },
    createVisit(userId) {
        const url = 'visits';
        return DefaultAPIInstance.post(url, userId);
    }
}