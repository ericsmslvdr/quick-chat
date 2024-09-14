import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { IUserRepository } from "../../../application/interfaces/repositories/user-repository.interface";
import { User } from "../../../domain/entities/user.entity";
import { MySQLDatabaseService } from "../mysql-database.service";

export class MySQLUserRepository implements IUserRepository {

    constructor(private readonly databaseService: MySQLDatabaseService) { }

    /**
     * INSERT, UPDATE, DELETE uses ResultSetHeader
     * SELECT uses RowDataPacket[]
     */

    /**
     * 
     * @param name : string
     * @param socketId : string
     * @returns User
     */
    async create(name: string, socketId: string): Promise<User> {
        const sql = "INSERT INTO users (`name`, `socket_id`) VALUES (?, ?)";
        const params = [name, socketId];

        const connection = await this.databaseService.getConnection();

        try {
            const [result] = await connection.execute<ResultSetHeader>(sql, params);
            const id = result.insertId;
            return await this.find(id);
        } catch (error) {
            throw new Error('User creation faile :(');
        } finally {
            connection.release();
        }
    }

    /**
     * 
     * @param userId : number
     * @returns User
     */
    async find(userId: number): Promise<User> {
        const sql = "SELECT * FROM `users` WHERE `id` = ?";
        const params = [userId];

        const connection = await this.databaseService.getConnection()

        try {
            const [rows] = await connection.execute<RowDataPacket[]>(sql, params);
            const user = rows[0];

            return new User(user.id, user.name, user.socket_id, user.created_at);
        } catch (error) {
            throw new Error(`Error finding a user with id of ${userId}`);
        } finally {
            connection.release();
        }
    }

    /**
     * 
     * @param userId : number
     */
    async delete(userId: number): Promise<void> {
        const sql = "DELETE FROM `users` WHERE `id` = ?";
        const params = [userId];

        const connection = await this.databaseService.getConnection();

        try {
            const [result] = await connection.execute<ResultSetHeader>(sql, params);
            console.log(`THIS IS DELETE RES: ${JSON.stringify(result)}`);

        } catch (error) {
            throw new Error(`Error deleting user with id of ${userId}`);
        } finally {
            connection.release();
        }
    }
}