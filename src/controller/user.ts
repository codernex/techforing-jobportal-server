import { Response } from 'express';
import User from '../models/user';
import { ControllerFn, IUser } from '../types';
import { ErrorHandler } from '../utils/errorHandler';

export const getUsers: ControllerFn = async (_req, res: Response, _next) => {
  const users = await User.find();

  return res.status(200).json(users);
};

export const createUser: ControllerFn = async (req, res, next) => {
  const { email } = req.body as IUser;

  let user = await User.findOne({ email });

  if (user) {
    return next(
      new ErrorHandler('User Already Exist, Please Try to login', 400)
    );
  }

  user = await User.create(req.body);

  return res.status(201).json(user);
};
