import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../config.js';
import { pool } from '../utils/db.js';
import { dbQueries } from '../utils/dbQueries.js';

const userService = {};

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

userService.register = async function(body) {
    try {
        console.log(body);
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

        pool.query(dbQueries.registerCustomer(), [doc.firstName, doc.lastName, doc.email, doc.passwordHash, doc.description, doc.birthDate, doc.phone, doc.isCoach], function(err, rows, fields) {
            if (err) {
                console.log(err);
            } else {
                pool.query(dbQueries.getAllCustomers(), function(err, rows, fields) {
                    console.log(rows);
                })
            }
        });

        const token = getJwtToken(user);
        const {passwordHash, ...userData} = doc;

        return {userData, token};
    } catch (err) {
        throw Error('Error while registering User: ' + err);
    }
}

export default userService;
 