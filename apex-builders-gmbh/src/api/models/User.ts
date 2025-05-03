import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

export async function getUsersCollection() {
  const client = await clientPromise;
  return client.db().collection<User>("users");
}
