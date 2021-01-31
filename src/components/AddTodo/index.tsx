import React, { useRef, useCallback, memo } from 'react';

import { Button } from '@alifd/next';
import TodoInput, { ITodoInputRef } from '@/components/TodoInput';

import { useTodoListDispatch } from '../../store/todoListStore';

import { ETodoListDispatchType } from '../../types/todoList';

const AddTodo: React.FC = () => {
  const todoListDispatch = useTodoListDispatch();
  const todoInputRef = useRef<ITodoInputRef>(null);

  const onClickAdd = useCallback(() => {
    if (!todoInputRef.current) {
      return;
    }

    todoListDispatch({
      type: ETodoListDispatchType.ADD_TODO,
      todoItem: {
        id: Date.now(),
        text: todoInputRef.current.getValue()
      }
    });
    todoInputRef.current.clear();
  }, []);

  return (
    <>
      <TodoInput ref={todoInputRef} />
      <Button type={'primary'} onClick={onClickAdd}>
        添加
      </Button>
    </>
  );
};

export default memo(AddTodo);