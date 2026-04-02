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
  userId?: number;
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

export interface BalanceResponse {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
};

export type GroupedType = {
  type: TransactionType;
  _sum: { amount: number | null };
};

export interface TotalByType {
  type: TransactionType,
  amount: number
}

export interface TrandResponse {
  id: number;
  amount: number;
  type: TransactionType;
  categoryName?: string;
  date: Date;
}