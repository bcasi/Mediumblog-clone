import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
  const [token, setToken] = useState(() => {
    const storedValue = localStorage.getItem('token');
    return storedValue ? storedValue : null;
  });
  const [loggedUserName, setLoggedUserName] = useState(() => {
    const name = localStorage.getItem('name');
    return name ? name : null;
  });
  const navigate = useNavigate();

  function handleToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setToken(null);
    setLoggedUserName(null);
    navigate('/signin');
  }

  return (
    <>
      {token && (token !== null || token !== undefined) ? (
        <button
          onClick={handleToken}
          className="tracking-wider rounded-full w-10 h-10 font-semibold bg-slate-500 text-slate-50 uppercase"
        >
          {loggedUserName && loggedUserName?.[0] + loggedUserName?.[1]}
        </button>
      ) : null}
    </>
  );
};
