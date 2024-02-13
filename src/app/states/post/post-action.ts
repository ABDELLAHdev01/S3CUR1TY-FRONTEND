import { createAction , props } from "@ngrx/store";
import { Post } from "src/app/domain/post-model"


export const getPosts= createAction('[posts] getPosts');


export const getPostsSeccucefully = createAction(
    '[posts] getPostsSeccucefully',
    props<{ posts: Post[] }>() 
)

export const getPostsFuiler = createAction(
    '[posts] getPostsFuiler',
    props<{ error: string }>()

)