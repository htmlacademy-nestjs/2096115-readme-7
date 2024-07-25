import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';
import { LinkPostEntity } from 'libs/post/src/post-module/entities/link-post.entity';
import { LinkPostFactory } from 'libs/post/src/post-module/entities/link-post.factory';

@Injectable()
export class LinkPostRepository extends BaseMemoryRepository<LinkPostEntity> {
  constructor(factory: LinkPostFactory) {
    super(factory);
  }
}
