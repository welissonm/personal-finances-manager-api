import * as schema from '../schemas';
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

export type SchemaType = typeof schema;

export type DbConnectionType = NodePgDatabase<SchemaType>