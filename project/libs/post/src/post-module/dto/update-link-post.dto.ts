import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { LinkPostEntity } from 'libs/post/src/post-module/entities/link-post.entity';
import { Comment } from 'libs/shared/core/src/lib/types/post/comment.interface';
import { Like } from 'libs/shared/core/src/lib/types/post/like.interface';
import { PostState } from 'libs/shared/core/src/lib/types/post/post-state.enum';

export class UpdateLinkPostDto extends PostDto<LinkPostEntity> {
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
  public link: string;

  @ApiProperty()
  public description: string;

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
    link: string,
    description: string,
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
    this.link = link;
    this.description = description;
  }

  public toStorableEntity(): LinkPostEntity {
    return new LinkPostEntity({ ...this });
  }
}
