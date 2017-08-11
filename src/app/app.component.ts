import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState, ActionSingnal } from './store';
import { CounterAction } from './store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
  }
  ngOnInit() {
    this.counter = this.store.select<number>(AppState => AppState.counter);
  }

  increment() {
    this.store.dispatch<CounterAction>({ type: ActionSingnal.INCREMENT });
  }

  decrement() {
    this.store.dispatch<CounterAction>({ type: ActionSingnal.DECREMENT });
  }

  reset() {
    this.store.dispatch<CounterAction>({ type: ActionSingnal.RESET });
  }
}
