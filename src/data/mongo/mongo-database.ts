import mongoose from 'mongoose';

interface Options {
  mongoUrl: string;
  dbName: string;
}

export const connectMongoDB = async ({ mongoUrl, dbName }: Options): Promise<boolean> => {
  try {
    await mongoose.connect(mongoUrl, { dbName });
    return true;
  } catch (error) {
    console.error('Mongo connection error:', error);
    throw error;
  }
};

export const disconnectMongoDB = async (): Promise<void> => {
  await mongoose.disconnect();
};
