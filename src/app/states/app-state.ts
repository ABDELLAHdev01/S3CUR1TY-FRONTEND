import { TaskState } from "./task/task-state";
import { UserState } from "./user/user-state";
import { PostState } from "./post/post-state";
export interface AppState {
    user : UserState;
    tasks : TaskState;
    posts: PostState;
}