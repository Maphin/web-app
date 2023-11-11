import jwt from 'jsonwebtoken';
import config from '../config.js';

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            const decoded = jwt.verify(token, config.JWT_SALT);

            req.userId = decoded.id;
            req.isCoach = decoded.isCoach;
            next();
        } catch (e) {
            return res.status(403).json({
                message: 'No access',
            });
        }
    } else {
        return res.status(403).json({
            message: 'No access',
        });
    }
};