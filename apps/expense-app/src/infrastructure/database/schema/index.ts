import { integer, serial, text, pgTable, uuid, timestamp, varchar, boolean, pgSchema } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// export const publicSchema = pgSchema("public");

export const expenseCategory = pgTable('expense_category', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  deleted: boolean('deleted').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt'),
  deletedAt: timestamp('deletedAt')
}) 