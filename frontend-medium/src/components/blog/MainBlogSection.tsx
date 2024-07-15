export const MainBlogSection = ({ tabName, render }) => {
  if (tabName === 'forYou')
    return (
      <div className="grid grid-cols-3 px-3 py-2 lg:px-10 lg:py-5 gap-4 md:gap-8 lg:gap-8 dark:bg-slate-900">
        {render()}
      </div>
    );
};
