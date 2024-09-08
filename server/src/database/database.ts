import { createPool, Pool, PoolConnection } from 'mysql2/promise';
import config from '../config/config';

class Database {
    private pool: Pool;

    constructor() {
        this.pool = createPool(config.databaseOptions);
    }

    public async getConnection(): Promise<PoolConnection> {
        return await this.pool.getConnection();
    }

}

export default Database;    