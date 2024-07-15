import { UserBadge } from './UserBadge';

export const UserImgNameConatiner = ({ name }: { name: String }) => {
  return (
    <div className="flex gap-2 items-center mt-5">
      <UserBadge name={name} />
      <p className="dark:text-slate-50 text-slate-600 ">{name}</p>
    </div>
  );
};
