// pages/api/news/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getNews, createNews } from "@/api/services/News";
import { News } from "@/api/models/News";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const news = await getNews();
      res.status(200).json(news);
    } else if (req.method === "POST") {
      const newNews: Omit<News, "_id"> = {
        ...req.body,
        createdAt: new Date(),
      };
      const result = await createNews(newNews as News);
      res.status(201).json(result);
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err });
  }
}
