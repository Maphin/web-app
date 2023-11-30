import mysql from 'mysql2';
import { promisify } from 'util';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'YOUR_PASSWORD',
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
