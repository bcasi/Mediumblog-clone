import { useQuery } from 'react-query';
import { getFollowing } from '../../services/userService';

export function useFollowing(token: string) {
  const {
    isLoading: isLoadingFollowing,
    isError: isErrorFollowing,
    data: following,
    error,
  } = useQuery({
    queryKey: ['following'],
    queryFn: () => getFollowing(token),
  });

  return { isLoadingFollowing, isErrorFollowing, following, error };
}
