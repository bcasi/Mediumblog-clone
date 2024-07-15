import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryDevtools } from 'react-query/devtools';
import Signup from './pages/Signup';

import { Blog } from './pages/Blog';
import Signin from './pages/Signin';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { BlogPost } from './components/blog/BlogPost';
import { ThemeProvider } from './contexts/themeContext';
import { AddPost } from './components/blog/AddPost';
import { PublishProvider } from './contexts/publishPostContext';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 0, //* time to till refetch again
//       // staleTime: 60 * 500, //* time to till refetch again
//     },
//   },
// });

const queryClient = new QueryClient();

// Filename - App.js

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider>
        <PublishProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Home />}>
                <Route index element={<Blog />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/blog/create" element={<AddPost />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PublishProvider>
      </ThemeProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#f8fafc',
            color: '#020617',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
