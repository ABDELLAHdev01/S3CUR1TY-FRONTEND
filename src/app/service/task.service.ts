import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../domain/task-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url_user = environment.URL_BASE+`/task/`; 

  constructor(private _https : HttpClient) { }

  
  public getTasks(): Observable<Task[]>{

    return this._https.get<Task[]>(this.url_user+'overview');
  }

  public creatTask(task : Task): Observable<Task>{
    return this._https.post<Task>(this.url_user+'create',task);
  }
}
