import { LinkPost } from '@project/core';
import { PostEntity } from './post.entity';

export class LinkPostEntity extends PostEntity {
  public link: string;
  public description: string;

  constructor({ link, description, ...rest }: LinkPost) {
    super(rest);
    this.link = link;
    this.description = description;
  }

  public toPOJO(): LinkPost {
    return {
      id: this.id,
      link: this.link,
      description: this.description,
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
