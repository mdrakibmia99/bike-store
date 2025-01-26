import jwt, { SignOptions } from 'jsonwebtoken';
export const createToken = (
  jwtPayload: Record<string, unknown>,
  secret: string,
  expiresIn: SignOptions['expiresIn'],
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};
