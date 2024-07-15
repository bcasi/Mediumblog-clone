export const UserBadge = ({ name = '' }) => {
  return (
    <div className="rounded-full uppercase flex justify-center items-center h-10 w-10 bg-slate-500 text-slate-50 ">
      <p>{name && name[0] + name[1]}</p>
    </div>
  );
};
