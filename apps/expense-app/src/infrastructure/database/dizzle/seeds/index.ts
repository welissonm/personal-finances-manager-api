import 'dotenv/config';

import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from '../schemas';
import { expenseCategorySeedRunner } from './expense-category.seed';

const databaseUrl = process.env.DATABASE_URL;

const pool = new Pool({ 
  connectionString: databaseUrl,
  ssl: process.env.DB_SSL_ENABLED?.toLocaleLowerCase() === 'true',
})


const dbConnection = drizzle(pool, { schema });

async function run(){
  await expenseCategorySeedRunner(dbConnection);
}

run()
  .then(() => console.log('successfully executed seeds!'))
  .catch((error) => { 
    console.error(`seeds execution failured: ${error}`)
    process.exit(0)
  })