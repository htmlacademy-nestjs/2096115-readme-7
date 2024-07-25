import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { PhotoPostEntity } from 'libs/post/src/post-module/entities/photo-post.entity';

export class CreatePhotoPostDto extends PostDto<PhotoPostEntity> {
  constructor(
    public userId: string,
    public photo: File,
  ) {
    super();
    this
      .initDefaultData()
      .setUserId(userId);
  }
  public toStorableEntity(): PhotoPostEntity {
    return new PhotoPostEntity({ ...this });
  }
}
