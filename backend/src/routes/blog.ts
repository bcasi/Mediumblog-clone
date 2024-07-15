import * as express from "express";
import { authMiddleware } from "../middlewares/auth";
import { prisma } from "../sqlClient";
import { Request, Response, NextFunction } from "express";
import { isUserFollowing } from "../middlewares/user";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const userId = res.get("userId");

  try {
    const post = await prisma.post.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        authorId: userId,
      },
    });

    res.json({
      id: post.id,
    });
  } catch (e) {
    res.status(411).json({
      message: "Some error occurred while posting blog",
    });
  }
});

router.put("/", authMiddleware, async (req, res) => {
  const userId = res.get("userId");
  const blogId = req.body.blogId;
  try {
    const postUpdate = await prisma.post.update({
      where: {
        authorId: userId,
        id: blogId,
      },
      data: {
        title: req.body.title,
        content: req.body.content,
      },
    });

    return res.json({
      message: "Updated post successfully",
    });
  } catch (e) {
    res.status(411).json({
      message: "Some error occurred while posting blog",
    });
  }
});

router.get(
  "/",
  authMiddleware,
  isUserFollowing,
  async (req: Request, res: Response) => {
    const blogId = req.query.id.toString();
    const userId = res.get("userId");

    try {
      const getPost = await prisma.post.findFirst({
        where: { id: blogId },
        select: {
          id: true,
          title: true,
          content: true,
          published: false,
          authorId: true,
          createdAt: true,
          author: {
            select: {
              name: true,
              followed: {
                where: { followerId: userId },
              },
            },
          },
          likes: true,
        },
      });
      const { authorId, author } = await getPost;

      const { followed } = author;

      const isFollowing = followed.some(
        (user: any) => user.followerId === userId
      );
      return res.json({
        data: { ...getPost, isFollowing },
        currentUserId: userId,
      });
    } catch (e) {
      return res.status(411).json({
        message: "Some error occurred while posting blog",
      });
    }
  }
);

//Tod: pagination
router.get("/bulk", authMiddleware, async (req, res) => {
  try {
    const getAllPost = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: false,
        authorId: true,
        createdAt: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return res.json({
      data: getAllPost,
    });
  } catch (e) {
    return res.status(411).json({
      message: "Error while fetching data",
    });
  }
});

router.post("/like", authMiddleware, async (req, res) => {
  const blogId = req.body.blogId;
  const userId = res.get("userId");
  try {
    const like = await prisma.likes.create({
      data: {
        postId: blogId,
        userId: userId,
      },
    });
    res.json({ data: like });
  } catch (e) {
    res.status(500).json({ message: "An error occured while liking the post" });
  }
});

router.delete("/unlike", authMiddleware, async (req, res) => {
  const blogId = req.body.blogId;
  const userId = res.get("userId");
  try {
    const unlike = await prisma.likes.deleteMany({
      where: {
        postId: blogId,
        userId: userId,
      },
    });
    return res.json({ data: unlike });
  } catch (e) {
    res.json({
      message: "Cannot do this request now",
    });
  }
});

export default router;
