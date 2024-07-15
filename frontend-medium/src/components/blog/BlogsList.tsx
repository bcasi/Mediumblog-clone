import { NavLink } from 'react-router-dom';
import { UserImgNameConatiner } from '../../ui/UserImgNameContiner';
import { CategoryBadge } from '../../ui/CategoryBadge';
import { LuDot } from 'react-icons/lu';

export const BlogsList = ({ blog }) => {
  const blogId = blog.id;
  return (
    <NavLink
      to={`/blog/${blogId}`}
      className="flex flex-col gap-5 lg:max-w-[650px]  md:max-w-[20%] sm:max-w-[20%] max-w-[20%] cursor-pointer dark:bg-slate-900 "
    >
      <UserImgNameConatiner name={blog.author.name} />
      <h2 className="font-bold text-2xl text-wrap dark:text-white">
        {blog.title}
      </h2>
      <p className="truncate dark:text-white">{blog.content}</p>
      <div className="flex gap-4 items-center">
        <p className="text-slate-500">Mar 15, 2024</p>
        <LuDot />
        <p className="text-slate-500">7 min read </p>
        <LuDot />
        <CategoryBadge slate="slate" />
      </div>
    </NavLink>
  );
};
