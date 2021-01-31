/**
 * @file todo输入框
 * @author Felix
 */

import React, { useState, useImperativeHandle, forwardRef, memo } from 'react';

import { Input } from '@alifd/next';

export interface ITodoInputRef {
  getValue: () => string;
  clear: () => void;
}

const TodoInput = (props, ref: { current: ITodoInputRef }) => {
  const [inputValue, setInputValue] = useState<string>('');

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return inputValue;
    },
    clear: () => {
      setInputValue('');
    }
  }));

  return (
    <Input
      value={inputValue}
      onChange={(value: string) => setInputValue(value)}
    />
  );
};

export default memo(forwardRef(TodoInput));