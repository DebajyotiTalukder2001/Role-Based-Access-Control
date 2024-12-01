import User from "../models/user";
import { IUser } from "../models/user";
import { UserRole } from "../middleware/roles";

// User Registration

export const registerUser = async (user: Partial<IUser>) => {
  const { name, email, password, role } = user; // Include role in the parameters
  if (!name || !email || !password) {
    return {
      error: "Please provide all the required fields",
    };
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return {
      error: "User with that email already exists.",
    };
  }

  
  const newUser = new User({ 
    name, 
    email, 
    password, 
    role: role || UserRole.User // Default role is UserRole.User if not provided
  });

  await newUser.save();
  const token = await newUser.generateAuthToken();
  
  return {
    message: "User registered successfully!",
    user: newUser,
    token,
  };
};


// User login

export const loginUser = async (user: Partial<IUser>) => {
  const { email, password } = user;
  if (!email || !password) {
    return {
      error: "Please provide all the required fields",
    };
  }

  const existingUser = await User.findByCredentials(email, password);
  if (!existingUser) {
    return {
      error: "Invalid email or password.",
    };
  }

  const token = await existingUser.generateAuthToken();
  return {
    message: "Login successful!",
    user: existingUser,
    token,
  };
};


// Fetch Users

export const fetchUsers = async () => {
  const users = await User.find({});
  return users;
};
