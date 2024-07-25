import { Entity, Post, StorableEntity } from '@project/core';
import { Comment } from 'libs/shared/core/src/lib/types/post/comment.interface';
import { Like } from 'libs/shared/core/src/lib/types/post/like.interface';
import { PostState } from 'libs/shared/core/src/lib/types/post/post-state.enum';

export abstract class PostEntity extends Entity implements StorableEntity<Post> {
  public userId?: string;
  public originalPostId?: string;
  public creationDate: number;
  public publicationDate: number;
  public isRepost: boolean;
  public likes: Like[];
  public comments: Comment[];
  public state: PostState;

  protected constructor(post: Post) {
    super();
    this.id = post.id;
    this.userId = post.userId;
    this.originalPostId = post.originalPostId;
    this.creationDate = post.creationDate;
    this.publicationDate = post.publicationDate;
    this.isRepost = post.isRepost;
    this.likes = post.likes;
    this.comments = post.comments;
    this.state = post.state;
  }

  public abstract toPOJO(): Post;
}
