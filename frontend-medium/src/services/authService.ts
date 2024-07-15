import { User } from '../types/auth';
import { BASE_URL } from '../utils/constants';

export async function signupUser(signupData: User) {
  try {
    const registerUser = await fetch(BASE_URL + '/user/signup', {
      method: 'POST',
      body: JSON.stringify(signupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const registerData = await registerUser.json();
    if (!registerUser.ok) {
      if (registerUser.status === 401 || registerUser.status === 403) {
        // Handle 401 Unauthorized and 403 Forbidden errors here
        throw new Error(registerData.message);
      }
      throw new Error('Network response was not ok');
    }
    return registerData;
  } catch (e) {
    throw e;
  }
}

export async function signinUser(signinData: User) {
  try {
    const loginUser = await fetch(BASE_URL + '/user/signin', {
      method: 'POST',
      body: JSON.stringify(signinData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const loginData = await loginUser.json();
    if (!loginUser.ok) {
      if (loginUser.status === 401 || loginUser.status === 403) {
        // Handle 401 Unauthorized and 403 Forbidden errors here
        throw new Error(loginData.message);
      }
      throw new Error('Network response was not ok');
    }

    return loginData;
  } catch (e) {
    throw e;
  }
}
