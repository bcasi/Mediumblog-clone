import { Request, Response, NextFunction } from "express";

export function isUserFollowing(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = res.get("userId");
  if (res.locals.followed) {
    const isFollowing = res.locals.followed.followed.some(
      (user: any) => user.followerId === userId
    );
    res.set("isFollowing", isFollowing);
  }
  next();
}
