import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { TextPostEntity } from 'libs/post/src/post-module/entities/text-post.entity';
import { Comment } from 'libs/shared/core/src/lib/types/post/comment.interface';
import { Like } from 'libs/shared/core/src/lib/types/post/like.interface';
import { PostState } from 'libs/shared/core/src/lib/types/post/post-state.enum';

export class UpdateTextPostDto extends PostDto<TextPostEntity> {
  constructor(
    public id: string,
    public userId: string,
    public originalPostId: string,
    public creationDate: number,
    public publicationDate: number,
    public isRepost: boolean,
    public likes: Like[],
    public comments: Comment[],
    public state: PostState,
    public title: string,
    public announcement: string,
    public text: string,
  ) {
    super({
      id,
      userId,
      originalPostId,
      creationDate,
      publicationDate,
      isRepost,
      likes,
      comments,
      state,
    });
  }

  public toStorableEntity(): TextPostEntity {
    return new TextPostEntity({ ...this });
  }
}
