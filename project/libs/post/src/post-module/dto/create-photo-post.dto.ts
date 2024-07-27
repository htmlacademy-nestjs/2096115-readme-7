import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { PhotoPostEntity } from 'libs/post/src/post-module/entities/photo-post.entity';

export class CreatePhotoPostDto extends PostDto<PhotoPostEntity> {
  @ApiProperty()
  public userId: string;

  @ApiProperty()
  public photo: Blob;

  constructor(
    userId: string,
    photo: Blob,
  ) {
    super();
    this
      .initDefaultData()
      .setUserId(userId);
    this.photo = photo;
  }
  public toStorableEntity(): PhotoPostEntity {
    return new PhotoPostEntity({ ...this });
  }
}
