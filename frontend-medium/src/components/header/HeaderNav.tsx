import { LeftNav } from './LeftNav';
import { RightNav } from './RightNav';

export const HeaderNav = ({ location, onClick }) => {
  return (
    <div className="flex bg-slate-50 justify-between w-full fixed top-0 left-0 right-0 h-15 py-3 px-3 border border-slate-800 dark:border-slate-50 border-t-0 border-x-0 dark:bg-slate-900">
      <LeftNav />
      <RightNav location={location} onClick={onClick} />
    </div>
  );
};
