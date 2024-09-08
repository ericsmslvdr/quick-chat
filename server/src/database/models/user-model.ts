import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { CreateUserRequest, User } from '../../types/user-types';
import Database from '../database';

class UserModel {

    constructor(private readonly db: Database) { }

    async create<T extends CreateUserRequest>(userData: T): Promise<User> {
        const { name, socket_id, is_matched } = userData;

        const sql = 'INSERT INTO `users` (`name`, `socket_id`, `is_matched`) VALUES (?, ?, ?)';
        const params = [name, socket_id, is_matched];

        const connection = await this.db.getConnection();

        try {
            const [result] = await connection.execute<ResultSetHeader>(sql, params);
            const id = result.insertId.toString();

            const user = await this.find(id);

            if (!user) {
                throw new Error(`Error fetching newly created user with ID: ${id}`);
            }

            return user;
        } catch (error) {
            throw new Error(`Error creating user: ${error}`)
        } finally {
            connection.release();
        }
    }

    async show(): Promise<User[]> {
        const sql = 'SELECT * FROM `users`';

        const connection = await this.db.getConnection();

        try {
            const [rows] = await connection.execute(sql);
            return rows as User[];
        } catch (error) {
            throw new Error(`Error fetching all users ${error}`);
        } finally {
            connection.release();
        }
    }


    async find(id: string): Promise<User | null> {
        const sql = "SELECT * FROM `users` WHERE `id` = ?";

        const connection = await this.db.getConnection();

        try {
            const [rows] = await connection.execute<RowDataPacket[]>(sql, [id]);

            if (rows.length <= 0) {
                return null;
            }

            return rows[0] as User;
        } catch (error) {
            throw new Error(`Error finding user with ID ${id}: ${error}`)
        } finally {
            connection.release();
        }
    }
}

export default UserModel;