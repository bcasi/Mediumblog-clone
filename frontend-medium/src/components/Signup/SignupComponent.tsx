import { useMutation } from 'react-query';
import { AuthorReviewContainer } from '../../ui/AuthorReviewContainer';
import { Button } from '../../ui/Button';
import { InputContainer } from '../../ui/InputContainer';
import { SignInUpContainer } from '../../ui/SignInUpContainer';
import { SignInUpHeader } from '../../ui/SignInUpHeader';
import { signupUser } from '../../services/authService';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignupComponent = () => {
  const [username, onSetUsername] = useState('');
  const [email, onSetEmail] = useState('');
  const [password, onSetPassword] = useState('');
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: signupUser,
    onSuccess: (res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('name', res.name);
      toast.success('User created successfully');
      navigate('/blog');
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    const data = { username, password, email };
    mutate(data);
  }

  return (
    <div className="grid grid-cols-2">
      <SignInUpContainer>
        <SignInUpHeader type="register" />
        <InputContainer
          label="Username"
          placeholder="Enter  your username"
          input={username}
          onChangeInput={onSetUsername}
        />
        <InputContainer
          label="Email"
          placeholder="m@example.com"
          input={email}
          onChangeInput={onSetEmail}
        />
        <InputContainer
          label="Password"
          placeholder=""
          input={password}
          onChangeInput={onSetPassword}
        />
        <div className="m-5"></div>
        <Button isLoading={isLoading} onClick={(e) => handleSubmit(e)}>
          Sign up
        </Button>
      </SignInUpContainer>
      <AuthorReviewContainer />
    </div>
  );
};
