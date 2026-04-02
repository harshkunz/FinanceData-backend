import { Router } from 'express';
import {
  createTransaction,
  updateTransaction,
  deleteTransaction
} from "../controllers/admin.transactions.controller";

import { roleAuthorize } from "../middlewares/role.authorize";
import { validate } from "../middlewares/validate";
import { authenticate } from '../middlewares/auth.middleware';

import {
  createTransactionValidation,
  updateTransactionValidation,
  deleteTransactionValidation
} from "../validations/admin.transactions.validation";


const router = Router();


router.post(
  "/",
  authenticate,
  roleAuthorize("ADMIN"),
  createTransactionValidation,
  validate,
  createTransaction
);

router.patch(
  "/:id",
  authenticate,
  roleAuthorize("ADMIN"),
  updateTransactionValidation,
  validate,
  updateTransaction
);

router.delete(
  "/:id",
  authenticate,
  roleAuthorize("ADMIN"),
  deleteTransactionValidation,
  validate,
  deleteTransaction
);

export default router;