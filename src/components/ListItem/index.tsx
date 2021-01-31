/**
 * @file 单个列表项
 * @author Felix
 */

import * as React from 'react';

import { Checkbox, Icon } from '@alifd/next';

interface ITodoItem {
  text: string;
  type: 'todo' | 'done';
  onChangeStatus: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { text, type, onChangeStatus, onDelete } = props;

  return (
    <div>
      <Checkbox
        onChange={onChangeStatus}
        defaultChecked={type === 'done'}
      />
      <span>
        {text}
      </span>
      <Icon type="ashbin" onClick={onDelete} />
    </div>
  );
};

export default React.memo(TodoItem);