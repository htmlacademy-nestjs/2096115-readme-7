import { BaseMemoryRepository } from '@project/data-access';
import { UserEntity } from '@project/user';
import { UserFactory } from 'libs/user/src/user-module/user.factory';

export class UserRepository extends BaseMemoryRepository<UserEntity> {
  constructor(entityFactory: UserFactory) {
    super(entityFactory);
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const entities = Array.from(this.entities.values());
    const user = entities.find(entity => entity.email === email);
    if (!user) {
      return null;
    }

    return this.entityFactory.create(user);
  }
}
