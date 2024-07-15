export const Container = ({ isAuth, children }) => {
  if (isAuth) {
    return <>{children}</>;
  }
  return (
    <div className="max-w-[120rem] mt-[77px] py-5 dark:bg-slate-900  mx-auto h-screen">
      {children}
    </div>
  );
};
