import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/data-access';
import { VideoPostEntity } from 'libs/post/src/post-module/entities/video-post.entity';
import { VideoPostFactory } from 'libs/post/src/post-module/entities/video-post.factory';

@Injectable()
export class VideoPostRepository extends BaseMemoryRepository<VideoPostEntity> {
  constructor(factory: VideoPostFactory) {
    super(factory);
  }
}
