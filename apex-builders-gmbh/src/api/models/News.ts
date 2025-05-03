export interface News {
  _id: string;
  title: string;
  body: string;
  createdAt: Date;
}

// Create a type for new news items (without required _id and createdAt)
export type NewNewsItem = Omit<News, "_id" | "createdAt">;
