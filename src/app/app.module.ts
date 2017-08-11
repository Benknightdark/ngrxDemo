import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { ClickComponent } from './click/click.component';
import { TodoModule } from './todo/todo.module';
import { TodoRoutingModule } from './todo/todo-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClickComponent

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    TodoRoutingModule,
    TodoModule,
   // StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
