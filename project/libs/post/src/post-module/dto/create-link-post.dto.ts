import { ApiProperty } from '@nestjs/swagger';
import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { LinkPostEntity } from 'libs/post/src/post-module/entities/link-post.entity';

export class CreateLinkPostDto extends PostDto<LinkPostEntity> {
  @ApiProperty()
  public userId: string;

  @ApiProperty()
  public link: string;

  @ApiProperty()
  public description: string;

  constructor(
    userId: string,
    link: string,
    description: string,
  ) {
    super();
    this
      .initDefaultData()
      .setUserId(userId);
    this.link = link;
    this.description = description;
  }
  public toStorableEntity(): LinkPostEntity {
    return new LinkPostEntity({ ...this });
  }
}
