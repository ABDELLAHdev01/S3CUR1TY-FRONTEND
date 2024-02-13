import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { PostState } from './post-state';

export const selectPostFeature = createFeatureSelector<AppState, PostState>('posts');

export const selectPosts = createSelector(
    selectPostFeature,
    (state: PostState) => state.Posts
);