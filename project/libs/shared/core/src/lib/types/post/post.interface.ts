import { Comment } from './comment.interface';
import { Like } from './like.interface';
import { PostState } from './post-state.enum';

export interface Post {
  id?: string;
  userId?: string;
  originalPostId?: string;
  creationDate: number;
  publicationDate: number;
  isRepost: boolean;
  likes: Like[];
  comments: Comment[];
  state: PostState;
}
