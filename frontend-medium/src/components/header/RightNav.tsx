import { useContext } from 'react';
import { LogoutButton } from '../../ui/LogoutButton';
import { ThemeContext } from '../../contexts/themeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useLocation } from 'react-router-dom';

export const RightNav = ({ location, onClick }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  // const location = useLocation();

  return (
    <div className="flex items-center pr-5 gap-4">
      {location.pathname === '/blog/create' && (
        <button
          onClick={onClick}
          className="px-3 py-2 rounded-full bg-green-500 text-slate-50"
        >
          Publish
        </button>
      )}
      <LogoutButton />
      <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={30} />
    </div>
  );
};
