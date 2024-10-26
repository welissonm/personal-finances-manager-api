DO $$ BEGIN
 CREATE TYPE "public"."ExpenseActionType" AS ENUM('REGISTRATION', 'PAYMENT', 'CANCELLATION', 'REFUND');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."ExpenseFrequency" AS ENUM('SINGLE', 'DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."ExpenseStatus" AS ENUM('Open', 'Paid', 'Expired', 'Canceled', 'Reversed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."ExpenseType" AS ENUM('BILLS_TO_PAY', 'SERVICE_CONTRACTING');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "expenses" (
	"id" serial PRIMARY KEY NOT NULL,
	"externalCode" varchar NOT NULL,
	"originalAmount" integer NOT NULL,
	"type" "ExpenseType" NOT NULL,
	"categoryId" integer NOT NULL,
	"status" "ExpenseStatus" DEFAULT 'Open' NOT NULL,
	"dueDate" date,
	"isRecurring" boolean DEFAULT false NOT NULL,
	"frequency" "ExpenseFrequency",
	"description" text,
	"deleted" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp,
	"deletedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "expense_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text,
	"name" varchar(128) NOT NULL,
	"deleted" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp,
	"deletedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "expense_documents" (
	"id" serial PRIMARY KEY NOT NULL,
	"fileUri" varchar(256) NOT NULL,
	"actionType" "ExpenseActionType" NOT NULL,
	"uploadedAt" timestamp DEFAULT now() NOT NULL,
	"description" text,
	"expenseId" integer NOT NULL,
	"expenseOcurrenceId" integer,
	"deleted" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp,
	"deletedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "expense_occurrences" (
	"id" serial PRIMARY KEY NOT NULL,
	"paidAmout" integer DEFAULT 0 NOT NULL,
	"dueDate" date NOT NULL,
	"paymentDate" date,
	"status" "ExpenseStatus" DEFAULT 'Open' NOT NULL,
	"expenseId" integer NOT NULL,
	"deleted" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp,
	"deletedAt" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expenses" ADD CONSTRAINT "expenses_categoryId_expense_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."expense_categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense_documents" ADD CONSTRAINT "expense_documents_expenseId_expenses_id_fk" FOREIGN KEY ("expenseId") REFERENCES "public"."expenses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense_documents" ADD CONSTRAINT "expense_documents_expenseOcurrenceId_expense_occurrences_id_fk" FOREIGN KEY ("expenseOcurrenceId") REFERENCES "public"."expense_occurrences"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense_occurrences" ADD CONSTRAINT "expense_occurrences_expenseId_expenses_id_fk" FOREIGN KEY ("expenseId") REFERENCES "public"."expenses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "externalCodeUQ" ON "expenses" USING btree ("externalCode");