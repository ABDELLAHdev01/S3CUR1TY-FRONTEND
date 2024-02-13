import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router, RouterModule } from '@angular/router';
import { tap } from 'rxjs/operators';
import { PostService } from 'src/app/service/post.service';
import * as postActions from './post-action'

@Injectable()
export class PostEffects {

    getTasks$ = createEffect(() => this.actions$.pipe(
        ofType(postActions.getPosts),
        mergeMap((action) =>
            this.postService.getAllPosts().pipe(
                map(posts => postActions.getPostsSeccucefully({ posts })), // Here 'posts' should be an array of Post
                catchError(error => of(postActions.getPostsFuiler({ error: error.message })))
            )
        )
    ))



    constructor(
        private actions$: Actions,
        private postService: PostService
    
        ){}

}