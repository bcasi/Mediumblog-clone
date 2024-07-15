import { BlogsList } from './BlogsList';

export const Blogs = ({ data, render }) => {
  return (
    <ul className="grid grid-flow-row col-span-2  gap-10 divide-y  ">
      {data?.map(render)}
    </ul>
  );
};
