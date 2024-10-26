import type { DbConnectionType } from 'apps/expense-app/src/infrastructure/database/dizzle/@types/drizzle';

export interface SeedRunner<T> {
  (dbConnection: DbConnectionType): Promise<T[]>
}

// export interface SeedRunner<T> {
//   run: (dbConnection: DbConnectionType) => Promise<T[]>
// }