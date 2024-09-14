import { createPool, Pool, PoolConnection } from "mysql2/promise";
import config from "../config/database.config";

export class MySQLDatabaseService {
    private pool: Pool;

    constructor() {
        this.pool = createPool(config.databaseOptions);
    }

    async getConnection(): Promise<PoolConnection> {
        return await this.pool.getConnection();
    }
}