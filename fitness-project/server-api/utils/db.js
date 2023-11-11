import mysql from 'mysql2';
import { dbQueries } from './dbQueries.js';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'davidmysql123!',
    database: 'fitnessdb',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});
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