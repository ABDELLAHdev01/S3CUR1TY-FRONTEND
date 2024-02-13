import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app-state';
import * as taskActions from '../../states/task/task-action';
import * as postActionActions from '../../states/post/post-action';
import { Task } from 'src/app/domain/task-model';
import { Observable } from 'rxjs';
import { selectTasks } from 'src/app/states/task/task-selector';
import { Post } from 'src/app/domain/post-model';
import { selectPosts } from 'src/app/states/post/post-selector';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css'],
})
export class MaindashboardComponent implements OnInit {
  posts$: Observable<any>;
  posts: Post[] = [];

  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(selectPosts);
    this.posts$.subscribe((data: { posts: Post[] }): void => {
      this.posts = data.posts;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(postActionActions.getPosts());
  }
}
