import { DefaultAPIInstance } from "..";

export const OrdersAPI = {
    orders(currentPage, pageSize, userId) {
        const url = `/orders?page=${currentPage}&pageSize=${pageSize}`;
        const queryParams = userId ? {params: {user: userId}} : undefined;
        return DefaultAPIInstance.get(url, queryParams);
    },
    createOrder(subscriptionId) {
        const url = 'orders';
        return DefaultAPIInstance.post(url, {subscription_id: subscriptionId});
    },
    order(id) {
        const url = `orders/${id}`;
        return DefaultAPIInstance.get(url);
    },
    updateOrder(id, isPaid) {
        const url = `orders/${id}`;
        return DefaultAPIInstance.patch(url, {isPaid});
    },
}