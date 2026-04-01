import { Request, Response } from "express";
import { createUserService } from "../services/admin.users.service";
import { 
    CreateUserBody, 
    CreateUserResponse,
    ErrorResponse
} from "../types/admin.users.types";
import { handlePrismaError } from "../utils/prisma.error"


type ApiResponse<T> = 
    | { success: true; data: T } 
    | ErrorResponse


export const createUser = async (
    req: Request<{}, {}, CreateUserBody>,
    res: Response<ApiResponse<CreateUserResponse>>
): Promise<Response> => {
    try {
        const user = await createUserService(req.body);

        const response: CreateUserResponse = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            status: user.status
        };

        return res.status(201).json({
            success: true,
            data: response
        });

    } catch (error: unknown) {
        const handle = handlePrismaError(error, res);
        if(handle) return handle;

        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        });
    }
}


