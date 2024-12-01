import express from "express";
import { IUser } from "../models/user";
import { loginUser, registerUser, fetchUsers } from "../controllers/userController";
import auth, { CustomRequest } from "../middleware/auth";
import { isAdmin, isModeratorOrAdmin, isUser } from "../middleware/roles";

const router = express.Router();

// User registration route
router.post("/register", async (req, res) => {
  const userData: Partial<IUser> = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role || "user", // Default role is User
  };

  const registeredUser = await registerUser(userData);
  if (registeredUser.error) {
    return res.status(400).json({ error: registeredUser.error });
  }
  return res.status(201).json(registeredUser);
});

// User login route
router.post("/login", async (req, res) => {
  const userData: Partial<IUser> = {
    email: req.body.email,
    password: req.body.password,
  };

  const loggedInUser = await loginUser(userData);
  if (loggedInUser.error) {
    return res.status(400).json({ error: loggedInUser.error });
  }
  return res.status(200).json(loggedInUser);
});

// Fetch logged-in user's data
router.get("/me", auth, isUser, async (req: CustomRequest, res) => {
  return res.status(200).json({ user: req.user });
});

// Logout user
router.post("/logout", auth, async (req: CustomRequest, res) => {
  if (req.user) {
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
    await req.user.save();
  }
  return res.status(200).json({ message: "User logged out successfully." });
});

// Logout user from all devices
router.post("/logoutall", auth, async (req: CustomRequest, res) => {
  if (req.user) {
    req.user.tokens = [];
    await req.user.save();
  }
  return res.status(200).json({ message: "User logged out from all devices successfully." });
});

// Fetch all users - Admin only
router.get("/admin", auth, isAdmin, async (req, res) => {
  const allUsers = await fetchUsers();
  return res.status(200).json({ messages: [
    "Welcome, Admin!",
    "Find All User Details",
    "Here is the list of all users",
  ],
  data: allUsers, });
  
});

// Moderator-specific route
router.get("/moderator", auth, isModeratorOrAdmin, async (req, res) => {
  return res.status(200).json({ message: "Welcome Moderator!" });
});

// Accessible by all logged-in users
router.get("/dashboard", auth, isUser, async (req, res) => {
  return res.status(200).json({ message: "Welcome to your dashboard!" });
});

export default router;
