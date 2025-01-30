import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Bike',
      required: [true, 'Product ID is required'],
    },
    productDetails: {
      name: { type: String, required: true },
      brand: { type: String, required: true },
      price: { type: Number, required: true },
    },
    quantity: {
      type: Number,
      min: [1, 'Quantity cannot be less than 1'],
      required: [true, 'Quantity is required'],
    },
    totalPrice: {
      type: Number,
      min: [1, 'Total price cannot be less than 1'],
      required: [true, 'Total price is required'],
    },
    status: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const Order = model<IOrder>('Order', orderSchema);
export default Order;
