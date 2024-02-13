import { createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/domain/task-model';
import * as taskActions from './task-action';

export interface TaskState {
  tasks: Task[]; // Changed from Task[] | null to Task[]
  loading: boolean;
  error: string | null;
  }

  export const initialState: TaskState = {
    tasks: [], // Initialize as an empty array
    loading: false,
    error: null,
  };

  export const taskReducer = createReducer(
    initialState,

    on(taskActions.getTasks, state => ({
        ...state,
        loading: true,
        error: null,
  
      })),
    
      on(taskActions.getTasksSuccess, (state, { tasks }) => ({
        ...state,
        tasks,
        loading: false
      })),
    
      on(taskActions.getTasksFailure, (state, {error }) => ({
        ...state,
        error,
        loading: false
      })),

      on(taskActions.addTast, state => ({
        ...state,
        loading: true,
        error: null,
  
      })),

      on(taskActions.addTaskSuccess, (state, { task }) => ({
        ...state,
        tasks: [...state.tasks, task],
        loading: false
      })),

      on(taskActions.addTaskFailure, (state, {error }) => ({
        ...state,
        error,
        loading: false
      }))
  );
