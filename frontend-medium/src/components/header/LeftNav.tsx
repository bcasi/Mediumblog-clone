import { useContext } from 'react';

import { ThemeContext } from '../../contexts/themeContext';
import { FaMedium } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export const LeftNav = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const defaultClass = 'w-[55px] h-[55px] transition duration-0 cursor-pointer';
  const isDarkMode = darkMode ? ' text-white' : '';

  return (
    <div className="pl-5">
      <FaMedium
        className={defaultClass + isDarkMode}
        onClick={() => navigate('/blog')}
      />
    </div>
  );
};
