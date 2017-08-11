import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { todos } from '../todostore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class TodoService {

  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  Host = 'http://localhost:3000/todo'
  constructor(private http: Http) { }
  GetToDoData(): Observable<todos> {
    return this.http.get(this.Host).map(res => res.json())
  }
  SaveData(data:any){
    return this.http.post("http://localhost:3000/todo2",data,this.JSONoptions)
  }
}
