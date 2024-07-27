import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TextPost } from '@project/core';
import { BasePostController } from 'libs/post/src/post-module/controllers/base-post.controller';
import { CreateTextPostDto } from 'libs/post/src/post-module/dto/create-text-post.dto';
import { UpdateTextPostDto } from 'libs/post/src/post-module/dto/update-text-post.dto';
import { TextPostEntity } from 'libs/post/src/post-module/entities/text-post.entity';
import { TextPostService } from 'libs/post/src/post-module/services/text-post.service';

@Controller('text-posts')
export class TextPostController extends BasePostController<TextPostEntity> {
  constructor(protected readonly service: TextPostService) {
    super(service);
  }

  @Get('/')
  public async getAll(): Promise<TextPost[]> {
    return await super.getAllPosts();
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<TextPost> {
    return await super.findById(id);
  }

  @Post('/')
  public async create(@Body() dto: CreateTextPostDto): Promise<TextPost> {
    const {
      userId,
      title,
      announcement,
      text,
    } = dto;
    return await super.save(new CreateTextPostDto(userId, title, announcement, text));
  }

  @Put('/')
  public async update(@Body() dto: UpdateTextPostDto): Promise<TextPost> {
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
      announcement,
      text,
    } = dto
    return await super.update(new UpdateTextPostDto(
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
      announcement,
      text,
    ));
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<TextPost> {
    return await super.deleteById(id)
  }
}
