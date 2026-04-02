import { query } from "express-validator";

export const trendValidation = [
  query("type").exists()
    .toUpperCase()
    .isIn(["WEEKLY", "MONTHLY"])
    .withMessage("Type must be WEEKLY or MONTHLY")
];