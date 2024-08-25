import { Request, Response } from "express";

type CreateUserRequest = {
    display_name: string;
    gender: string;
}

export const createUser = async (req: Request<{}, {}, CreateUserRequest>, res: Response) => {
    const { display_name, gender } = req.body;

    try {
        
    } catch (error) {
        console.log("Create User error: ", error)
    }
}