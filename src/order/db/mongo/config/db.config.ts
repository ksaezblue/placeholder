import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  name: process.env.MONGO_DB,
  user: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  connectTimeoutMS: process.env.MONGO_CONNECT_TIMEOUT,
  maxPoolSize: process.env.MONGO_MAX_POOL_SIZE,
  minPoolSize: process.env.MONGO_MIN_POOL_SIZE,
  serverSelectionTimeoutMS: process.env.MONGO_SERVER_SELECTION_TIMEOUT,
  maxIdleTimeMS: process.env.MONGO_MAX_ID_LETIME,
}));
