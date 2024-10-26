import { relations } from "drizzle-orm";
import { boolean, date, integer, pgEnum, pgTable, serial, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

// export const publicSchema = pgSchema("public");

export const expenseCategory = pgTable('expense_categories', {
  id: serial('id').primaryKey(),
  description: text('description'),
  name: varchar('name', { length: 128 }).notNull(),
  deleted: boolean('deleted').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt'),
  deletedAt: timestamp('deletedAt')
})

export const expenseType = pgEnum('ExpenseType', ['BILLS_TO_PAY', 'SERVICE_CONTRACTING']);
export const expenseStatus =  pgEnum('ExpenseStatus', ['Open', 'Paid', 'Expired', 'Canceled', 'Reversed']);
export const expenseFrequency =  pgEnum('ExpenseFrequency', ['SINGLE', 'DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL']);
export const expenseActionType =  pgEnum('ExpenseActionType', ['REGISTRATION', 'PAYMENT', 'CANCELLATION', 'REFUND']);

export const expense = pgTable('expenses', {
  id: serial('id').primaryKey(),
  externalCode: varchar('externalCode').notNull(),
  originalAmount: integer('originalAmount').notNull(),
  type: expenseType('type').notNull(),
  categoryId: integer('categoryId').notNull().references(() => expenseCategory.id),
  status: expenseStatus('status').notNull().default(expenseStatus.enumValues['0']),
  dueDate: date('dueDate').notNull(),
  isRecurring: boolean('isRecurring').notNull().default(false),
  frequency: expenseFrequency('frequency'),
  nextDueDate: date('dueDate'),
  description: text('description'),
  deleted: boolean('deleted').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt'),
  deletedAt: timestamp('deletedAt')
}, (table) => ({
  externalCodeUq: uniqueIndex('externalCodeUQ').on(table.externalCode)
}))

export const expenseOcurrence = pgTable('expense_occurrences', {
  id: serial('id').primaryKey(),
  paidAmout: integer('paidAmout').notNull().default(0),
  dueDate: date('dueDate').notNull(),
  paymentDate: date('paymentDate'),
  status: expenseStatus('status').notNull().default(expenseStatus.enumValues['0']),
  expenseId: integer('expenseId').notNull().references(() => expense.id),
  deleted: boolean('deleted').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt'),
  deletedAt: timestamp('deletedAt')
})

export const expenseDocument = pgTable('expense_documents', {
  id: serial('id').primaryKey(),
  fileUri: varchar('fileUri', { length: 256 }).notNull(),
  actionType: expenseActionType('actionType').notNull(),
  uploadedAt: timestamp('uploadedAt').notNull().defaultNow(),
  description: text('description'),
  expenseId: integer('expenseId').notNull().references(() => expense.id),
  expenseOcurrenceId: integer('expenseOcurrenceId').references(() => expenseOcurrence.id),
  deleted: boolean('deleted').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt'),
  deletedAt: timestamp('deletedAt')
})

export const expenseDocumentRelations = relations(expenseDocument, ({ one }) => ({
  expense: one(expense, {
    fields: [expenseDocument.expenseId],
    references: [expense.id],
    relationName: 'expense',
  }),
  expenseOcurrence: one(expenseOcurrence, {
    fields: [expenseDocument.expenseOcurrenceId],
    references: [expenseOcurrence.id],
    relationName: 'expenseOcurrence',
  }),
}))

export const expenseOcurrenceRelations = relations(expenseOcurrence, ({ many, one }) => ({
  document: many(expenseDocument),
  expense: one(expense, {
    fields: [expenseOcurrence.expenseId],
    references: [expense.id],
    relationName: 'expense',
  })
}))

export const expenseRelations = relations(expense, ({ many, one }) => ({
  category: one(expenseCategory, {
    fields: [expense.categoryId],
    references: [expenseCategory.id],
    relationName: 'category',
  }),
  occurrences: many(expenseOcurrence),
  documents: many(expenseDocument)
}))


