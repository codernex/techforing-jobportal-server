import dotenv from 'dotenv';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import { errorMiddleware } from './middleware/err';
import userRouter from './routes/user';
dotenv.config();
async function main(app: Application) {
  app.use(express.json());

  app.use('/api/v1/user', userRouter);

  app.use(errorMiddleware);

  mongoose.connect(process.env.MONGO_URI ? process.env.MONGO_URI : '');
  app.listen(process.env.PORT, () => {
    console.log('Server Running On Port:' + process.env.PORT);
  });
}

main(express()).catch(err => console.log(err));
