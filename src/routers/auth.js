import { Router } from 'express';

import {
  loginUserSchema,
  registerUserSchema,
  requestResetPasswordSchema,
  resetPasswordSchema,
  confirmOAuthSchema,
} from '../validation/auth.js';
import {
  loginUserController,
  registerUserController,
  logoutUserController,
  refreshSessionController,
  requestResetPasswordController,
  resetPasswordController,
  getOAuthUrlController,
  confirmOAuthController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.post(
  '/register',

  validateBody(registerUserSchema),
  registerUserController,
);

router.post('/login', validateBody(loginUserSchema), loginUserController);

router.post('/logout', logoutUserController);

router.post('/refresh', refreshSessionController);

router.post(
  '/send-reset-email',
  validateBody(requestResetPasswordSchema),
  requestResetPasswordController,
);

router.post(
  '/reset-pwd',
  validateBody(resetPasswordSchema),
  resetPasswordController,
);

router.get('/get-oauth-url', getOAuthUrlController);

router.post(
  '/confirm-oauth',
  validateBody(confirmOAuthSchema),
  confirmOAuthController,
);

export default router;
