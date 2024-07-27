import { ApiProperty } from '@nestjs/swagger';
import { QuotePostEntity } from 'libs/post/src/post-module/entities/quote-post.entity';
import { PostDto } from './post.dto';

export class CreateQuotePostDto extends PostDto<QuotePostEntity> {
  @ApiProperty()
  public userId: string;

  @ApiProperty()
  public text: string;

  @ApiProperty()
  public author: string;

  constructor(
    userId: string,
    text: string,
    author: string,
  ) {
    super();
    this
      .initDefaultData()
      .setUserId(userId);
    this.text = text;
    this.author = author;
  }

  public toStorableEntity(): QuotePostEntity {
    return new QuotePostEntity({ ...this });
  }
}
