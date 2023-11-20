import { LoginAPIInstance, DefaultAPIInstance } from "..";

export const SubscriptionsAPI = {
    subscriptions(currentPage, pageSize) {
        const url = `/subscriptions?page=${currentPage}&pageSize=${pageSize}`;
        return LoginAPIInstance.get(url);
    },
    createSubscription(title, description, type, period, price) {
        const url = '/subscriptions';
        const data = {title, description, type, period, price};
        return DefaultAPIInstance.post(url, data);
    },
    updateSubscription(id, title, description, type, period, price) {
        const data = {title, description, type, period, price};
        const url = `subscriptions/${id}`;
        return DefaultAPIInstance.patch(url, data);
    },
    subscription(id) {
        const url = `subscriptions/${id}`;
        return DefaultAPIInstance.get(url);
    },
    deleteSubscription(id) {
        const url = `subscriptions/${id}`;
        return DefaultAPIInstance.delete(url);
    },
}