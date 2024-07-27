import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { QuotePost } from '@project/core';
import { BasePostController } from 'libs/post/src/post-module/controllers/base-post.controller';
import { CreateQuotePostDto } from 'libs/post/src/post-module/dto/create-quote-post.dto';
import { UpdateQuotePostDto } from 'libs/post/src/post-module/dto/update-quote-post.dto';
import { QuotePostEntity } from 'libs/post/src/post-module/entities/quote-post.entity';
import { QuotePostService } from 'libs/post/src/post-module/services/quote-post.service';

@Controller('quote-posts')
export class QuotePostController extends BasePostController<QuotePostEntity> {
  constructor(protected readonly service: QuotePostService) {
    super(service);
  }

  @Get('/')
  public async getAll(): Promise<QuotePost[]> {
    return await super.getAllPosts();
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<QuotePost> {
    return await super.findById(id);
  }

  @Post('/')
  public async create(@Body() dto: CreateQuotePostDto): Promise<QuotePost> {
    const {
      userId,
      text,
      author,
    } = dto;
    return await super.save(new CreateQuotePostDto(userId, text, author));
  }

  @Put('/')
  public async update(@Body() dto: UpdateQuotePostDto): Promise<QuotePost> {
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
      text,
      author,
    } = dto;
    return await super.update(new UpdateQuotePostDto(
      id,
      userId,
      originalPostId,
      creationDate,
      publicationDate,
      isRepost,
      likes,
      comments,
      state,
      text,
      author,
    ));
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<QuotePost> {
    return await super.deleteById(id)
  }
}
