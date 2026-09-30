import type { Request, Response, NextFunction } from 'express';
import type { ZodType } from 'zod';

interface ValidationSchemas {
  body?: ZodType;
  params?: ZodType;
  query?: ZodType;
}

class ValidationMiddleware {
  validate(schemas: ValidationSchemas) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const locations = ['body', 'params', 'query'] as const;

      for (const location of locations) {
        const schema = schemas[location];

        if (!schema) {
          continue;
        }

        const result = schema.safeParse(req[location]);

        if (!result.success) {
          res.status(400).json({
            error: {
              code: 'VALIDATION_ERROR',
              message: `Invalid request ${location}`,
              details: result.error.issues,
            },
          });
          return;
        }

        req[location] = result.data;
      }

      next();
    };
  }
}

export default new ValidationMiddleware();
