import { Router } from 'express';
import {
  createTransaction
} from "../controllers/admin.transactions.controller";

import { roleAuthorize } from "../middlewares/role.authorize";
import { validate } from "../middlewares/validate";

import {
  createTransactionValidation
} from "../validations/admin.transactions.validation";


const router = Router();


router.post(
  "/",
  roleAuthorize("ADMIN"),
  createTransactionValidation,
  validate,
  createTransaction
);

export default router;