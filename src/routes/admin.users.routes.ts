import { Router } from 'express';
import {
    createUser,
    updateUserRole,
    updateUserStatus,
    deleteUser
} from "../controllers/admin.users.controllers";

import { roleAuthorize } from "../middlewares/role.authorize";
import { validate } from "../middlewares/validate";
import { authenticate } from '../middlewares/auth.middleware';

import {
  createUserValidation,
  updateRoleValidation,
  updateStatusValidation,
  deleteUserValidation
} from "../validations/admin.users.validation";


const router = Router();


router.post(
    "/users/create", 
    authenticate,
    roleAuthorize("ADMIN"),
    createUserValidation,
    validate,
    createUser
);

router.patch(
  "/users/:id/role",
  authenticate,
  roleAuthorize("ADMIN"),
  updateRoleValidation,
  validate,
  updateUserRole
);

router.patch(
  "/users/:id/status",
  authenticate,
  roleAuthorize("ADMIN"),
  updateStatusValidation,
  validate,
  updateUserStatus
);

router.delete(
  "/users/:id",
  authenticate,
  roleAuthorize("ADMIN"),
  deleteUserValidation,
  validate,
  deleteUser
);


export default router;