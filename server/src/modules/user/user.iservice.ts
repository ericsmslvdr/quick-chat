import { CreateUserDTO, UserByIdDTO } from '../../shared/dtos/user.dto';
import { User } from './user.entity';

export interface IUserService {
    createUser(input: CreateUserDTO): Promise<User>;
    findById(input: UserByIdDTO): Promise<User | null>;
    deleteById(input: UserByIdDTO): Promise<boolean>;
}