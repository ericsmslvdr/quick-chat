import { createPool, Pool, PoolConnection } from "mysql2/promise";
import config from "./database.config";

export class DatabaseService {
    private pool: Pool;

    constructor() {
        this.pool = createPool(config.databaseOptions);
    }

    async getConnection(): Promise<PoolConnection> {
        return await this.pool.getConnection();
    }
}