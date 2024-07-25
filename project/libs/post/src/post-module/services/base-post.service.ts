import { NotFoundException } from '@nestjs/common';
import { Entity, StorableEntity } from '@project/core';
import { BaseMemoryRepository } from '@project/data-access';
import { PostDto } from 'libs/post/src/post-module/dto/post.dto';

export abstract class BasePostService<T extends Entity & StorableEntity<ReturnType<T['toPOJO']>>> {
  protected constructor(
    protected repository: BaseMemoryRepository<T>
  ) {}

  public async getAll(): Promise<T[]> {
    return await this.repository.getAll();
  }

  public async findById(id: T['id']): Promise<T> {
    const post =  await this.repository.findById(id);
    if (!post) {
      throw new NotFoundException(`Cannot find post with id ${id}`);
    }
    return post
  }

  public async save(post: PostDto<T>): Promise<T> {
    return await this.repository.save(post.toStorableEntity());
  }

  public async update(post: PostDto<T>): Promise<T> {
    return await this.repository.update(post.toStorableEntity());
  }

  public async deleteById(id: T['id']): Promise<T> {
    return await this.repository.deleteById(id);
  }
}
