import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';
import config from '../../config';
import { createHashPassword } from '../../utils/createHashPassword';
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ['customer', 'admin'],
      default: 'customer',
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: 'N/A',
    },
    phone:{
      type: String,
      default: 'N/A',
    }
  },
  {
    timestamps: true,
  },
);
userSchema.pre('save', async function (next) {
  this.password = await createHashPassword(
    this.password,
    config.bcrypt_salt_round as string,
  );

  next();
});
const User = model('User', userSchema);
export default User;
