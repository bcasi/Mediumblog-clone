import { useState } from 'react';
import { AuthorReviewContainer } from '../../ui/AuthorReviewContainer';
import { Button } from '../../ui/Button';
import { InputContainer } from '../../ui/InputContainer';
import { SignInUpContainer } from '../../ui/SignInUpContainer';
import { SignInUpHeader } from '../../ui/SignInUpHeader';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { signinUser } from '../../services/authService';

export const SigninComponent = () => {
  const [email, onSetEmail] = useState('');
  const [password, onSetPassword] = useState('');

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: signinUser,
    onError: (err: any) => {
      toast.error(err.message);
    },
    onSuccess: (res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('name', res.name);
      toast.success('User logged in successfully');
      navigate('/blog');
    },
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    const data = { password, email };
    mutate(data);
  }

  return (
    <div className="grid grid-cols-2">
      <SignInUpContainer>
        <SignInUpHeader type="login" />

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
          Sign in
        </Button>
      </SignInUpContainer>
      <AuthorReviewContainer />
    </div>
  );
};
