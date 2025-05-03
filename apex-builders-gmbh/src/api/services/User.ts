import { ObjectId } from "mongodb";
import { getUsersCollection } from "../models/User";
import bcrypt from "bcryptjs";

export const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const users = await getUsersCollection();
  const hashedPassword = await bcrypt.hash(userData.password, 12);

  const result = await users.insertOne({
    ...userData,
    password: hashedPassword,
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    _id: new ObjectId
  });

  // Return the complete user document with _id
  return await users.findOne({ _id: result.insertedId });
};

export const findUserByEmail = async (email: string) => {
  const users = await getUsersCollection();
  return await users.findOne({ email });
};

export const validatePassword = async (
  user: { password: string },
  password: string
) => {
  return await bcrypt.compare(password, user.password);
};
