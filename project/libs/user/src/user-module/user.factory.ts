import { Injectable } from '@nestjs/common';
import { AuthUser, EntityFactory } from '@project/core';
import { UserEntity } from '@project/user';

@Injectable()
export class UserFactory implements EntityFactory<UserEntity>{
  public create(entityPlainData: AuthUser): UserEntity {
    return new UserEntity(entityPlainData);
  }
}
