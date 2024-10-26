import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

import * as schema from './schemas';

export const DRIZZLE_PROVIDER = Symbol('DRIZZLE');

@Module({
  providers: [
    {
      provide: DRIZZLE_PROVIDER,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
          const databaseUrl = configService.get<string>('DATABASE_URL');
          const pool = new Pool({ 
            connectionString: databaseUrl,
            ssl: process.env.DB_SSL_ENABLED?.toLocaleLowerCase() === 'true',
          })
          return drizzle(pool, { schema })
      },
    }
  ],
  exports: [DRIZZLE_PROVIDER]
})
export class DrizzleModule {}
