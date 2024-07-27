import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { VideoPostEntity } from 'libs/post/src/post-module/entities/video-post.entity';

export class CreateVideoPostDto extends PostDto<VideoPostEntity> {
  @ApiProperty()
  public userId: string;

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public link: string;

  constructor(
    userId: string,
    title: string,
    link: string,
  ) {
    super();
    this
      .initDefaultData()
      .setUserId(userId);
    this.title = title;
    this.link = link;
  }

  public toStorableEntity(): VideoPostEntity {
    return new VideoPostEntity({ ...this });
  }
}
