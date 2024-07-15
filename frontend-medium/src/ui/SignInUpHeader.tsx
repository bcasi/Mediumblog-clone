import { NavLink } from 'react-router-dom';

export const SignInUpHeader = ({ type }) => {
  return (
    <div className="flex flex-col text-center  items-center mb-5 ">
      <h2 className="font-bold text-3xl tracking-wider">
        {type === 'register' ? 'Create an account' : 'Login to your account'}
      </h2>
      <div>
        {type === 'register' ? (
          <span className="flex gap-1">
            Already have an account?
            <NavLink to="/signin">Login</NavLink>
          </span>
        ) : (
          <span className="flex gap-1">
            Doesn't have an account?
            <NavLink to="/signup">Register</NavLink>
          </span>
        )}
      </div>
    </div>
  );
};
