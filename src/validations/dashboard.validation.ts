import { query } from "express-validator";

export const trendValidation = [
  query("type").exists()
    .toUpperCase()
    .isIn(["WEEKLY", "MONTHLY"])
    .withMessage("Type must be WEEKLY or MONTHLY")
];

export const filterValidation = [
  query("type").optional().isIn(["INCOME", "EXPENSE"]),
  query("amount").optional().isFloat(),
  query("categoryName").optional().isString(),
  query("startDate").optional().isISO8601(),
  query("endDate").optional().isISO8601(),
];