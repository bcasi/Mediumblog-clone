export const TopicBadge = ({ data, render }) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-5">
      {data.map(render)}
    </div>
  );
};
