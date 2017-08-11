
import { Action } from '@ngrx/store';
import { todos, TodoActionType, TodoState } from './todostore';

export function TodoReducer(state: todos={
Title:"111",
Body:"21321",
CreateTime:"123",
isChecked:"213"


}, action: any) {
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
