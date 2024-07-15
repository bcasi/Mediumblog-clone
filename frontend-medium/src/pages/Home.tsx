import { Outlet, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { HeaderNav } from '../components/header/HeaderNav';
import { Container } from '../ui/Container';

import { usePublish } from '../hooks/publishPost/publish';

export const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const { handlePublish } = usePublish();
  const isDarkMode = darkMode ? 'dark' : '';
  const location = useLocation();
  const isAuth =
    location.pathname === '/signin' || location.pathname === '/signup';
  return (
    <div className={isDarkMode}>
      <div className="relative">
        {!isAuth && <HeaderNav location={location} onClick={handlePublish} />}

        <Container isAuth={isAuth}>
          <Outlet></Outlet>
        </Container>
      </div>
    </div>
  );
};
