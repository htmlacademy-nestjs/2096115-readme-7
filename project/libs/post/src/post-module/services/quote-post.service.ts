import { Injectable } from '@nestjs/common';
import { QuotePostEntity } from 'libs/post/src/post-module/entities/quote-post.entity';
import { QuotePostRepository } from 'libs/post/src/post-module/repositories/quote-post.repository';
import { BasePostService } from 'libs/post/src/post-module/services/base-post.service';

@Injectable()
export class QuotePostService extends BasePostService<QuotePostEntity> {
  constructor(protected readonly repository: QuotePostRepository) {
    super(repository);

  }

}
