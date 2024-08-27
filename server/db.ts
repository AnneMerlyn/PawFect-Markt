import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import * as schema from '@/server/schema';

config({ path: '.env' }); // or .env.local

const sql = neon(process.env.POSTGRES_URL!);
const db = drizzle(sql, { schema, logger: true });
export { db };
