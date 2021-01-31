/**
 * @file 正在进行的列表
 * @author Felix
 */

import React, { useCallback, useMemo } from 'react';

import ListItem from '@/components/ListItem';

import { useTodoListState, useTodoListDispatch } from '@/store/todoListStore';

import { ETodoListDispatchType } from '@/types/todoList';

const TodoList: React.FC = () => {
  const todoListState = useTodoListState();
  const todoListDispatch = useTodoListDispatch();
  const { todoList } = todoListState;

  const onChangeStatus = useCallback((index: number) => {
    todoListDispatch({
      type: ETodoListDispatchType.ADD_DONE,
      todoItem: todoList[index]
    });
  }, [todoList]);

  const onDeleteTodo = useCallback((index: number) => {
    todoListDispatch({
      type: ETodoListDispatchType.REMOVE_TODO,
      todoItem: todoList[index]
    });
  }, [todoList]);

  return useMemo(() => {
    console.log('render todolist');
    
    return (
      <>
        <div>正在进行</div>
        {
          todoList.map((todoItem, index) => {
            return (
              <ListItem
                key={`todo-item-${todoItem.id}`}
                text={todoItem.text}
                type={'todo'}
                onChangeStatus={() => onChangeStatus(index)}
                onDelete={() => onDeleteTodo(index)}
              />
            );
          })
        }
      </>
    );
  }, [todoList, onChangeStatus, onDeleteTodo]);
};

export default TodoList;