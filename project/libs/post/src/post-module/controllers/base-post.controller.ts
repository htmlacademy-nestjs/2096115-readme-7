import { Entity, StorableEntity } from '@project/core';
import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { BasePostService } from 'libs/post/src/post-module/services/base-post.service';

export abstract class BasePostController<T extends Entity & StorableEntity<ReturnType<T['toPOJO']>>> {
  protected constructor(protected readonly postService: BasePostService<T>) {}

  public async getAllPosts() {
    const posts = await this.postService.getAll()
    return posts.map(p => p.toPOJO());
  }

  public async findById(id: T['id']) {
    const post = await this.postService.findById(id);
    return post.toPOJO();
  }

  public async save(dto: PostDto<T>) {
    const savedPost = await this.postService.save(dto);
    return savedPost.toPOJO();
  }

  public async update(dto: PostDto<T>) {
    const updatedPost = await this.postService.update(dto);
    return updatedPost.toPOJO();
  }

  public async deleteById(id: T['id']) {
    const deletePost = await this.postService.deleteById(id);
    return deletePost.toPOJO();
  }
}
