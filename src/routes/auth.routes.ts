import { Router } from 'express';

import authController from '../controllers/auth.controller';

import ValidationMiddleware from '../middlewares/validation.middleware';

import { registerUserSchema, loginUserSchema, refreshTokenSchema } from '../schemas/auth.schemas';

const router = Router();

router.post(
  '/register',
  ValidationMiddleware.validate({
    body: registerUserSchema,
  }),
  authController.register,
);
router.post(
  '/login',
  ValidationMiddleware.validate({
    body: loginUserSchema,
  }),
  authController.login,
);
router.post(
  '/refresh',
  ValidationMiddleware.validate({
    body: refreshTokenSchema,
  }),
  authController.refresh,
);

export default router;
