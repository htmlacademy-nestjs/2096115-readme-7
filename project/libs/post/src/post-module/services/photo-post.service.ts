import { Injectable } from '@nestjs/common';
import { PhotoPostEntity } from 'libs/post/src/post-module/entities/photo-post.entity';
import { PhotoPostRepository } from 'libs/post/src/post-module/repositories/photo-post.repository';
import { BasePostService } from 'libs/post/src/post-module/services/base-post.service';

@Injectable()
export class PhotoPostService extends BasePostService<PhotoPostEntity> {
  constructor(protected readonly repository: PhotoPostRepository) {
    super(repository);
  }
}
