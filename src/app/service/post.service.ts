import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Post } from '../domain/post-model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = environment.URL_BASE+`/`; 

  constructor(private _https : HttpClient) { }

  getAllPosts(): Observable<Post[]>{
    return this._https.get<Post[]>(this.url+'posts');
  }
}
