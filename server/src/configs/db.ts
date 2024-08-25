import mysql from 'mysql2';

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const DB = process.env.DATABASE;

const pool = mysql.createPool({
    host: HOST,
    user: USER,
    database: DB,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
})

export default pool;