export interface TodoContent {
  Title: string;
  Body: string;
  CreateTime: Date;
  isChecked: boolean;
}

export interface TodoState {
  todos: TodoContent;
  lastUpdate: Date;
}
export enum TodoActionType {
  ADD,
  DELETE,
  EDIT,
  DETAIL
}

