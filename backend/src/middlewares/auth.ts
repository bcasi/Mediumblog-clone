import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const headers = req.headers["authorization"];
  const token = headers && headers.split(" ")[1];

  try {
    const decoded = (await jwt.verify(token, JWT_SECRET)) as jwt.JwtPayload;
    res.set("userId", decoded.id);
    next();
  } catch {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}
