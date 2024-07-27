import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { TextPostEntity } from 'libs/post/src/post-module/entities/text-post.entity';

export class CreateTextPostDto extends PostDto<TextPostEntity> {
  @ApiProperty()
  public userId: string;

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public announcement: string;

  @ApiProperty()
  public text: string;

  constructor(
    userId: string,
    title: string,
    announcement: string,
    text: string,
  ) {
    super();
    this
      .initDefaultData()
      .setUserId(userId);
    this.title = title;
    this.announcement = announcement;
    this.text = text;
  }

  public toStorableEntity(): TextPostEntity {
    return new TextPostEntity({ ...this });
  }
}
