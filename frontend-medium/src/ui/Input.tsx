import { useState } from 'react';

export const Input = ({ placeholder, input, onChangeInput }) => {
  return (
    <input
      className=" outline-none border rounded-sm px-3 py-1 w-72"
      type="text"
      placeholder={placeholder}
      value={input}
      onChange={(e) => onChangeInput(e.target.value)}
    />
  );
};
