import { Injectable } from '@nestjs/common';
import { TextPostEntity } from 'libs/post/src/post-module/entities/text-post.entity';
import { TextPostRepository } from 'libs/post/src/post-module/repositories/text-post.repository';
import { BasePostService } from 'libs/post/src/post-module/services/base-post.service';

@Injectable()
export class TextPostService extends BasePostService<TextPostEntity> {
  constructor(protected readonly repository: TextPostRepository) {
    super(repository);
  }
}
