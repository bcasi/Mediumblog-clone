import { AddBlog } from '../types/blog';
import { BASE_URL } from '../utils/constants';

export async function fetchAllBlogs(token: string | null | undefined) {
  try {
    const getAllBlog = await fetch(BASE_URL + '/blog/bulk', {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (getAllBlog) {
      const blogData = await getAllBlog.json();

      return blogData;
    }
  } catch (e) {
    throw e;
  }
}

export async function fetchBlog(token: string | null | undefined, id: string) {
  try {
    const getBlog = await fetch(BASE_URL + `/blog?id=${id}`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (getBlog) {
      const blogData = await getBlog.json();

      return blogData;
    }
  } catch (e) {
    throw e;
  }
}

export async function addNewBlog({ token, newBlogData }) {
  try {
    const getBlog = await fetch(BASE_URL + `/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newBlogData),
    });

    if (getBlog) {
      const blogData = await getBlog.json();

      return blogData;
    }
  } catch (e) {
    throw e;
  }
}

export async function addLike({ token, blogId }) {
  const data = { blogId };
  try {
    const sendLike = await fetch(BASE_URL + `/blog/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return;

    if (sendLike) {
      const likeData = await sendLike.json();

      return likeData;
    }
  } catch (e) {
    throw e;
  }
}
export async function removeLike({ token, blogId }) {
  const data = { blogId };
  try {
    const sendLike = await fetch(BASE_URL + `/blog/unlike`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (sendLike) {
      const likeData = await sendLike.json();

      return likeData;
    }
  } catch (e) {
    throw e;
  }
}
