import { Post } from "src/app/domain/post-model"
export interface PostState {
    Posts: Post[]
    error : string | null;

}