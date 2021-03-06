import { CounterAction, ActionSingnal } from './store';
export function counterReducer(state: number = 0, action: CounterAction) {
  switch (action.type) {
    case ActionSingnal.INCREMENT:
      return state + 1;

    case ActionSingnal.DECREMENT:
      return state - 1;

    case ActionSingnal.RESET:
      return 0;

    default:
      return state;
  }
}
