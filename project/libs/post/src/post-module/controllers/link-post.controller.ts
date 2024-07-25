import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LinkPost } from '@project/core';
import { BasePostController } from 'libs/post/src/post-module/controllers/base-post.controller';
import { CreateLinkPostDto } from 'libs/post/src/post-module/dto/create-link-post.dto';
import { UpdateLinkPostDto } from 'libs/post/src/post-module/dto/update-link-post.dto';
import { LinkPostEntity } from 'libs/post/src/post-module/entities/link-post.entity';
import { LinkPostService } from 'libs/post/src/post-module/services/link-post.service';

@Controller('link-posts')
export class LinkPostController extends BasePostController<LinkPostEntity> {
  constructor(protected readonly service: LinkPostService) {
    super(service);
  }

  @Get('/')
  public async getAll(): Promise<LinkPost[]> {
    return await super.getAllPosts();
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<LinkPost> {
    return await super.findById(id);
  }

  @Post('/')
  public async create(@Body() dto: CreateLinkPostDto): Promise<LinkPost> {
    return await super.save(dto);
  }

  @Put('/')
  public async update(@Body() dto: UpdateLinkPostDto): Promise<LinkPost> {
    return await super.update(dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<LinkPost> {
    return await super.deleteById(id)
  }

}
