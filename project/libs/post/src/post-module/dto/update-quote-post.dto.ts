import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from './post.dto';
import { QuotePostEntity } from 'libs/post/src/post-module/entities/quote-post.entity';
import { Like } from 'libs/shared/core/src/lib/types/post/like.interface';
import { Comment } from 'libs/shared/core/src/lib/types/post/comment.interface';
import { PostState } from 'libs/shared/core/src/lib/types/post/post-state.enum';

export class UpdateQuotePostDto extends PostDto<QuotePostEntity> {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public userId: string;

  @ApiProperty()
  public originalPostId: string;

  @ApiProperty()
  public creationDate: number;

  @ApiProperty()
  public publicationDate: number;

  @ApiProperty()
  public isRepost: boolean;

  @ApiProperty()
  public likes: Like[];

  @ApiProperty()
  public comments: Comment[];

  @ApiProperty()
  public state: PostState;

  @ApiProperty()
  public text: string;

  @ApiProperty()
  public author: string;

  constructor(
    id: string,
    userId: string,
    originalPostId: string,
    creationDate: number,
    publicationDate: number,
    isRepost: boolean,
    likes: Like[],
    comments: Comment[],
    state: PostState,
    text: string,
    author: string,
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
    this.text = text;
    this.author = author;
  }

  public toStorableEntity(): QuotePostEntity {
    return new QuotePostEntity({ ...this });
  }
}
