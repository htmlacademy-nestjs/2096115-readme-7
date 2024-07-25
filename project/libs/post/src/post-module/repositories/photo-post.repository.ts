import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';
import { PhotoPostEntity } from 'libs/post/src/post-module/entities/photo-post.entity';
import { PhotoPostFactory } from 'libs/post/src/post-module/entities/photo-post.factory';

@Injectable()
export class PhotoPostRepository extends BaseMemoryRepository<PhotoPostEntity> {
  constructor(factory: PhotoPostFactory) {
    super(factory);
  }
}
