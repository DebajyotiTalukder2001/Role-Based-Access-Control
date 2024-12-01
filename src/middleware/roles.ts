import { NextFunction, Response } from "express";
import { CustomRequest } from "./auth";

export enum UserRole {
  Admin = "admin",
  Moderator = "moderator",
  User = "user",
}

// Middleware to check if user is admin
export const isAdmin = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role === UserRole.Admin) {
    return next();
  }
  return res.status(403).json({ message: "Access denied. Admins only." });
};

// Middleware to check if user is moderator or admin
export const isModeratorOrAdmin = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role === UserRole.Moderator || req.user?.role === UserRole.Admin) {
    return next();
  }
  return res.status(403).json({ message: "Access denied. Moderators or Admins only." });
};

// Middleware to check if user is logged in (User)
export const isUser = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role === UserRole.User || req.user?.role === UserRole.Moderator || req.user?.role === UserRole.Admin) {
    return next();
  }
  return res.status(403).json({ message: "Access denied. Users only." });
};
