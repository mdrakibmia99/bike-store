import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authService } from './auth.service';
import { Request, Response } from 'express';
import config from '../../config';

const login = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.body,"test login data req.body")
  const result = await authService.login(req.body);
  const { refreshToken } = result;

  // set refresh token in cookies
  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });
  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: StatusCodes.OK,
    data: {
      token: result.accessToken,
    },
  });
});
const register = catchAsync(async (req, res) => {
  const result = await authService.register(req.body);
  const { _id, name, email } = result;
  sendResponse(res, {
    success: true,
    message: 'User created successfully',
    statusCode: StatusCodes.CREATED,
    data: { _id, name, email },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await authService.refreshToken(refreshToken,res);
  // console.log(result,"controler result");
  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: StatusCodes.OK,
    data: {
      token: result,
    },
  });
});
const logOut=(req:Request,res:Response)=>{
   res.clearCookie('refreshToken');
   sendResponse(res, {
    success: true,
    message: 'Logout',
    statusCode: StatusCodes.OK,
    data: [],
  });
}

export const authController = {
  register,
  login,
  refreshToken,
  logOut
};
