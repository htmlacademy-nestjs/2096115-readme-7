import { Injectable } from '@nestjs/common';
import { LinkPostEntity } from 'libs/post/src/post-module/entities/link-post.entity';
import { LinkPostRepository } from 'libs/post/src/post-module/repositories/link-post.repository';
import { BasePostService } from 'libs/post/src/post-module/services/base-post.service';

@Injectable()
export class LinkPostService extends BasePostService<LinkPostEntity> {
  constructor(protected readonly repository: LinkPostRepository) {
    super(repository);
  }
}
