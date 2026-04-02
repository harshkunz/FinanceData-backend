import { Request, Response } from "express";
import { 
    getBalanceService,
    getTransactionTotalTypeService,
    getRecentService,
    getTrendsService,
} from "../services/dashboard.service";

import {} from "../types/admin.users.types";

import {
    BalanceResponse,
    TotalByType,
    TransactionResponse,
    ErrorResponse
} from "../types/transactions.types";


export type ApiResponse<T> =
  | { success: true; data: T }
  | ErrorResponse;


export const getBalance = async (
  req: Request,
  res: Response<ApiResponse<BalanceResponse>>
): Promise<Response> => {
    try {
        const user = req.user!;
        const data:BalanceResponse = await getBalanceService(user.id, user.role);

        return res.status(200).json({
            success: true,
            data: data
        });

    } catch (error: unknown) {
        // Prisma Error Handler

        return res.status(500).json({
            success: false,
            msg: "Failed to fetch balance"
        });
    }
};


export const getTransactionTotalType = async (
    req: Request,
    res: Response<ApiResponse<TotalByType[]>>
): Promise<Response> => {
    try {
        const user = req.user!;
        const data: TotalByType[] = await getTransactionTotalTypeService(user.id, user.role);

        return res.status(200).json({
            success: true,
            data: data
        });

    } catch (error: unknown) {
        // Prisma Error Handler

        return res.status(500).json({
            success: false,
            msg: "Failed to fetch total transaction By type"
        });
    }
}

export const getRecent = async (
  req: Request,
  res: Response<ApiResponse<TransactionResponse[]>>
): Promise<Response> => {
    try {
        const user = req.user!;
        const data:TransactionResponse[]  = await getRecentService(user.id, user.role);

        return res.status(200).json({
            success: true,
            data: data
        });

    } catch (error: unknown) {
        // Prisma Error

        return res.status(500).json({
            success: false,
            msg: "Failed to fetch recent transactions"
        });
    }
};

export const getTrends = async (
  req: Request,
  res: Response<ApiResponse<Record<string, number>>>
): Promise<Response> => {
    try {
        const user = req.user!;
        const Qtype = req.query.type as "WEEKLY" | "MONTHLY";

        const data = await getTrendsService(user.id, user.role, Qtype);

        return res.status(200).json({
            success: true,
            data: data
        });

    } catch (error: unknown) {
        // Prisma Error Handler

        return res.status(500).json({
            success: false,
            msg: "Failed to fetch transactions trends"
        });
    }
}


