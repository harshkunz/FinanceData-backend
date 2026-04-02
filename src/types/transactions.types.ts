export type TransactionType = "INCOME" | "EXPENSE";

export interface CreateTransactionBody {
  userId: number;
  amount: number;
  type: TransactionType;
  categoryName: string;
  date: Date;
  notes?: string;
}

export interface CreateTransactionResponse {
  id: number;
  userId: number;
  amount: number;
  type: TransactionType;
  categoryName: string;
  date: Date;
  notes?: string | null;
}

export interface UpdateTransactionBody {
  amount?: number;
  type?: TransactionType;
  categoryName?: string;
  date?: Date;
  notes?: string | null;
}

export interface TransactionResponse {
  id: number;
  amount?: number;
  type?: TransactionType;
  categoryName?: string;
  date?: Date;
  notes?: string | null;
  msg?: string
}

export type ErrorResponse = {
  success: false;
  msg?: string;
  errors?: {
    field: string;
    message: string;
  }[];
};