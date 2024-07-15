import { useQuery } from 'react-query';
import { fetchAllBlogs } from '../../services/blogService';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { NotFound } from '../../ui/NotFound';
import { TabHeader } from './TabHeader';
import { Blogs } from './Blogs';
import { AddPost } from './AddPost';
import { TopicSection } from './TopicSection';
import { BlogsList } from './BlogsList';
import { MainBlogSection } from './MainBlogSection';
import { FollowingSection } from '../user/FollowingSection';
import { FollowingMain } from '../user/FollowingMain';
import { useBlogs } from '../../hooks/blog/useBlogs';
import { useFollowing } from '../../hooks/user/useFollowing';
import { FollowingList } from '../user/FollowingList';
import TabSwitcher, { Tab, TabPanel } from '../../ui/TabSwitcher';

export const BlogsMain = ({ tabName, setTabName }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { blog } = useBlogs(token);
  const { following } = useFollowing(token);


  useEffect(() => {
    if (!token) {
      localStorage.removeItem('token');
      navigate('/signin');
    }
  }, [navigate, token]);

  return (
    <div className="dark:bg-slate-900">
      {/* <TabHeader tabName={tabName} setTabName={setTabName} />

      <MainBlogSection
        tabName={tabName}
        render={() => (
          <>
            <Blogs
              data={blog?.data}
              render={(blog) => <BlogsList key={blog.id} blog={blog} />}
            />
            <div>
              <TopicSection />
            </div>
          </>
        )}TabHe
      />
      <FollowingSection
        tabName={tabName}
        render={() => (
          <FollowingMain
            data={following}
            render={(followed) => (
              <FollowingList key={followed.id} followed={followed} />
            )}
          />
        )}
      /> */}
      <TabSwitcher>
        <div className="flex w-[90%] px-5 m-10 gap-8 border-b-[1.5px]">
          <Tab id="forYou">
            <button className="dark:text-slate-50">For you</button>
          </Tab>
          <Tab id="following">
            <button className="dark:text-slate-50">Following</button>
          </Tab>
        </div>

        <TabPanel whenActive="forYou">
          <Blogs
            data={blog?.data}
            render={(blog) => <BlogsList key={blog.id} blog={blog} />}
          />
          <div>
            <TopicSection />
          </div>
        </TabPanel>
        <TabPanel whenActive="following">
          <FollowingMain
            data={following}
            render={(followed) => (
              <FollowingList key={followed.id} followed={followed} />
            )}
          />
          <div>
            <TopicSection />
          </div>
        </TabPanel>
      </TabSwitcher>
    </div>
  );
};
