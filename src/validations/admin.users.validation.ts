import { body, param } from "express-validator";

export const createUserValidation = [
  body("name").isLength({min: 3, max:12 }),
  body("email").isEmail(),
  body("password").isLength({ min: 4 }),
  body("role").isIn(["ADMIN", "ANALYST", "VIEWER"]),
];