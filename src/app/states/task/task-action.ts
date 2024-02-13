import { createAction , props } from "@ngrx/store";
import { Task } from "src/app/domain/task-model";

export const getTasks = createAction('[task] getTasks');


export const getTasksSuccess = createAction(
    '[task] getTasksSuccess',
    props<{ tasks: Task[] }>() // This expects an array of Task
)

export const getTasksFailure = createAction(
    '[task] getTasksFailure',
    props<{ error: string }>()
);

export const addTast = createAction( 
    '[task] addTask',
    props<{ task: Task }>()
);

export const addTaskSuccess = createAction(
    '[task] addTaskSuccess',
    props<{ task: Task }>()
);

export const addTaskFailure = createAction(
    '[task] addTaskFailure',
    props<{ error: string }>()
);