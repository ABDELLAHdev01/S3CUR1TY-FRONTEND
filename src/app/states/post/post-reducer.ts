import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/domain/post-model';
import * as PostActions from './post-action';


export interface PostState {
    Posts: Post[]
    error : string | null;

}

export const initialState: PostState = {
    Posts: [],
    error: null,
};

export const postReducer = createReducer(
    initialState,

    on(PostActions.getPosts, state => ({
        ...state,
        error: null,
    })),

    on(PostActions.getPostsSeccucefully, (state, { posts }) => ({
        ...state,
        Posts: posts,
    })),

    on(PostActions.getPostsFuiler, (state, { error }) => ({
        ...state,
        error,
    }),

 
    ) );