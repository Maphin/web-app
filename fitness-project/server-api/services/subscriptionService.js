import { poolQuery } from '../utils/db.js';
import { dbQueries } from '../utils/dbQueries.js';

const subscriptionService = {};

subscriptionService.getAll = async function (page, pageSize) {
    const totalCount = await poolQuery(dbQueries.count(), ['subscriptions_count', 'subscriptions']);
    const sortRule = 'type ASC';
    const subscriptions = await poolQuery(dbQueries.getAllWithLimit(sortRule), ['subscriptions', page * pageSize, pageSize]);

    if (totalCount && subscriptions.length > 0) {
        return { subscriptions, totalCount: totalCount[0].subscriptions_count };
    }
    return {message: "Error while retrieving subscriptions"};
};

subscriptionService.getOne = async function (subscriptionId) {
    const subscription = await poolQuery(dbQueries.findById(), ['subscriptions', subscriptionId]);

    if (subscription && subscription.length > 0) {
        return subscription[0];
    }
    return {message: "Error while retrieving subscription"};
};

subscriptionService.create = async function (body) {
    let error = false;

    const rows = await poolQuery(dbQueries.findSubscriptionByTitle(), [body.title]);

    if (rows && rows.length > 0) {
        error = true;
        return { error };
    }
    await poolQuery(dbQueries.createSubscription(), [
        body.title,
        body.description,
        body.type,
        body.period,
        body.price,
    ])
    const subscription = await poolQuery(dbQueries.findSubscriptionByTitle(), [body.title]);

    if (subscription && subscription.length) {
        return subscription[0];
    } else {
        throw Error('Fail to create a subscription');
    }
};

subscriptionService.delete = async function (subscriptionId) {
    const rows = await poolQuery(dbQueries.findById(), ['subscriptions',subscriptionId]);

    if (rows && rows.length > 0) {
        await poolQuery(dbQueries.delete(), [`subscriptions`, subscriptionId]);
    }
};

subscriptionService.update = async function (body, subscriptionId) {
    const rows = await poolQuery(dbQueries.findById(), ['subscriptions', subscriptionId]);

    if (rows && rows.length > 0) {
        await poolQuery(dbQueries.updateSubscription(), [
            body.title,
            body.description,
            body.type,
            body.period,
            body.price,
            subscriptionId
        ]);
    } else {
        throw Error('Could not update subscription with such id');
    }
};

export default subscriptionService;