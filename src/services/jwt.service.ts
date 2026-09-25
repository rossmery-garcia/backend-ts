import jwt from 'jsonwebtoken';

import type { StringValue } from 'ms';

import { env } from '../config/env';

interface JwtPayload {
  sub: string;
}

class JwtService {
  private readonly accessTokenSecret = env.accessSecret;
  private readonly accessTokenExpiresIn = env.accessExpiresIn as StringValue;

  private readonly refreshTokenSecret = env.refreshSecret;
  private readonly refreshTokenExpiresIn = env.refreshExpiresIn as StringValue;

  generateAccessToken(userId: string): string {
    return jwt.sign(
      {
        sub: userId,
      },
      this.accessTokenSecret,
      {
        expiresIn: this.accessTokenExpiresIn,
      },
    );
  }

  generateRefreshToken(userId: string): string {
    return jwt.sign(
      {
        sub: userId,
      },
      this.refreshTokenSecret,
      {
        expiresIn: this.refreshTokenExpiresIn,
      },
    );
  }

  private verifyToken(token: string, secret: string): JwtPayload {
    const decoded = jwt.verify(token, secret);

    if (typeof decoded === 'string' || typeof decoded.sub !== 'string') {
      throw new Error('Invalid token payload');
    }

    return {
      sub: decoded.sub,
    };
  }

  verifyAccessToken(token: string): JwtPayload {
    return this.verifyToken(token, this.accessTokenSecret);
  }

  verifyRefreshToken(token: string): JwtPayload {
    return this.verifyToken(token, this.refreshTokenSecret);
  }
}

export default new JwtService();
