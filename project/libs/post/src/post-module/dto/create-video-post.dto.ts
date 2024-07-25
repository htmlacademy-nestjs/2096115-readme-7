import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { VideoPostEntity } from 'libs/post/src/post-module/entities/video-post.entity';

export class CreateVideoPostDto extends PostDto<VideoPostEntity> {
  constructor(
    public userId: string,
    public title: string,
    public link: string,
  ) {
    super();
    this
      .initDefaultData()
      .setUserId(userId);
  }

  public toStorableEntity(): VideoPostEntity {
    return new VideoPostEntity({ ...this });
  }
}
