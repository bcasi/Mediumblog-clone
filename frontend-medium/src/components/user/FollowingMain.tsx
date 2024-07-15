export const FollowingMain = ({ data, render }) => {
  return (
    <div className="dark:bg-slate-900 col-span-2 h-screen mx-10">
      {data.map(render)}
    </div>
  );
};
