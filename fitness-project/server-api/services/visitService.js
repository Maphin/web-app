import { poolQuery } from '../utils/db.js';
import { dbQueries } from '../utils/dbQueries.js';

const visitService = {};

visitService.getAll = async function (page, pageSize) {
    const totalCount = await poolQuery(dbQueries.count(), ['visits_count', 'visits']);
    const sortRule = 'v.visit_date DESC';
    const visits = await poolQuery(dbQueries.getAllVisitsWithLimit(sortRule), [page * pageSize, pageSize]);

    if (totalCount && visits.length > 0) {
        return { visits, totalCount: totalCount[0].visits_count };
    }
    return {message: "Error while retrieving visits"};
};

visitService.create = async function (userId) {
    try {
        const orders = await poolQuery(dbQueries.findByCustomerId(), ['orders', userId]);
        
        if (orders && orders.length) {
            const order = orders[0];
            let trainingsLeft = order.trainingsLeft;
            if (trainingsLeft !== null && trainingsLeft > 0) {
                await poolQuery(dbQueries.createVisit(), [userId, order.id]);
                await poolQuery(dbQueries.updateOrder(), [trainingsLeft - 1, order.id]);
            } else {
                await poolQuery(dbQueries.createVisit(), [userId, order.id]);
            }
        }
        const visits = await poolQuery(dbQueries.findByCustomerId(), ['visits', userId]);
        if (visits && visits.length > 0) {
            return visits[visits.length - 1];
        }
    } catch (err) {
        throw Error('Trouble appeared while creating a visit');
    }
};

visitService.delete = async function (visitId) {
    try {
        const visit = await poolQuery(dbQueries.findById(), ['visits', visitId]);

        if (visit && visit.length > 0) {
            return await poolQuery(dbQueries.delete(), ['visits', visitId]);
        } else {
            throw Error('Visit with such id does not exist');
        }
        
    } catch (err) {
        throw Error(err);
    }
};

visitService.getOne = async function (visitId) {
    const visit = await poolQuery(dbQueries.findById(), ['visits', visitId]);

    if (visit && visit.length > 0) {
        return visit[0];
    }
    return { message: "Error while retrieving visit" };
};

export default visitService;