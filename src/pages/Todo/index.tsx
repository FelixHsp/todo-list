import * as React from 'react';

import AddTodo from '@/components/AddTodo';
import TodoList from '@/components/TodoList';
import DoneList from '@/components/DoneList';

import { TodoListProvider } from '../../store/todoListStore';

import '@alifd/next/dist/next.css';

const Todo = () => {
  return (
    <TodoListProvider>
      <div>TODO LIST</div>
      <AddTodo />
      <TodoList />
      <DoneList />
    </TodoListProvider>
  );
};

export default Todo;
