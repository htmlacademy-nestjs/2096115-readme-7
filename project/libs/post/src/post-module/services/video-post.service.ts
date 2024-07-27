import { Injectable } from '@nestjs/common';
import { VideoPostEntity } from 'libs/post/src/post-module/entities/video-post.entity';
import { BasePostService } from 'libs/post/src/post-module/services/base-post.service';
import { VideoPostRepository } from 'libs/post/src/post-module/repositories/video-post.repository';

@Injectable()
export class VideoPostService extends BasePostService<VideoPostEntity> {
  constructor(protected readonly repository: VideoPostRepository) {
    super(repository);
  }
}
