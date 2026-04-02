import { body, param } from "express-validator";

export const createTransactionValidation = [
  body("userId").isInt(),
  body("amount").isFloat(),
  body("type").isIn(["INCOME", "EXPENSE"]),
  body("categoryName").isLength({min: 1, max:20 }).toUpperCase(),
  body("date").isISO8601()
];