import mysql from 'mysql2';
import { promisify } from 'util';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'nata159753',
    database: 'fitnessdb',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

export const poolQuery = promisify(pool.query).bind(pool);
// pool.query(dbQueries.updateCustomerDescription(), ["Hi, I'm Mary", 4], function(err, rows, fields) {
//     // console.log(rows);
//     if (err) {
//         console.log(err)
//     } else {
//         pool.query(dbQueries.getAllCustomers(), function(err, rows, fields) {
//             console.log(rows);
//         })
//     }
// });