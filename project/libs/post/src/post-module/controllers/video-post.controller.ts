import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VideoPost } from '@project/core';
import { BasePostController } from 'libs/post/src/post-module/controllers/base-post.controller';
import { CreateVideoPostDto } from 'libs/post/src/post-module/dto/create-video-post.dto';
import { UpdateVideoPostDto } from 'libs/post/src/post-module/dto/update-video-post.dto';
import { VideoPostEntity } from 'libs/post/src/post-module/entities/video-post.entity';
import { VideoPostService } from 'libs/post/src/post-module/services/video-post.service';

@Controller('video-posts')
export class VideoPostController extends BasePostController<VideoPostEntity> {
  constructor(protected readonly service: VideoPostService) {
    super(service);
  }

  @Get('/')
  public async getAll(): Promise<VideoPost[]> {
    return await super.getAllPosts();
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<VideoPost> {
    return await super.findById(id);
  }

  @Post('/')
  public async create(@Body() dto: CreateVideoPostDto): Promise<VideoPost> {
    const { userId, title, link,} = dto;
    return await super.save(new CreateVideoPostDto(userId, title, link));
  }

  @Put('/')
  public async update(@Body() dto: UpdateVideoPostDto): Promise<VideoPost> {
    const {
      id,
      userId,
      originalPostId,
      creationDate,
      publicationDate,
      isRepost,
      likes,
      comments,
      state,
      title,
      link,
    } = dto;
    return await super.update(new UpdateVideoPostDto(
      id,
      userId,
      originalPostId,
      creationDate,
      publicationDate,
      isRepost,
      likes,
      comments,
      state,
      title,
      link,
    ));
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<VideoPost> {
    return await super.deleteById(id)
  }
}
