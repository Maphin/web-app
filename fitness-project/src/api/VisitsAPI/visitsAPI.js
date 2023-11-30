import { DefaultAPIInstance } from "..";

export const VisitsAPI = {
    visits(paramsData) {
        const url = '/visits';
        const queryParams = {
            params: {
                customerId: paramsData.customerId,
                startDate: paramsData.startDate,
                endDate: paramsData.endDate,
                page: paramsData.currentPage,
                pageSize: paramsData.pageSize
            }
        };
        
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