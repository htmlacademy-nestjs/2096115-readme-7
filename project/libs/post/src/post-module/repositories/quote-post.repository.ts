import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';
import { QuotePostEntity } from 'libs/post/src/post-module/entities/quote-post.entity';
import { QuotePostFactory } from 'libs/post/src/post-module/entities/quote-post.factory';

@Injectable()
export class QuotePostRepository extends BaseMemoryRepository<QuotePostEntity> {
  constructor(factory: QuotePostFactory) {
    super(factory);
  }
}
