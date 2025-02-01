import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import { adminService } from './admin.service';

const blockUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;
  // console.log(userId,"admin user id")
  await adminService.blockUser(userId);
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'User blocked successfully',
    statusCode: StatusCodes.OK,
  });
});
const getUsers = catchAsync(async (req, res) => {
  const queryData = req?.query;
  //  get bike use bike service function
  const result = await adminService.getUsers(queryData);
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'All users get successfully',
    statusCode: StatusCodes.OK,
    data: result.result,
    meta:result.meta
  });
});

export const adminController = {
  blockUser,
  getUsers
};
