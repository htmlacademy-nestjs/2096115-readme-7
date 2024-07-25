import { PhotoPost } from '@project/core';
import { PostEntity } from './post.entity';

export class PhotoPostEntity extends PostEntity {
  public photo: Blob;

  constructor({ photo, ...rest }: PhotoPost) {
    super(rest);
    this.photo = photo;
  }

  public toPOJO(): PhotoPost {
    return {
      id: this.id,
      photo : this.photo,
      userId: this.userId,
      originalPostId: this.originalPostId,
      creationDate: this.creationDate,
      publicationDate: this.publicationDate,
      isRepost: this.isRepost,
      likes: this.likes,
      comments: this.comments,
      state: this.state,
    }
  }
}
