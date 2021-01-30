interface IListItem {
  text: string;
  id: number;
}

export interface IInitalTodoListState {
  todoList: Array<IListItem>;
  doneList: Array<IListItem>;
}

export enum ETodoListDispatchType {
  ADD_TODO,
  ADD_DONE,
  RESET_TODO,
  REMOVE_TODO,
  REMOVE_DONE
}

export type TodoListAction = 
| {
  type: ETodoListDispatchType.ADD_TODO;
  todoItem: IListItem;
}
| {
  type: ETodoListDispatchType.ADD_DONE;
  todoItem: IListItem;
}
| {
  type: ETodoListDispatchType.RESET_TODO;
  doneItem: IListItem;
}
| {
  type: ETodoListDispatchType.REMOVE_TODO;
  todoItem: IListItem;
}
| {
  type: ETodoListDispatchType.REMOVE_DONE;
  doneItem: IListItem;
};

export type TodoListReducer = React.Reducer<IInitalTodoListState, TodoListAction>;