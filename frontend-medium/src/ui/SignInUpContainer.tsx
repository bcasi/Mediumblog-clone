import { FC } from 'react';
import { MyComponentProps } from '../types/component';

export const SignInUpContainer: FC<MyComponentProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      {children}
    </div>
  );
};
