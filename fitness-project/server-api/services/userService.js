import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../config.js';
import { pool } from '../utils/db.js';
import { dbQueries } from '../utils/dbQueries.js';
import { promisify } from 'util';

const userService = {};
const poolQuery = promisify(pool.query).bind(pool);

const getJwtToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            isCoach: user.isCoach
        },
        config.JWT_SALT,
        {
            expiresIn: config.JWT_TOKEN_EXPIRES_IN
        }
    )
};

userService.register = async function (body) {
    try {
        const password = body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = {
            firstName: body.firstName,
            lastName: body.lastName,
            description: body.description,
            email: body.email,
            passwordHash: hash,
            birthDate: body.birthDate,
            phone: body.phone,
            isCoach: body.isCoach
        };

        const rows = await poolQuery(dbQueries.findCustomerByEmail(), [doc.email]);
        let error = false;

        if (rows.length > 0) {
            error = true;
            return { error };
        } else {
            await poolQuery(dbQueries.registerCustomer(), [
                doc.firstName,
                doc.lastName,
                doc.email,
                doc.passwordHash,
                doc.description,
                doc.birthDate,
                doc.phone,
                doc.isCoach
            ]);
        }

        const token = getJwtToken(doc);
        const { passwordHash, ...userData } = doc;

        return { error, userData, token };
    } catch (err) {
        throw Error('Error while registering User: ' + err);
    }
};

userService.login = async function (body) {
    try {
        let error = false;

        const rows = await poolQuery(dbQueries.findCustomerByEmail(), [body.email]);
        console.log(rows);

        if (rows.length === 0) {
            error = true;
            return { error };
        }

        const isValidPass = bcrypt.compareSync(body.password, rows[0].passwordHash);

        if (!isValidPass) {
            error = true;
            return { error };
        }

        const token = getJwtToken(rows[0]);
        const { passwordHash, ...userData } = rows[0];
        return { error, userData, token };

    } catch (err) {
        throw Error('Error while logging User: ' + err);
    }
};

userService.getUserById = async function (userId) {
    try {
        let error = false;
        const user = await poolQuery(dbQueries.findById(), ['customers', userId]);

        if (!user) {
            error = true;
            return { error };
        }

        const { passwordHash, ...userData } = user[0];

        return { error, userData };
    } catch (err) {
        throw Error('Error while get User by token: ' + err);
    }
};

userService.getAll = async function (page, pageSize) {
    const totalCount = await poolQuery(dbQueries.count(), ['users_count', 'customers']);
    const users = await poolQuery(dbQueries.getAllWithLimit(), ['customers', page * pageSize, pageSize]);

    if (totalCount && users.length > 0) {
        return { users, totalCount: totalCount[0].users_count };
    }
    return {message: "Error while retrieving users"};
};

export default userService;
 