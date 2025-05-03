import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { Blog } from "@/api/models/Blog";

// Utility function to fetch a blog by ID
async function getBlogById(id: string) {
  const client = await clientPromise;
  const db = client.db("myapp");
  const blog = await db.collection("blogs").findOne({ _id: new ObjectId(id) });
  return blog;
}

// Utility function to update a blog by ID
async function updateBlog(id: string, data: Blog) {
  const client = await clientPromise;
  const db = client.db("myapp");

  // Update the blog
  const result = await db
    .collection("blogs")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });

  // Return the updated blog
  if (result.modifiedCount > 0) {
    return await getBlogById(id); // Return the updated blog
  }
  return null;
}

// Utility function to delete a blog by ID
async function deleteBlog(id: string) {
  const client = await clientPromise;
  const db = client.db("myapp");
  const result = await db
    .collection("blogs")
    .deleteOne({ _id: new ObjectId(id) });
  return result;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!ObjectId.isValid(id as string)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  if (req.method === "GET") {
    try {
      const blog = await getBlogById(id as string);
      if (blog) {
        res.status(200).json(blog);
      } else {
        res.status(404).json({ message: "Blog not found" });
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      res.status(500).json({ message: "Error fetching blog." });
    }
  } else if (req.method === "PUT") {
    try {
      const updatedBlog = await updateBlog(id as string, req.body);
      if (updatedBlog) {
        res.status(200).json(updatedBlog); // Return the updated blog data
      } else {
        res.status(404).json({ message: "Blog not found to update" });
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      res.status(500).json({ message: "Error updating blog." });
    }
  } else if (req.method === "DELETE") {
    try {
      const result = await deleteBlog(id as string);
      if (result.deletedCount > 0) {
        res.status(200).json({ message: "Blog deleted successfully" });
      } else {
        res.status(404).json({ message: "Blog not found to delete" });
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      res.status(500).json({ message: "Error deleting blog." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
