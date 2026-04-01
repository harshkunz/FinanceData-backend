import { Router } from 'express';
import {
    createUser
} from "../controllers/admin.users.controllers";

import { roleAuthorize } from "../middlewares/role.authorize";
import { validate } from "../middlewares/validate";

import {
  createUserValidation
} from "../validations/admin.users.validation";


const router = Router();

router.post(
    "/users/create", 
    roleAuthorize("ADMIN"),
    createUserValidation,
    validate,
    createUser
);

export default router;