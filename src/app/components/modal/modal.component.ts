import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/domain/task-model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app-state';
import * as TaskActions from '../../states/task/task-action';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  createTaskForm!: FormGroup;
  task!: Task;

  addTask(taskData: Task) {
    this.store.dispatch(TaskActions.addTast({ task: taskData }));
  }

  onSubmit() {
    if (this.createTaskForm.valid) {
      console.log('Form Data: ', this.createTaskForm.value);
      this.task = this.createTaskForm.value;
      this.addTask(this.task);
      this.router.navigate(['/dashboard']);
    } else {
      // Handle form errors
      console.error('Form is invalid');
    }
  }

  

  ngOnInit(): void {
    this.createTaskForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      createdById: ['', [Validators.required]],
    });
  }

  
  constructor(
    private _fb: FormBuilder,
    private router : Router
    ,private store: Store<AppState>
    
    ) {}
}
