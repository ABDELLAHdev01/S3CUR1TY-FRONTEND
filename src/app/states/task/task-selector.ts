import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { TaskState } from './task-state';

// Feature selector for the task state
export const selectTaskFeature = createFeatureSelector<AppState, TaskState>('tasks');

// Selector for the tasks array
export const selectTasks = createSelector(
    selectTaskFeature,
    (state: TaskState) => state.tasks
);

