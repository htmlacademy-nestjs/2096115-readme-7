import { randomUUID } from 'node:crypto';

import { Entity, EntityFactory, StorableEntity } from '@project/core';
import { Repository } from 'libs/shared/data-access/src/repository/repository.interface';

export abstract class BaseMemoryRepository<T extends Entity & StorableEntity<ReturnType<T['toPOJO']>>> implements Repository<T> {
  protected entities: Map<T['id'], ReturnType<T['toPOJO']>> = new Map();

  protected constructor(
    protected entityFactory: EntityFactory<T>
  ) {}

  public async getAll(): Promise<T[]> {
    let values: T[] = [];
    this.entities.forEach(value => {
      values.push(this.entityFactory.create(value));
    });
    return values;
  }

  public async findById(id: T['id']): Promise<T> {
    const foundEntity = this.entities.get(id) || null;
    if (!foundEntity) {
      return null;
    }

    return this.entityFactory.create(foundEntity);
  }

  public async save(entity: T): Promise<T> {
    if (!entity.id) {
      entity.id = randomUUID();
    }

    this.entities.set(entity.id, entity.toPOJO());

    return this.entityFactory.create(entity.toPOJO());
  }

  public async update(entity: T): Promise<T> {
    if (!this.entities.has(entity.id)) {
      throw new Error('Entity not found');
    }

    this.entities.set(entity.id, entity.toPOJO());

    return this.entityFactory.create(entity.toPOJO());
  }

  public async deleteById(id: T['id']): Promise<T> {
    if (!this.entities.has(id)) {
      throw new Error('Entity not found');
    }
    const entity = this.entities.get(id);

    this.entities.delete(id);

    return this.entityFactory.create(entity);
  }
}
