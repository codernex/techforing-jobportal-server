import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../utils/errorHandler';

export function errorMiddleware(
  err: ErrorHandler,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Server Error';

  return res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
}
