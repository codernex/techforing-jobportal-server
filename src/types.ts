import { NextFunction, Request, Response } from 'express';

export type ControllerFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<Response | NextFunction | any>;

export interface IUser {
  name: string;
  email: string;
  password: string;
}
