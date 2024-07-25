import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PhotoPost } from '@project/core';
import { BasePostController } from 'libs/post/src/post-module/controllers/base-post.controller';
import { CreatePhotoPostDto } from 'libs/post/src/post-module/dto/create-photo-post.dto';
import { UpdatePhotoPostDto } from 'libs/post/src/post-module/dto/update-photo-post.dto';
import { PhotoPostEntity } from 'libs/post/src/post-module/entities/photo-post.entity';
import { PhotoPostService } from 'libs/post/src/post-module/services/photo-post.service';

@Controller('photo-posts')
export class PhotoPostController extends BasePostController<PhotoPostEntity> {
  constructor(protected readonly service: PhotoPostService) {
    super(service);
  }

  @Get('/')
  public async getAll(): Promise<PhotoPost[]> {
    return await super.getAllPosts();
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<PhotoPost> {
    return await super.findById(id);
  }

  @Post('/')
  public async create(@Body() dto: CreatePhotoPostDto): Promise<PhotoPost> {
    return await super.save(dto);
  }

  @Put('/')
  public async update(@Body() dto: UpdatePhotoPostDto): Promise<PhotoPost> {
    return await super.update(dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<PhotoPost> {
    return await super.deleteById(id)
  }
}
