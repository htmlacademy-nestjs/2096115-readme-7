import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { TextPostEntity } from 'libs/post/src/post-module/entities/text-post.entity';
import { Comment } from 'libs/shared/core/src/lib/types/post/comment.interface';
import { Like } from 'libs/shared/core/src/lib/types/post/like.interface';
import { PostState } from 'libs/shared/core/src/lib/types/post/post-state.enum';

export class UpdateTextPostDto extends PostDto<TextPostEntity> {
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
  public title: string;

  @ApiProperty()
  public announcement: string;

  @ApiProperty()
  public text: string;

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
    title: string,
    announcement: string,
    text: string,
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
    this.title = title;
    this.announcement = announcement;
    this.text = text;
  }

  public toStorableEntity(): TextPostEntity {
    return new TextPostEntity({ ...this });
  }
}
