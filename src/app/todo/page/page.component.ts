import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Store } from '@ngrx/store';
import { todos, TodoActionType, TodoState } from '../todostore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  todos: Observable<todos>;
  constructor(private ts: TodoService, private store: Store<TodoState>) {
    this.todos = this.store.select('todos');
  }

  ngOnInit() {
    this.todos = this.ts.GetToDoData();
  }
  OnClick(t) {
    this.store.dispatch<any>({ type: String(TodoActionType.ADD), id: t });

  }

}
