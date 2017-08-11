import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { PageComponent } from './page/page.component';
import { TodoService } from './services/todo.service';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './todoaction';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpModule,
    StoreModule.forRoot({ todos: TodoReducer })

  ],
  providers:[TodoService],
  declarations: [PageComponent]
})
export class TodoModule { }
