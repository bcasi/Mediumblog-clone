export const TabButton = ({ tabName, label, onClick, children }) => {
  const className =
    tabName === label
      ? 'border-b-2 border-slate-800 dark:border-slate-50 pb-[25px] text-1xl text-semibold dark:dark:text-slate-100'
      : 'border-b-2 border-slate-50 dark:border-slate-800 pb-[25px] text-slate-400 dark:text-slate-100';

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
