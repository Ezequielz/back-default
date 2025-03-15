import mongoose from 'mongoose';
import { envs } from '../../../config/envs';
import type { Database } from '../connection/database.d';

export const mongoDB: Database = {
  connect: async () => {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(envs.MONGO_URL, { dbName: envs.MONGO_DB_NAME });
  },
  disconnect: async () => {
    await mongoose.disconnect();
  }
};
