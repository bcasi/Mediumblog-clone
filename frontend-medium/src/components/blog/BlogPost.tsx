import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { addLike, fetchBlog, removeLike } from '../../services/blogService';
import { PiHandsClappingThin } from 'react-icons/pi';
import { AiOutlineMessage } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { BlogPostSkeleton } from '../../ui/skeleton/BlogPostSkeleton';
import { followAuthor, unfollowAuthor } from '../../services/userService';
export const BlogPost = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data: blogPost, isLoading } = useQuery({
    queryKey: ['blogPost'],
    queryFn: () => fetchBlog(localStorage.getItem('token'), id),
  });

  const likesCount =
    blogPost?.data.likes.length >= 1000
      ? blogPost?.data?.likes.length / 100
      : blogPost?.data?.likes.length;

  const isLiked =
    blogPost?.data?.likes.filter(
      (likedUser: any) => likedUser.userId === blogPost.currentUserId
    ).length > 0
      ? true
      : false;

  const defaultLikeButtonClass = 'mt-5 cursor-pointer ';
  const likedColor = isLiked
    ? 'dark:fill-slate-100 fill-slate-800 hover:fill-slate-900 dark:hover:fill-slate-50'
    : ' fill-slate-500 hover:fill-slate-900 dark:fill-slate-500 dark:hover:fill-slate-50';

  const { mutate: likeOrDislike } = useMutation({
    mutationFn: isLiked ? removeLike : addLike,
    onError: (err: any) => {
      toast.error(err.message);
    },
    onSuccess: (res: any) => {
      toast.success(isLiked ? 'removed like' : 'added like');
      queryClient.invalidateQueries({ queryKey: ['blogPost'] });
    },
  });

  const { mutate: followOrUnfollow } = useMutation({
    mutationFn: blogPost?.data?.isFollowing ? unfollowAuthor : followAuthor,
    onError: (err: any) => {
      toast.error(err.message);
    },
    onSuccess: (res: any) => {
      toast.success(res.message + ' ' + blogPost?.data?.author?.name);
      queryClient.invalidateQueries({ queryKey: ['blogPost'] });
    },
  });

  if (isLoading) return <BlogPostSkeleton />;

  return (
    <div className="grid grid-cols-3 w-full gap-10 p-10 dark:bg-slate-900 h-screen">
      <div className="col-span-2 flex flex-col gap-5 px-3 divide-y">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl font-bold dark:text-slate-100">
            {blogPost?.data?.title}
          </h2>
          <div className="flex gap-5">
            <p> 5 min read</p>.<p>Mar 6, 2024</p>
          </div>
        </div>
        <div className="flex items-center gap-10 ">
          <div className="flex gap-2 items-center">
            <PiHandsClappingThin
              onClick={() =>
                likeOrDislike({
                  token: localStorage.getItem('token'),
                  blogId: blogPost?.data?.id,
                })
              }
              size={35}
              className={defaultLikeButtonClass + likedColor}
            />
            <p className="mt-5 dark:text-slate-100">{likesCount}</p>
          </div>

          <span className="flex items-center gap-3">
            <AiOutlineMessage
              size={35}
              className="mt-5 cursor-pointer fill-slate-500 hover:fill-slate-900 font-light"
            />
            <p className="mt-5">55</p>
          </span>
        </div>
        <p className="text-2xl text-slate-600 dark:text-slate-100">
          {blogPost?.data?.content}
        </p>
      </div>
      <div className="flex flex-col gap-3 pl-5 ">
        <p className="font-semibold dark:text-slate-100">Author</p>
        <div className="flex gap-3">
          <div className="rounded-full mt-5 bg-slate-300 w-[50px] h-[30px] md:w-[50px] md:h-[30px]"></div>
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl dark:text-slate-100 capitalize">
              {blogPost?.data?.author?.name}
            </h3>
            <p className="text-slate-400 font-semibold">
              Fullstack developer having expirence in Typescript, Javascript,
              React, NextJs, PostGresSQL
            </p>
          </div>
        </div>
        <button
          onClick={() =>
            followOrUnfollow({
              token: localStorage.getItem('token'),
              authorId: blogPost?.data?.authorId,
            })
          }
          className="text-green-500 font-medium bg-slate-100 rounded-lg h-10 hover:bg-green-50"
        >
          {blogPost?.data?.isFollowing ? 'UnFollow' : 'Follow'}
        </button>
      </div>
    </div>
  );
};
