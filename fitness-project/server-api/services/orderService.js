import { poolQuery } from '../utils/db.js';
import { dbQueries } from '../utils/dbQueries.js';

const orderService = {};

orderService.getAll = async function (options) {
    const cond = options.isCoach ? {} : { user: options.authUserId };

    // if user parameter is present and authuser is isCoach - get all orders by user creator
    if (options.isCoach && options.user) {
        cond.user = options.user;
    }

    const totalCount = await poolQuery(dbQueries.count(), ['orders_count', 'orders']);
    const sortRule = 'o.id DESC';
    const orders = await poolQuery(dbQueries.getAllOrdersWithLimit(sortRule), [options.page * options.pageSize, options.pageSize]);

    if (totalCount && orders.length > 0) {
        return { orders, totalCount: totalCount[0].orders_count };
    }
    return {message: "Error while retrieving orders"};
}

orderService.getOne = async function (orderId) {
    const order = await poolQuery(dbQueries.getOneOrder(), [orderId]);

    if (order && order.length > 0) {
        return order[0];
    }
    return {message: "Error while retrieving order"};
};

orderService.create = async function (body, userId) {
    const startDate = new Date();
    const endDate = new Date(startDate);

    const subscription = await poolQuery(dbQueries.findById(), ['subscriptions', body.subscription_id]);

    if (subscription.length < 1) {
        throw Error('Cannot create an order with such subscription_id');
    }

    endDate.setMonth(startDate.getMonth() + subscription[0].period);

    if (subscription && subscription.length > 0) {
        if (subscription[0].type == 0) {
            await poolQuery(dbQueries.createOrder(), [
                userId,
                body.subscription_id,
                endDate,
                null
            ])
        } else if (subscription[0].type == 1) {
            await poolQuery(dbQueries.createOrder(), [
                userId,
                body.subscription_id,
                null,
                subscription[0].period
            ])
        }
    }
    const sortRule = 'dateStart DESC';
    const result = await poolQuery(dbQueries.getAll(sortRule), ['orders']);

    if (result && result.length) {
        return result[result.length - 1];
    }
};

orderService.delete = async function (orderId) {
    const order = await poolQuery(dbQueries.findById(), ['orders', orderId]);

    if (order && order.length) {
        return await poolQuery(dbQueries.delete(), ['orders', orderId]);
    } else {
        throw Error('Order with such id does not exist');
    }
};

orderService.update = async function (body, orderId) {
    const rows = await poolQuery(dbQueries.findById(), ['orders', orderId]);

    if (rows && rows.length > 0) {
        await poolQuery(dbQueries.updateOrder(), [
            body.trainingsLeft,
            orderId
        ]);
    } else {
        throw Error('Could not update order with such id');
    }
};

export default orderService;