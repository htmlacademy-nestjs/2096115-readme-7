import { Entity } from '@project/core';

export interface Repository<T extends Entity> {
  getAll(): Promise<T[]>;
  findById(id: T['id']): Promise<T | null>;
  save(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  deleteById(id: T['id']): Promise<T>;
}
