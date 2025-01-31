//create a interface for user
export interface IUser {
  name: string;
  email: string;
  password: string;
  role?: 'customer' | 'admin';
  isBlocked?: boolean;
  address:string;
  phone:string;
}
