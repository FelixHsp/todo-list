/**
 * @file 正在进行的列表
 * @author Felix
 */

import React, { useCallback, useMemo } from 'react';

import ListItem from '@/components/ListItem';

import { useTodoListState, useTodoListDispatch } from '@/store/todoListStore';

import { ETodoListDispatchType } from '@/types/todoList';

const DoneList: React.FC = () => {
  const todoListState = useTodoListState();
  const todoListDispatch = useTodoListDispatch();
  const { doneList } = todoListState;

  const onChangeStatus = useCallback((index: number) => {
    todoListDispatch({
      type: ETodoListDispatchType.RESET_TODO,
      doneItem: doneList[index]
    });
  }, [doneList]);

  const onDeleteDone = useCallback((index: number) => {
    todoListDispatch({
      type: ETodoListDispatchType.REMOVE_DONE,
      doneItem: doneList[index]
    });
  }, [doneList]);

  return useMemo(() => {
    console.log('render donelist');
    
    return (
      <>
        <div>已经完成</div>
        {
          doneList.map((todoItem, index) => {
            return (
              <ListItem
                key={`todo-item-${todoItem.id}`}
                text={todoItem.text}
                type={'done'}
                onChangeStatus={() => onChangeStatus(index)}
                onDelete={() => onDeleteDone(index)}
              />
            );
          })
        }
      </>
    );
  }, [doneList, onChangeStatus, onDeleteDone]);
};

export default DoneList;