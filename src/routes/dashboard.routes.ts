import { Router } from 'express';
import {
  getBalance,
  getTransactionTotalType,
  getRecent,
  getTrends
} from "../controllers/dashboard.controller";

import { roleAuthorize } from "../middlewares/role.authorize";
import { validate } from "../middlewares/validate";

import {
    trendValidation
} from "../validations/dashboard.validation";


const router = Router();


router.get(
    "/balance",
    roleAuthorize("ADMIN", "ANALYST", "VIEWER"),
    getBalance
)

router.get(
    "/type",
    roleAuthorize("ADMIN", "ANALYST", "VIEWER"),
    getTransactionTotalType
)

router.get(
    "/recent",
    roleAuthorize("ADMIN", "ANALYST", "VIEWER"),
    getRecent
)

router.get(
    "/trend",
    roleAuthorize("ADMIN", "ANALYST", "VIEWER"),
    trendValidation,
    validate,
    getTrends
)

export default router;

