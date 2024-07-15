import { NavLink } from 'react-router-dom';
import { TopicBadge } from '../../ui/TopicBadge';
import { CategoryBadge } from '../../ui/CategoryBadge';

const topics = [
  'Programming',
  'Data Science',
  'Technology',
  'Self Improvement',
  'Writing',
  'Relationships',
  'Machine Learning',
  'Productivity',
  'Politics',
];

export function TopicSection() {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 max-w-[80%] lg:max-w-[80%] lg:ml-10  md:gap-2 fixed ">
      <p className="font-semibold text-xl dark:text-slate-100 ">
        Discover more of what matters to you
      </p>
      <TopicBadge
        data={topics}
        render={(topic) => <CategoryBadge key={topic} topic={topic} />}
      ></TopicBadge>
      <NavLink
        className="text-green-500 text-base font-medium overflow-hidden"
        to={'/blog'}
      >
        See more topics
      </NavLink>
    </div>
  );
}
