import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { TextPostEntity } from 'libs/post/src/post-module/entities/text-post.entity';

export class CreateTextPostDto extends PostDto<TextPostEntity> {
  constructor(
    public userId: string,
    public title: string,
    public announcement: string,
    public text: string,
  ) {
    super();
    this
      .initDefaultData()
      .setUserId(userId);
  }

  public toStorableEntity(): TextPostEntity {
    return new TextPostEntity({ ...this });
  }
}
