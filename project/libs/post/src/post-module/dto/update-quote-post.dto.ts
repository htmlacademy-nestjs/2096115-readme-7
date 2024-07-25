import { PostDto } from './post.dto';
import { QuotePostEntity } from 'libs/post/src/post-module/entities/quote-post.entity';
import { Like } from 'libs/shared/core/src/lib/types/post/like.interface';
import { Comment } from 'libs/shared/core/src/lib/types/post/comment.interface';
import { PostState } from 'libs/shared/core/src/lib/types/post/post-state.enum';

export class UpdateQuotePostDto extends PostDto<QuotePostEntity> {
  constructor(
    public id: string,
    public userId: string,
    public originalPostId: string,
    public creationDate: number,
    public publicationDate: number,
    public isRepost: boolean,
    public likes: Like[],
    public comments: Comment[],
    public state: PostState,
    public text: string,
    public author: string,
  ) {
    super({
      id,
      userId,
      originalPostId,
      creationDate,
      publicationDate,
      isRepost,
      likes,
      comments,
      state,
    });
  }

  public toStorableEntity(): QuotePostEntity {
    return new QuotePostEntity({ ...this });
  }
}
