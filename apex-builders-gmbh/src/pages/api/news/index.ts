// pages/api/news.ts
import type { NextApiRequest, NextApiResponse } from "next";

type News = {
  _id: string;
  title: string;
  body: string;
  createdAt: Date;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<News[]>
) {
  // Mock data that matches your News type
  const mockNews: News[] = [
    {
      _id: "1",
      title: "Breaking News",
      body: "This is important breaking news content.",
      createdAt: new Date(),
    },
    {
      _id: "2",
      title: "Technology Update",
      body: "Latest developments in technology sector.",
      createdAt: new Date(Date.now() - 86400000), // Yesterday
    },
  ];

  // Simulate network delay
  setTimeout(() => {
    res.status(200).json(mockNews);
  }, 500);
}
