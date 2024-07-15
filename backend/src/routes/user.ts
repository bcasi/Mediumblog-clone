import * as express from "express";
import * as jwt from "jsonwebtoken";
import { prisma } from "../sqlClient";

import { JWT_SECRET } from "../config";
import * as bcrypt from "bcrypt";
import { authMiddleware } from "../middlewares/auth";
import { json } from "body-parser";

// use `prisma` in your application to read and write data in your DB

const router = express.Router();

const saltRounds = 10;

router.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.username;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
      },
    });
    const token = await jwt.sign({ id: user.id }, JWT_SECRET);
    return res.json({
      token,
      name,
    });
  } catch (e) {
    if (e?.message?.meta?.target?.[0] === "email")
      return res.status(403).json({
        message: "email is already taken",
      });
    return res.status(403).json({
      message: "error while signing up",
    });
  }
});

router.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token = await jwt.sign({ id: user.id }, JWT_SECRET);
        return res.json({
          name: user.name,
          token: token,
        });
      } else {
        return res.status(403).json({
          message: "Password is incorrect",
        });
      }
    } else {
      throw new Error("Incorrect email or password");
    }
  } catch (e) {
    res.status(403).json({
      message: e.message,
    });
  }
});

router.post("/follow", authMiddleware, async (req, res) => {
  const userId = res.get("userId");
  const authorId = req.body.authorId;
  try {
    const followAuthor = await prisma.follow.create({
      data: {
        followedId: authorId,
        followerId: userId,
      },
    });

    return res.json({ message: "Following" });
  } catch (e) {
    return res.status(400).json({
      message: "Could not follow author due to technical error",
    });
  }
});

router.delete("/unfollow", authMiddleware, async (req, res) => {
  const userId = res.get("userId");
  const authorId = req.body.authorId;
  try {
    const unfollowAuthor = await prisma.follow.deleteMany({
      where: {
        followedId: authorId,
        followerId: userId,
      },
    });
    return res.json({ message: "Unfollowed" });
  } catch (e) {
    return res.status(400).json({
      message: "Could not unfollow author due to technical error",
    });
  }
});

router.get("/following", authMiddleware, async (req, res) => {
  const userId = res.get("userId");
  try {
    // const user = await prisma.user.findUnique({
    //   where: { id: userId },
    //   select: {
    //     name: true,
    //     follows: {
    //       select: {
    //         followed: {
    //           select: {
    //             followed: {
    //               select: {
    //                 follower: {
    //                   select: {
    //                     name: true,
    //                   },
    //                 },
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // });
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        follows: true,
      },
    });

    const filterFollowedId = user.follows.map((item) => item.followedId);
    console.log(filterFollowedId);
    const followedData = await prisma.user.findMany({
      where: {
        id: {
          in: filterFollowedId,
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

    // const followersNames = await user.follows
    //   .flatMap((follow) =>
    //     follow.followed.followed.map(
    //       (followerRelation) => followerRelation.follower.name
    //     )
    //   )
    //   .filter((name) => name !== user.name);

    // res.json(followersNames);
    res.json(followedData);
  } catch (e) {
    return res.status(403).json({ message: "Some technical error" });
  }
});

export default router;
