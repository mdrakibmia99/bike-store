import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from '../user/user.validation';
import { authController } from './auth.controller';
import { authValidation } from './auth.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './auth.interface';

const authRouter = Router();
authRouter.get(
  '/me',
  auth(USER_ROLE.customer, USER_ROLE.admin),
  authController.authMe,
);
authRouter.post(
  '/register',
  validateRequest(userValidation.userValidationSchema),
  authController.register,
);
authRouter.post(
  '/login',
  validateRequest(authValidation.loginValidationSchema),
  authController.login,
);
authRouter.post(
  '/refresh-token',
  validateRequest(authValidation.refreshTokenValidationSchema),
  authController.refreshToken,
);
authRouter.patch(
  '/update-password',
  auth(USER_ROLE.customer, USER_ROLE.admin),
  validateRequest(authValidation.updatePasswordValidationSchema),
  authController.updatePassword,
);
authRouter.patch(
  '/update-profile',
  auth(USER_ROLE.customer, USER_ROLE.admin),
  validateRequest(userValidation.userProfileValidationSchema),
  authController.profileUpdate,
);

authRouter.post('/logout', authController.logOut);
export default authRouter;
