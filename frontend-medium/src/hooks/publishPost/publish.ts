import { useMutation } from 'react-query';
import { addNewBlog } from '../../services/blogService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PublishContext } from '../../contexts/publishPostContext';

export function usePublish() {
  const { title, content, setTitle, setContent } = useContext(PublishContext);

  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: addNewBlog,

    onError: (err: any) => {
      toast.error(err.message);
    },
    onSuccess: (res: any) => {
      toast.success('Newblog added');
      setTitle('');
      setContent('');
      navigate('/');
    },
  });

  function handlePublish() {
    if (title === '' || content === '')
      return toast.error('Add some content to create post');
    const data = {
      title,
      content,
    };

    const token = localStorage.getItem('token');
    if (token) mutate({ token, newBlogData: data });
  }

  return { handlePublish };
}
