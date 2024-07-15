import { UserBadge } from '../../ui/UserBadge';

export const FollowingList = ({ followed }) => {
  return (
    <li className="flex gap-40 ">
      <div className="flex flex-col dark:bg-slate-900 w-[365px]">
        <UserBadge name={followed.name} />
        <h2 className="dark: text-slate-50 text-2xl">{followed.name}</h2>
      </div>
      <button className="rounded-sm bg-green-400 text-slate-50 w-52 h-16">
        UnFollow
      </button>
    </li>
  );
};
