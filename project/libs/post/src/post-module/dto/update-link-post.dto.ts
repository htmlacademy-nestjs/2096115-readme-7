import { PostDto } from 'libs/post/src/post-module/dto/post.dto';
import { LinkPostEntity } from 'libs/post/src/post-module/entities/link-post.entity';
import { Comment } from 'libs/shared/core/src/lib/types/post/comment.interface';
import { Like } from 'libs/shared/core/src/lib/types/post/like.interface';
import { PostState } from 'libs/shared/core/src/lib/types/post/post-state.enum';

export class UpdateLinkPostDto extends PostDto<LinkPostEntity> {
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
    public link: string,
    public description: string,
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

  public toStorableEntity(): LinkPostEntity {
    return new LinkPostEntity({ ...this });
  }
}
