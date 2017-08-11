export interface AppState {
  counter: number;
}
export enum ActionSingnal {
  INCREMENT,
  DECREMENT,
  RESET
}
export class CounterAction{
  type: any;
}
