import { Request, Response } from "express";
import { 
    createTransactionService
} from "../services/admin.transactions.service";

import {
  CreateTransactionBody,
  CreateTransactionResponse,
  ErrorResponse
} from "../types/transactions.types";

import { handlePrismaError } from "../utils/prisma.error";


type ApiResponse<T> = 
    | { success: true; data: T } 
    | ErrorResponse

export const createTransaction = async (
  req: Request<{}, {}, CreateTransactionBody>,
  res: Response<ApiResponse<CreateTransactionResponse>>
): Promise<Response> => {
    try {
        const tx = await createTransactionService(req.body);

        const response: CreateTransactionResponse = {
            id: tx.id,
            userId: tx.userId,
            amount: tx.amount,
            type: tx.type,
            categoryName: tx.categoryName,
            date: tx.date,
            notes: tx.notes
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
            msg: "Failed to create transaction"
        });
    }
}