
import { Action } from '@ngrx/store';
import { TodoContent, TodoActionType, TodoState } from './todostore';

export function TodoReducer(state: TodoState, action: any) {
  switch (Number(action.type)) {

    case TodoActionType.ADD:
      console.log(action,state)

      return state;

    case TodoActionType.EDIT:

      return state;

    case TodoActionType.DELETE:

      return state;

    case TodoActionType.DETAIL:

      return state;

    default:
      return state;
  }
}
