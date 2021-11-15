import dotenv from 'dotenv';

const envPath = process.env.NODE_ENV !== 'prod' ? '.env.dev' : '.env';

dotenv.config({ path: envPath });
