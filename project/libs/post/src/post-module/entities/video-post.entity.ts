import { VideoPost } from '@project/core';
import { PostEntity } from './post.entity';

export class VideoPostEntity extends PostEntity {
  public title: string;
  public link: string;

  constructor({ title, link, ...rest }: VideoPost) {
    super(rest);
    this.title = title;
    this.link = link;
  }

  public toPOJO(): VideoPost {
      return {
        id: this.id,
        title: this.title,
        link: this.link,
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
