import { Entity, Post, StorableEntity } from '@project/core';
import { Comment } from 'libs/shared/core/src/lib/types/post/comment.interface';
import { Like } from 'libs/shared/core/src/lib/types/post/like.interface';
import { PostState } from 'libs/shared/core/src/lib/types/post/post-state.enum';
import { randomUUID } from 'node:crypto';

export abstract class PostDto<T extends Entity & StorableEntity<ReturnType<T['toPOJO']>>> {
  public id: string;
  public userId: string;
  public originalPostId: string;
  public creationDate: number;
  public publicationDate: number;
  public isRepost: boolean;
  public likes: Like[];
  public comments: Comment[];
  public state: PostState;

  protected constructor(post?: Post) {
    if(post) {
      const {
        id,
        userId,
        originalPostId,
        creationDate,
        publicationDate,
        isRepost,
        likes,
        comments,
        state
      } = post;

      this.id = id;
      this.userId = userId;
      this.originalPostId = originalPostId;
      this.creationDate = creationDate;
      this.publicationDate = publicationDate;
      this.isRepost = isRepost;
      this.likes = likes;
      this.comments = comments;
      this.state = state;
    }
  }

  abstract toStorableEntity(): T;

  public initDefaultData() {
    const id = randomUUID();
    const date = new Date().getTime();

    this.id = id;
    this.originalPostId = id;
    this.creationDate = date;
    this.publicationDate = date;
    this.isRepost = false;
    this.likes = [];
    this.comments = [];
    this.state = PostState.Published;

    return this;
  }

  public setUserId(userId: string) {
    this.userId = userId;

    return this;
  }
}
