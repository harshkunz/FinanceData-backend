import { Router } from 'express';
import {
    createUser,
    updateUserRole,
    updateUserStatus,
    deleteUser
} from "../controllers/admin.users.controllers";

import { roleAuthorize } from "../middlewares/role.authorize";
import { validate } from "../middlewares/validate";

import {
  createUserValidation,
  updateRoleValidation,
  updateStatusValidation,
  deleteUserValidation
} from "../validations/admin.users.validation";


const router = Router();


router.post(
    "/users/create", 
    roleAuthorize("ADMIN"),
    createUserValidation,
    validate,
    createUser
);

router.patch(
  "/users/:id/role",
  roleAuthorize("ADMIN"),
  updateRoleValidation,
  validate,
  updateUserRole
);

router.patch(
  "/users/:id/status",
  roleAuthorize("ADMIN"),
  updateStatusValidation,
  validate,
  updateUserStatus
);

router.delete(
  "/users/:id",
  roleAuthorize("ADMIN"),
  deleteUserValidation,
  validate,
  deleteUser
);


export default router;