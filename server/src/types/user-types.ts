export type User = {
    id: string;
    name: string;
    socket_id: string;
    is_matched: boolean;
    created_at: Date;
    updated_at: Date;
}

export type CreateUserRequest = Omit<User, 'id' | 'created_at' | 'updated_at'>;

export type CreateUserResponse = User & { token?: string };