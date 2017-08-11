export interface todos {
  Title: string;
  Body: string;
  CreateTime: Date;
  isChecked:boolean;
  id:any;
}

export interface TodoState {
  todos: todos;
  lastUpdate: Date;
}
export enum TodoActionType {
  ADD,
  DELETE,
  EDIT,
  DETAIL
}

