import { FC } from 'react';
import { MyComponentProps } from '../types/component';
import { Input } from './Input';

export const InputContainer = ({
  label,
  placeholder,
  input,
  onChangeInput,
}) => {
  return (
    <div className="flex flex-col gap-3 max-w-80 space-y-1">
      <label className="w-full font-semibold mt-1">{label}</label>
      <Input
        placeholder={placeholder}
        input={input}
        onChangeInput={onChangeInput}
      />
    </div>
  );
};
