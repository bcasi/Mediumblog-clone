export const CategoryBadge = ({ topic = 'Technology', slate = '' }) => {
  const defaultClass =
    'rounded-full dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-slate-50 dark bg-slate-200 hover:bg-slate-300 text-sm font-medium px-2 py-1 lg:px-3 lg:py-2 cursor-pointer';
  const textSlate = slate ? ' text-slate-500' : '';

  return (
    <div key={topic} className={defaultClass + textSlate}>
      {topic}
    </div>
  );
};
