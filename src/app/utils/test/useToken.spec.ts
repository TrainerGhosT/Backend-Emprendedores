import { useToken } from '../use.token';
import * as jwt from 'jsonwebtoken';
import { AuthTokenResult, IUseToken } from '../../auth/types/auth.type';

describe('useToken', () => {
  const mockToken = 'mockToken';
  const mockExpiredToken = 'expiredToken'; // Token expirado
  const mockInvalidSignatureToken = 'invalidSignatureToken'; // Token con firma inválida

  const mockDecodedToken: IUseToken = {
    sub: 'mockSub',
    role: 'mockRole',
    isExpired: false,
  };

  const jwtDecodeSpy = jest.spyOn(jwt, 'decode');

  afterEach(() => {
    jwtDecodeSpy.mockClear();
  });

  it('should return decoded token when token is valid', () => {
    jwtDecodeSpy.mockReturnValue(mockDecodedToken);

    const result = useToken(mockToken);

    expect(jwtDecodeSpy).toHaveBeenCalledWith(mockToken);
    expect(result).toEqual(mockDecodedToken);
  });

  it('should return "Token is invalid" when token is invalid', () => {
    jwtDecodeSpy.mockImplementation(() => { throw new Error('Invalid token'); });

    const result = useToken(mockToken);

    expect(jwtDecodeSpy).toHaveBeenCalledWith(mockToken);
    expect(result).toEqual('Token is invalid');
  });

  it('should return token expired message when token is expired', () => {
    // Configurar decode para devolver un token que ha expirado
    const mockExpiredTokenPayload: AuthTokenResult = {
      sub: 'mockSub',
      role: 'mockRole',
      exp: Math.floor(Date.now() / 1000) - 100, // Token expirado hace 100 segundos
      iat: Math.floor(Date.now() / 1000) - 200, // Emitido hace 200 segundos
    };
    jwtDecodeSpy.mockReturnValue(mockExpiredTokenPayload);

    const result = useToken(mockExpiredToken);

    expect(jwtDecodeSpy).toHaveBeenCalledWith(mockExpiredToken);
    expect(result).toEqual('Token has expired');
  });

  it('should return "Invalid signature" when token has invalid signature', () => {
    // Simular un error con mensaje 'invalid signature'
    jwtDecodeSpy.mockImplementation(() => { throw new Error('invalid signature'); });

    const result = useToken(mockInvalidSignatureToken);

    expect(jwtDecodeSpy).toHaveBeenCalledWith(mockInvalidSignatureToken);
    expect(result).toEqual('Invalid signature');
  });
});
