import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import User from "../user/user.model";


const blockUser = async (
    userId: string,
  ) => {
    // check blog id from database
    const checkUserId = await User.findById(userId);
    // if blog id not fount it show a error
    if (!checkUserId) {
      throw new AppError(StatusCodes.NOT_FOUND, 'user not found');
    }else if(checkUserId.isBlocked){
      throw new AppError(StatusCodes.BAD_REQUEST, 'User already blocked');}
    // update blog id from database
    const updateBlog = await User.findByIdAndUpdate(userId, {isBlocked:true}, {
      new: true,
    });
    // if blog not updated it show a error
    if (!updateBlog) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'user not blocked! try again later');
    }
   
  };

  export const adminService = {
    blockUser,
  }