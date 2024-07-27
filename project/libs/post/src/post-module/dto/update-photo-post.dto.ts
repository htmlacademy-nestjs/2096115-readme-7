import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { PhotoPostEntity } from 'libs/post/src/post-module/entities/photo-post.entity';
import { Comment } from 'libs/shared/core/src/lib/types/post/comment.interface';
import { Like } from 'libs/shared/core/src/lib/types/post/like.interface';
import { PostState } from 'libs/shared/core/src/lib/types/post/post-state.enum';

export class UpdatePhotoPostDto extends PostDto<PhotoPostEntity> {
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
  public photo: Blob;

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
    photo: Blob,
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
    this.photo = photo;
  }

  public toStorableEntity(): PhotoPostEntity {
    return new PhotoPostEntity({ ...this });
  }
}
