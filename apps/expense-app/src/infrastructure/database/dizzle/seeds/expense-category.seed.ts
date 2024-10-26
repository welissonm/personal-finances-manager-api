import * as schema from '../schemas';
import { ExpenseCategory } from "apps/expense-app/src/domain/models/expense";
import { SeedRunner } from "../interfaces/seed-runner.interface";
import type { DbConnectionType } from 'apps/expense-app/src/infrastructure/database/dizzle/@types/drizzle';

export const expenseCategorySeedRunner: SeedRunner<number> = async function execute(dbConnection: DbConnectionType): Promise<number[]> {
  const categories: Omit<ExpenseCategory, 'id'>[] = [
    {
      name: 'Casa',
      description: 'Despesas domésticas como água, luz, internet, streamings e etc.',
    },
    {
      name: 'Transporte',
      description: 'Despesas com transporte e veículos'
    },
    {
      name: 'Parentes',
      description: 'Despesas relacionadas a membros dos parentes como irmão ou irmã, país e etc.'
    },
    {
      name: 'Igreja',
      description: 'Despesas relacionado a igreja; dízimo, ofertas e eventos.'
    },
    {
      name: 'Formação',
      description: 'Despesas relacionados a cursos e treinamentos voltados a formação.'
    },
    {
      name: 'Saúde',
      description: 'Despesa relacionado a saúde familiar'
    },
    {
      name: 'Alimentação',
      description: 'Despesas relacionadas exclusivamente a alimentação familiar.'
    }, 
    {
      name: 'Lazer',
      description: 'Despesas relacionadas ao lazer. Restaurantes, viagens, shows, clubes, ida à praia e etc.'
    },
    {
      name: 'Escritório',
      description: 'Despesas relacionados a escritório'
    }
  ]

  const results = await dbConnection.insert(schema.expenseCategory).values(categories).returning({ id: schema.expenseCategory.id });
  return results.map( result => result.id );
}