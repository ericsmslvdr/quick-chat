
export interface IDatabaseService { 
    query(sql: string, params?: unknown[]): Promise<unknown>;
    close(): Promise<void>;
}