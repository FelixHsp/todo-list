import * as React from 'react';

import AddTodo from '@/components/AddTodo';

import { TodoListProvider } from '../../store/todoListStore';

import '@alifd/next/dist/next.css';

const TodoList = () => {
  return (
    <TodoListProvider>
      <div>TODO LIST</div>
      <AddTodo />
    </TodoListProvider>
  );
};

export default TodoList;
