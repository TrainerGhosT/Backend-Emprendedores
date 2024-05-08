import * as jwt from 'jsonwebtoken';
import { AuthTokenResult, IUseToken } from '../auth/types/auth.type';

/**
 * Function that decodes a token and checks its expiration status.
 * 
 * @param {string} token - The token to decode.
 * @return {IUseToken | string} An object containing decoded token information or an error message.
 */
export const useToken = (token: string): IUseToken | string => {
  try {
    const decode = jwt.decode(token) as AuthTokenResult;

    const currentDate = Math.floor(Date.now() / 1000); // Current time in seconds
    const expiresDate = decode.exp <= currentDate;

    if (expiresDate) {
      return 'Token has expired';
    }

    return {
      sub: decode.sub,
      role: decode.role,
      isExpired: expiresDate,
    };
  } catch (error) {
    if (error.message === 'jwt expired') {
      return 'Token has expired';
    } else if (error.message === 'invalid signature') {
      return 'Invalid signature';
    } else {
      return 'Token is invalid';
    }
  }
};