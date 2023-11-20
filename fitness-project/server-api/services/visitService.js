import { pool } from '../utils/db.js';
import { dbQueries } from '../utils/dbQueries.js';
import { promisify } from 'util';

const visitService = {};
const poolQuery = promisify(pool.query).bind(pool);

visitService.getAll = async function (page, pageSize) {
    const totalCount = await poolQuery(dbQueries.count(), ['visits_count', 'visits']);
    const visits = await poolQuery(dbQueries.getAllWithLimit(), ['visits', page * pageSize, pageSize]);

    if (totalCount && visits.length > 0) {
        return { visits, totalCount: totalCount[0].visits_count };
    }
    return {message: "Error while retrieving visits"};
};

visitService.create = async function (userId) {
    try {
        const order = await poolQuery(dbQueries.findByCustomerId(), ['orders', userId]);
        
        if (order && order.length === 1) {
            let trainingsLeft = order[0].trainingsLeft;
            if (trainingsLeft !== null && trainingsLeft > 0) {
                await poolQuery(dbQueries.createVisit(), [userId, order[0].id]);
                await poolQuery(dbQueries.updateOrder(), [trainingsLeft - 1, order[0].id]);
            } else {
                await poolQuery(dbQueries.createVisit(), [userId, order[0].id]);
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
        return { visit: visit[0] };
    }
    return { message: "Error while retrieving visit" };
};

export default visitService;