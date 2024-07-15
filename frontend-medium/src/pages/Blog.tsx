import { BlogsMain } from '../components/blog/BlogsMain';
import { useState } from 'react';

export const Blog = () => {
  const [tabName, setTabName] = useState('forYou');

  return (
    <div className="dark:bg-slate-900  ">
      <BlogsMain tabName={tabName} setTabName={setTabName} />
    </div>
  );
};
