import type { Request, Response, NextFunction } from 'express';

import JwtService from '../services/jwt.service';

class AuthenticationMiddleware {
  constructor() {
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate(req: Request, res: Response, next: NextFunction): void {
    const accessToken = this.extractAccessToken(req, res);

    if (!accessToken) {
      return;
    }

    try {
      const payload = JwtService.verifyAccessToken(accessToken);

      req.userId = payload.sub;

      return next();
    } catch (_error) {
      res.status(401).json({
        error: {
          code: 'UNAUTHORIZED',
          message: 'Invalid or expired access token',
        },
      });
    }
  }

  private extractAccessToken(req: Request, res: Response): string | null {
    const authorization = req.headers.authorization;

    if (!authorization) {
      res.status(401).json({
        error: {
          code: 'UNAUTHORIZED',
          message: 'Authentication required',
        },
      });

      return null;
    }

    const [scheme, token] = authorization.split(' ');

    if (scheme !== 'Bearer' || !token) {
      res.status(401).json({
        error: {
          code: 'UNAUTHORIZED',
          message: 'Invalid authorization header',
        },
      });

      return null;
    }

    return token;
  }
}

export default new AuthenticationMiddleware();
