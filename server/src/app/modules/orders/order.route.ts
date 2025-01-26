import express from 'express';
import { orderController } from './order.controller';
import { USER_ROLE } from '../Auth/auth.interface';
import auth from '../../middlewares/auth';
const orderRoutes = express.Router();

orderRoutes.get('/revenue',auth(USER_ROLE.admin), orderController.getTotalRevenue);
orderRoutes.post('/',auth(USER_ROLE.customer), orderController.createOrder);

export default orderRoutes;
