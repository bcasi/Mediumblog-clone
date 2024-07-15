import { GoPlus } from 'react-icons/go';
import { TabButton } from '../../ui/TabButton';
import { NavLink } from 'react-router-dom';

export const TabHeader = ({ tabName, setTabName }) => {
  return (
    <div className="flex w-[90%] px-5 m-10 gap-8 border-b-[1.5px]">
      {/* <NavLink
      to={'blog/create'}
        className="pb-[25px] text-2xl dark:text-slate-100 transition duration-0"
        
      >
        <GoPlus />
      </Navlink> */}

      <NavLink
        to={'/blog/create'}
        onClick={() => setTabName('addBlog')}
        className="pb-[25px] text-2xl dark:text-slate-100 transition duration-0"
      >
        <GoPlus />
      </NavLink>

      <TabButton
        tabName={tabName}
        label="forYou"
        onClick={() => setTabName('forYou')}
      >
        For You
      </TabButton>
      <TabButton
        tabName={tabName}
        label="following"
        onClick={() => setTabName('following')}
      >
        Following
      </TabButton>
    </div>
  );
};
