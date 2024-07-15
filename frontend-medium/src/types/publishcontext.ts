import { ReactNode } from 'react';

export type PublishContextType = {
  title: String;
  content: String;
  setTitle: (value: any) => void;
  setContent: (value: any) => void;
};

// export type ThemeProviderProps = {
//   children: ReactNode;
// };
