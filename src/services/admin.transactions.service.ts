import { db } from "../config/db";
import { CreateTransactionBody } from "../types/transactions.types";


export const createTransactionService = async (
    data: CreateTransactionBody
) => {
    const tx = await db.transaction.create({
        data: {
            ...data,
            date: new Date(data.date)
        }
    })

    return tx;
}