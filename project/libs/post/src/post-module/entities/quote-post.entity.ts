import { QuotePost } from '@project/core';
import { PostEntity } from './post.entity';

export class QuotePostEntity extends PostEntity {
  public text: string;
  public author: string;

  constructor({ text, author, ...rest }: QuotePost) {
    super(rest);
    this.text = text;
    this.author = author;
  }

  public toPOJO(): QuotePost {
    return {
      id: this.id,
      text: this.text,
      author: this.author,
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
