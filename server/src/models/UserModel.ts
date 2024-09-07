import { ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/IUser';
import Database from '../database/Database';

class UserModel {
    private db: Database;

    constructor() {
        this.db = new Database();
    }

    public async create<T extends Omit<IUser, 'id'>>(userData: T): Promise<IUser> {
        const { name, socket_id, is_matched } = userData;

        const sql = 'INSERT INTO users (name, socket_id, is_matched) VALUES (?, ?, ?)';
        const params = [name, socket_id, is_matched];

        const connection = await this.db.getConnection();

        try {
            const [result] = await connection.execute<ResultSetHeader>(sql, params);
            const id = result.insertId.toString();
            return {
                id,
                ...userData,
                result
            }
        } catch (error) {
            throw new Error(`Error creating user: ${error}`)
        } finally {
            connection.release();
        }
    }

    public async show() {
        const sql = 'SELECT * FROM users';

        const connection = await this.db.getConnection();

        try {
            const [rows] = await connection.execute(sql);
            return rows;
        } catch (error) {
            throw new Error(`Error fetching all users ${error}`);
        } finally {
            connection.release();
        }
    }
}

export default UserModel;