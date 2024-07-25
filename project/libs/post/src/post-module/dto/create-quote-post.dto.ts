import { QuotePostEntity } from 'libs/post/src/post-module/entities/quote-post.entity';
import { PostDto } from './post.dto';

export class CreateQuotePostDto extends PostDto<QuotePostEntity> {
  constructor(
    public userId: string,
    public text: string,
    public author: string,
  ) {
    super();
    this
      .initDefaultData()
      .setUserId(userId);
  }

  public toStorableEntity(): QuotePostEntity {
    return new QuotePostEntity({ ...this });
  }
}
