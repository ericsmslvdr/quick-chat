
export interface BaseService<TInput, TOutput> {
    createUser(input: TInput): Promise<TOutput>;
    findById(input: TInput): Promise<TOutput>;
    deleteById(input: TInput): Promise<boolean>;
}