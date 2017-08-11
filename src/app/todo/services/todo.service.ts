import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { TodoContent } from '../todostore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class TodoService {

  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  Host = 'http://localhost:3000/todo'
  constructor(private http: Http) { }
  GetToDoData(): Observable<TodoContent> {
    return this.http.get(this.Host).map(res => res.json())
  }
}
