import { Request, Response } from "express";
import { generateToken } from "../utils/generateToken";

export const createSession = async (req: Request, res: Response) => {
    const { display_name, gender } = req.body;

    const token = generateToken({ display_name, gender })

    
}