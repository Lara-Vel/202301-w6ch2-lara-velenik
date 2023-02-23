import mongoose from 'mongoose';

const connectDB = (mongoUrl: string) =>
  new Promise((resolve, reject) => {
    mongoose.connect(mongoUrl, error => {
      if (error) {
        reject(new Error('Error connecting to database'));
      }

      resolve(true);
    });
  });

export default connectDB;
