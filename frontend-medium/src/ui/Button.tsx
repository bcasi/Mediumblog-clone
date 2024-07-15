export const Button = ({ children, isLoading, onClick }) => {
  const defaultClass =
    ' w-72 outline-none rounded-md h-8 border-rounded  text-slate-100 ';
  const isbuttonOnLoad = isLoading ? 'bg-slate-300' : 'bg-slate-900';
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={defaultClass + isbuttonOnLoad}
    >
      {children}
    </button>
  );
};
