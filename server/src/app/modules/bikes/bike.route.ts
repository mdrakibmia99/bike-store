import express from 'express';
import { bikeController } from './bike.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../Auth/auth.interface';

const bikeRoutes = express.Router();

bikeRoutes.post('/',auth(USER_ROLE.admin), bikeController.createBike);
bikeRoutes.get('/:productId', bikeController.getSpecificBike);
bikeRoutes.put('/:productId',auth(USER_ROLE.admin), bikeController.updateBike);
bikeRoutes.delete('/:productId',auth(USER_ROLE.admin), bikeController.deleteBike);
bikeRoutes.get('/', bikeController.getBikes);

export default bikeRoutes;
