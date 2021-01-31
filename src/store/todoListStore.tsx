import React, { createContext, useReducer, useContext } from "react";

import {
  IInitalTodoListState,
  TodoListReducer,
  ETodoListDispatchType,
  TodoListAction
} from '../types/todoList';

/** init reducer */
const initalTodoListState: IInitalTodoListState = {
  todoList: [],
  doneList: []
};

export const todoListReducer: TodoListReducer = (state, action) => {
  switch (action.type) {
    case ETodoListDispatchType.ADD_TODO: {
      const newTodoList = [...state.todoList];
      newTodoList.unshift(action.todoItem);

      return {
        ...state,
        todoList: newTodoList
      };
    }
    case ETodoListDispatchType.ADD_DONE: {
      const todoIndex = state.todoList.findIndex(todoItem => {
        return todoItem.id === action.todoItem.id
      });
      const newTodoList = [...state.todoList];
      const newDoneList = [...state.doneList];
      
      newDoneList.unshift(newTodoList[todoIndex]);
      newTodoList.splice(todoIndex, 1);

      return {
        ...state,
        todoList: newTodoList,
        doneList: newDoneList
      };
    }
    case ETodoListDispatchType.RESET_TODO: {
      const doneIndex = state.doneList.findIndex(doneItem => {
        return doneItem.id === action.doneItem.id
      });
      const newTodoList = [...state.todoList];
      const newDoneList = [...state.doneList];

      newTodoList.push(newDoneList[doneIndex]);
      newDoneList.splice(doneIndex, 1);

      return {
        ...state,
        todoList: newTodoList,
        doneList: newDoneList
      };
    }
    case ETodoListDispatchType.REMOVE_TODO: {
      const todoIndex = state.todoList.findIndex(todoItem => {
        return todoItem.id === action.todoItem.id
      });
      const newTodoList = [...state.todoList];
      
      newTodoList.splice(todoIndex, 1);

      return {
        ...state,
        todoList: newTodoList
      };
    }
    case ETodoListDispatchType.REMOVE_DONE: {
      const doneIndex = state.todoList.findIndex(doneItem => {
        return doneItem.id === action.doneItem.id
      });
      const newDoneList = [...state.doneList];
      
      newDoneList.splice(doneIndex, 1);

      return {
        ...state,
        doneList: newDoneList
      };
    }
    default:
      return state;
  }
};

/** init context */
const TodoListStateContext = createContext(initalTodoListState);
const TodoListDispatchContext = createContext((action: TodoListAction) => {});

const TodoListProvider: React.FC = (props) => {
  const [todoListState, todoListDispatch] = useReducer<TodoListReducer>(todoListReducer, initalTodoListState);
  
  return (
    <TodoListStateContext.Provider value={todoListState}>
      <TodoListDispatchContext.Provider value={todoListDispatch}>
        {props.children}
      </TodoListDispatchContext.Provider>
    </TodoListStateContext.Provider>
  );
};

/** custome hooks */
const useTodoListState = () => {
  return useContext(TodoListStateContext);
};

const useTodoListDispatch = () => {
  return useContext(TodoListDispatchContext);
};

export {
  TodoListProvider,
  useTodoListState,
  useTodoListDispatch
};