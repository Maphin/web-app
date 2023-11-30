import { poolQuery } from '../utils/db.js';
import { dbQueries } from '../utils/dbQueries.js';

const visitService = {};

visitService.getAll = async function (params) {
    const sortRule = 'v.visit_date DESC';
    let conditions = [];
    let condition = '';

    if (params.customerId) {
        conditions.push('v.customer_id = ' + params.customerId);
    }
    if (params.startDate) {
        conditions.push(`v.visit_date >= '${params.startDate}'`);
    }
    if (params.endDate) {
        conditions.push(`v.visit_date <= '${params.endDate}'`);
    }
    if (conditions.length) {
        condition = conditions.join(' AND ');
    }

    const totalCount = await poolQuery(dbQueries.getCountVisits(condition), ['visits_count', 'visits']);
    const visits = await poolQuery(dbQueries.getAllVisitsWithLimit(condition, sortRule), [params.page * params.pageSize, params.pageSize]);

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