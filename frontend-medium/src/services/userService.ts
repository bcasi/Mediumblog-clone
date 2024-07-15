import { BASE_URL } from '../utils/constants';

export async function followAuthor({ token, authorId }) {
  const data = { authorId };
  try {
    const followAuthor = await fetch(BASE_URL + `/user/follow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (followAuthor.ok) {
      const res = await followAuthor.json();
      return res;
    } else {
      const res = await followAuthor.json();
      throw new Error(res);
    }
  } catch (e) {
    throw e;
  }
}

export async function unfollowAuthor({ token, authorId }) {
  const data = { authorId };
  try {
    const unfollowAuthor = await fetch(BASE_URL + `/user/unfollow`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (unfollowAuthor.ok) {
      const res = await unfollowAuthor.json();
      return res;
    } else {
      const res = await unfollowAuthor.json();
      throw new Error(res);
    }
  } catch (e) {
    throw e;
  }
}

export async function getFollowing(token: string | null | undefined) {
  try {
    const following = await fetch(BASE_URL + `/user/following`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (following.ok) {
      const res = await following.json();
      return res;
    } else {
      const res = await following.json();
      throw new Error(res);
    }
  } catch (e) {
    throw e;
  }
}
