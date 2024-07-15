import { useQuery } from 'react-query';
import { fetchAllBlogs } from '../../services/blogService';

export function useBlogs(token) {
  const {
    isLoading,
    isError,
    data: blog,
    error,
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => fetchAllBlogs(token),
  });

  return { isLoading, isError, blog, error };
}
