import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { LinkPostEntity } from 'libs/post/src/post-module/entities/link-post.entity';

export class CreateLinkPostDto extends PostDto<LinkPostEntity> {
  constructor(
    public userId: string,
    public link: string,
    public description: string,
  ) {
    super();
    this
      .initDefaultData()
      .setUserId(userId);
  }
  public toStorableEntity(): LinkPostEntity {
    return new LinkPostEntity({ ...this });
  }
}
