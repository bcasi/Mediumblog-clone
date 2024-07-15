import { createContext, useState } from 'react';
import { PublishContextType } from '../types/publishcontext';

const PublishContext = createContext<PublishContextType | undefined>(undefined);

function PublishProvider({ children }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <PublishContext.Provider value={{ title, setTitle, content, setContent }}>
      {children}
    </PublishContext.Provider>
  );
}

export { PublishContext, PublishProvider };
