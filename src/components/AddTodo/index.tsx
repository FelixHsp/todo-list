/**
 * @file 添加todo
 * @author Felix
 */

import React, { useRef, useCallback, memo } from 'react';

import { Button, Message } from '@alifd/next';
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

    const todoInputValue = todoInputRef.current.getValue();

    if (!todoInputValue) {
      Message.show({
        type: 'error',
        content: '当前输入为空',
        hasMask: true
      });
      return;
    };

    todoListDispatch({
      type: ETodoListDispatchType.ADD_TODO,
      todoItem: {
        id: Date.now(),
        text: todoInputValue
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