/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from '../../errors/AppError';
import { TTokenResponse } from '../Auth/auth.interface';
import Bike from '../bikes/bike.model';
import User from '../user/user.model';
import Order from './order.model';
import { orderUtils } from './order.utils';

// create this service for create a order
const createOrder = async (user: TTokenResponse, payload: { products: { _id: string; quantity: number }[] }, client_ip: string) => {
  const id = user?.userId
  const userData = await User.findById(id)
  if (!payload?.products?.length)
      throw new AppError(403, "Order is not specified");

  const products = payload?.products;


  let totalPrice = 0;
  const productDetails = await Promise.all(
      products.map(async (item) => {
          const product = await Bike.findById(item._id);
          if (product) {
              const subtotal = product ? (product?.price || 0) * item.quantity : 0;
              totalPrice += subtotal;
              return item;
          }
      })
  );

  const transformedProducts: any[] = [];

  productDetails.forEach(product => {
      transformedProducts.push({
          product: product?._id,
          quantity: product?.quantity,
      });
  });


  let order = await Order.create({
      user: id,
      products: transformedProducts,
      totalPrice,
  });

  // payment integration
  const shurjopayPayload = {
      amount: totalPrice,
      order_id: order._id,
      currency: "BDT",
      customer_name: userData?.name,
      customer_address: userData?.address,
      customer_email: userData?.email,
      customer_phone: userData?.phone,
      customer_city: "N/A",
      client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);
  console.log(payment,"payment")
  if (payment?.transactionStatus) {
      order = await order.updateOne({
          transaction: {
              id: payment.sp_order_id,
              transactionStatus: payment.transactionStatus,
          },
      });
  }

  return payment.checkout_url;

}
// create this service for get total revenue
const getTotalRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        // Grouping by null will aggregate all documents
        _id: null,
        // Sum the totalPrice field across all orders
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        // Include only totalRevenue in the result
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  if(result.length ===0){
    return { "totalRevenue": 0}
  }

  return result[0];
};
export const orderService = {
  createOrder,
  getTotalRevenue,
};
