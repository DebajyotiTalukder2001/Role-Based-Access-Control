import { Schema, model, Document, Model, HydratedDocument } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserRole } from "../middleware/roles";

// Interface for user documents
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  tokens: { token: string }[];
  role: UserRole;
}

// Interface for instance methods
export interface IUserMethods {
  generateAuthToken(): Promise<string>;
  toJSON(): Omit<IUser, "password" | "tokens">; // Exclude sensitive fields
}

// Interface for static methods
interface UserModel extends Model<IUser, {}, IUserMethods> {
  findByCredentials(
    email: string,
    password: string
  ): Promise<HydratedDocument<IUser, IUserMethods>>;
}

// Define the schema
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Unique email
  password: { type: String, required: true },
  tokens: [{ token: { type: String, required: true } }],
  role: {
    type: String,
    enum: Object.values(UserRole), // Restrict to defined roles
    default: UserRole.User, // Default role is "user"
    required: true,
  },
});

// Middleware to hash passwords before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

// Instance method: Generate JWT token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), role: user.role }, // Include user role
    process.env.JWT_KEY as string
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// Instance method: Exclude sensitive data
userSchema.methods.toJSON = function () {
  const user = this as IUser;
  const userObject = user.toObject();
  delete userObject.password; // Exclude password
  delete userObject.tokens; // Exclude tokens
  return userObject;
};

// Static method: Authenticate user by credentials
userSchema.statics.findByCredentials = async function (email: string, password: string) {
  const user = await this.findOne({ email });
  if (!user) {
    return null;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return null;
  }
  return user;
};

// Create the model
const User = model<IUser, UserModel>("User", userSchema);

export default User;
