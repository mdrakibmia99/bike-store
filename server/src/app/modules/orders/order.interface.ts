import { Types } from "mongoose";


export interface IOrder {
  user: Types.ObjectId;
  product: Types.ObjectId;
  productDetails: {
    name: string;
    brand: string;
    price: number;
  };
  quantity: number;
  totalPrice: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
}
