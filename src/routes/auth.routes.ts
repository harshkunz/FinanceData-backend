import { Router } from 'express';
import {
    login,
    refresh,
    logout
} from "../controllers/auth.controller";

import { loginValidation } from '../validations/auth.validation';
import { validate } from '../middlewares/validate';
import { authenticate } from '../middlewares/auth.middleware';
import { loginLimiter } from '../middlewares/rateLimiter';

const router = Router();

router.post("/login", loginLimiter, loginValidation, validate, login);
router.post("/refresh", refresh);
router.post("/logout", authenticate, logout);

export default router;