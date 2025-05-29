// pages/api/news/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { updateNews, deleteNews } from "@/api/services/News";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    if (req.method === "PUT") {
      const result = await updateNews(id as string, req.body);
      res.status(200).json(result);
    } else if (req.method === "DELETE") {
      const result = await deleteNews(id as string);
      res.status(200).json(result);
    } else {
      res.setHeader("Allow", ["PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err });
  }
}
