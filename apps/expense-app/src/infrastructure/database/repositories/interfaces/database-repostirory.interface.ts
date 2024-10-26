export interface DatabaseRepository<T, K> {
  findOne(): Promise<T | undefined>;
  findMany(): Promise<T[]>;
  save(entity: Partial<T>): Promise<T>;
  update(entity: Partial<T>): Promise<T>;
  delete(id: K): Promise<T>;
  insert(entity: Partial<T>): Promise<T>;
  softDelete(id: K): Promise<T>;
  recover(id: K): Promise<T>;
}