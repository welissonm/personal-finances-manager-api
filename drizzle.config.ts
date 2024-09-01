import { defineConfig } from 'drizzle-kit';
import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
  schema: './apps/expense-app/src/infrastructure/database/schema/index.ts',
  out: './drizzle',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: process.env.DB_SSL_ENABLED?.toLocaleLowerCase() === 'true',
  }, verbose: true,
  strict: true,
} satisfies Config);