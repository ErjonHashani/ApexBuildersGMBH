import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Blog as News } from "@/api/models/Blog"; // Reuse Blog model but treat it as News

// Create a news article
export async function createNews(data: News) {
  const client = await clientPromise;
  const db = client.db("myapp");
  const result = await db.collection("news").insertOne({
    ...data,
    createdAt: new Date(),
  });
  return result;
}

// Get all news articles
export async function getNews() {
  const client = await clientPromise;
  const db = client.db("myapp");
  const newsList = await db
    .collection("news")
    .find()
    .sort({ createdAt: -1 })
    .toArray();
  return newsList;
}

// Get a single news article by ID
export async function getSingleNews(id: string) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid news ID");
  }

  const client = await clientPromise;
  const db = client.db("myapp");
  const newsItem = await db
    .collection("news")
    .findOne({ _id: new ObjectId(id) });

  return newsItem;
}

// Update a news article
export async function updateNews(id: string, data: Partial<News>) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid news ID");
  }

  const client = await clientPromise;
  const db = client.db("myapp");
  const result = await db
    .collection("news")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });

  return result;
}

// Delete a news article
export async function deleteNews(id: string) {
  if (!ObjectId.isValid(id)) {
    throw new Error("Invalid news ID");
  }

  const client = await clientPromise;
  const db = client.db("myapp");
  const result = await db
    .collection("news")
    .deleteOne({ _id: new ObjectId(id) });

  return result;
}
