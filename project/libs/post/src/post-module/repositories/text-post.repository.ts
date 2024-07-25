import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';
import { TextPostEntity } from 'libs/post/src/post-module/entities/text-post.entity';
import { TextPostFactory } from 'libs/post/src/post-module/entities/text-post.factory';

@Injectable()
export class TextPostRepository extends BaseMemoryRepository<TextPostEntity> {
  constructor(factory: TextPostFactory) {
    super(factory);
  }
}
