import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TokenService } from 'src/app/service/token.service';
import { TaskService } from 'src/app/service/task.service';
import * as taskActions from './task-action'
import { Task } from 'src/app/domain/task-model';



@Injectable()
export class TaskEffects {


    login$ = createEffect(() => this.actions$.pipe(
        ofType(taskActions.getTasks),
        mergeMap(action =>
            this.taskService.getTasks().pipe(
                map(tasks => taskActions.getTasksSuccess({ tasks })), // Here 'tasks' should be an array of Task
                catchError(error => of(taskActions.getTasksFailure({ error: error.message ?? 'Unknown error' })))
            )
        )
    ));

    addTask$ = createEffect(() => this.actions$.pipe(
        ofType(taskActions.addTast),
        mergeMap(action =>
            this.taskService.creatTask(action.task).pipe(
                map(task => taskActions.addTaskSuccess({ task })), // Here 'task' should be a Task
                catchError(error => of(taskActions.addTaskFailure({ error: error.message ?? 'Unknown error' })))
            )
        )

    ));
    
    

    constructor(
        private actions$: Actions,
        private taskService: TaskService
        ){}
}