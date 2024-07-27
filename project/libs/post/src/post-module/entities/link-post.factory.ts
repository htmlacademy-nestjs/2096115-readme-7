import { Injectable } from '@nestjs/common';
import { EntityFactory, LinkPost } from '@project/core';
import { LinkPostEntity } from 'libs/post/src/post-module/entities/link-post.entity';

@Injectable()
export class LinkPostFactory implements EntityFactory<LinkPostEntity> {
    public create(entityPlainData: LinkPost): LinkPostEntity {
        return new LinkPostEntity(entityPlainData);
    }
}
