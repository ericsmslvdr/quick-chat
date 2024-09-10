import { createPool, Pool, PoolConnection } from 'mysql2/promise';
import config from './config';

export default class Database {
    private pool: Pool;

    constructor() {
        this.pool = createPool(config.databaseOptions);
    }

    public async getConnection(): Promise<PoolConnection> {
        return await this.pool.getConnection();
    }

}