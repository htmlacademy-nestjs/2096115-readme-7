import { Module } from '@nestjs/common';
import { LinkPostController } from 'libs/post/src/post-module/controllers/link-post.controller';
import { PhotoPostController } from 'libs/post/src/post-module/controllers/photo-post.controller';
import { QuotePostController } from 'libs/post/src/post-module/controllers/quote-post.controller';
import { TextPostController } from 'libs/post/src/post-module/controllers/text-post.controller';
import { VideoPostController } from 'libs/post/src/post-module/controllers/video-post.controller';
import { LinkPostFactory } from 'libs/post/src/post-module/entities/link-post.factory';
import { PhotoPostFactory } from 'libs/post/src/post-module/entities/photo-post.factory';
import { QuotePostFactory } from 'libs/post/src/post-module/entities/quote-post.factory';
import { TextPostFactory } from 'libs/post/src/post-module/entities/text-post.factory';
import { VideoPostFactory } from 'libs/post/src/post-module/entities/video-post.factory';
import { LinkPostRepository } from 'libs/post/src/post-module/repositories/link-post.repository';
import { PhotoPostRepository } from 'libs/post/src/post-module/repositories/photo-post.repository';
import { QuotePostRepository } from 'libs/post/src/post-module/repositories/quote-post.repository';
import { TextPostRepository } from 'libs/post/src/post-module/repositories/text-post.repository';
import { VideoPostRepository } from 'libs/post/src/post-module/repositories/video-post.repository';
import { LinkPostService } from 'libs/post/src/post-module/services/link-post.service';
import { PhotoPostService } from 'libs/post/src/post-module/services/photo-post.service';
import { QuotePostService } from 'libs/post/src/post-module/services/quote-post.service';
import { TextPostService } from 'libs/post/src/post-module/services/text-post.service';
import { VideoPostService } from 'libs/post/src/post-module/services/video-post.service';

@Module({
  providers: [
    VideoPostService,
    VideoPostRepository,
    VideoPostFactory,
    TextPostService,
    TextPostRepository,
    TextPostFactory,
    QuotePostService,
    QuotePostRepository,
    QuotePostFactory,
    PhotoPostService,
    PhotoPostRepository,
    PhotoPostFactory,
    LinkPostService,
    LinkPostRepository,
    LinkPostFactory,
  ],
  controllers: [
    VideoPostController,
    TextPostController,
    QuotePostController,
    PhotoPostController,
    LinkPostController,
  ],
})
export class PostModule {}
