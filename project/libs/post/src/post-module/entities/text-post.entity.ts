import { TextPost } from '@project/core';
import { PostEntity } from './post.entity';

export class TextPostEntity extends PostEntity {
  public title: string;
  public announcement: string;
  public text: string;

  constructor({ title, announcement, text, ...rest }: TextPost) {
    super(rest);
    this.title = title;
    this.announcement = announcement;
    this.text = text;
  }

  public toPOJO(): TextPost {
    return {
      id: this.id,
      title: this.title,
      announcement: this.announcement,
      text: this.text,
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
