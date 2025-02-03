import { NextFunction, Request, Response } from 'express';
import { orderService } from './order.service';
import catchAsync from '../../utils/catchAsync';
import { StatusCodes } from 'http-status-codes';
import { TTokenResponse } from '../Auth/auth.interface';

// create a controller for create o order
const createOrder = catchAsync(async (req, res) => {
  const user=req?.user as TTokenResponse;
  const payload = req.body;
  const result = await orderService.createOrder(user, payload, req.ip!);
  console.log(result,"result")
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Order create successfully',
    statusCode: StatusCodes.OK,
    data:result,
  });
});
// create a controller for get total revenue
const getTotalRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // create a bike use service function
    const result = await orderService.getTotalRevenue();
    // send response
    res.status(201).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    next(err);
  }
};

export const orderController = {
  createOrder,
  getTotalRevenue,
};
