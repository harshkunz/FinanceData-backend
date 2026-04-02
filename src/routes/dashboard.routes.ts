import { Router } from 'express';
import {
  getBalance,
  getTransactionTotalType,
  getRecent,
  getTrends,
  getFilteredRecords,
  getTransactions
} from "../controllers/dashboard.controller";

import { roleAuthorize } from "../middlewares/role.authorize";
import { validate } from "../middlewares/validate";
import { authenticate } from '../middlewares/auth.middleware';

import {
    trendValidation,
    filterValidation,
    paginationValidation
} from "../validations/dashboard.validation";


const router = Router();


router.get(
    "/balance",
    authenticate,
    roleAuthorize("ADMIN", "ANALYST", "VIEWER"),
    getBalance
)

router.get(
    "/type",
    authenticate,
    roleAuthorize("ADMIN", "ANALYST", "VIEWER"),
    getTransactionTotalType
)

router.get(
    "/recent",
    authenticate,
    roleAuthorize("ADMIN", "ANALYST", "VIEWER"),
    getRecent
)

router.get(
    "/trend",
    authenticate,
    roleAuthorize("ADMIN", "ANALYST", "VIEWER"),
    trendValidation,
    validate,
    getTrends
)

// Pagination

router.get(
    "/transactions",
    authenticate,
    roleAuthorize("ADMIN", "ANALYST", "VIEWER"),
    paginationValidation,
    validate,
    getTransactions
)

// Filtering

router.get(
    "/filter/records",
    authenticate,
    roleAuthorize("ADMIN", "ANALYST"),
    filterValidation,
    validate,
    getFilteredRecords
)


export default router;

