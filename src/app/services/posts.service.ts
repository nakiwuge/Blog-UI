import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from '../models/Posts';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'

  })
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // tslint:disable-next-line:no-inferrable-types
  baseurl: string = 'http://localhost:3000/api/v1/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseurl);

  }

  addPost(post: Post): Observable<any> {
    return this.http.post(this.baseurl, post, httpOptions)
  }
}
