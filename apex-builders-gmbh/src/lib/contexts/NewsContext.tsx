// lib/contexts/NewsContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { News, NewNewsItem } from "@/api/models/News";

interface NewsContextType {
  news: News[];
  setNews: React.Dispatch<React.SetStateAction<News[]>>;
  addNews: (newsItem: NewNewsItem) => void;
  updateNews: (id: string, updatedData: Partial<News>) => void;
  deleteNews: (id: string) => void;
  loading: boolean;
  error: string | null;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        setError(`Failed to load news --> ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const addNews = async (newsItem: NewNewsItem) => {
    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsItem),
      });
      const newItem = await res.json();
      setNews((prev) => [...prev, newItem]);
    } catch (err) {
      console.error("Failed to add news", err);
    }
  };

  const updateNews = async (id: string, updatedData: Partial<News>) => {
    try {
      await fetch(`/api/news/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      setNews((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, ...updatedData } : item
        )
      );
    } catch (err) {
      console.error("Failed to update news", err);
    }
  };

  const deleteNews = async (id: string) => {
    try {
      await fetch(`/api/news/${id}`, { method: "DELETE" });
      setNews((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete news", err);
    }
  };

  return (
    <NewsContext.Provider
      value={{ news, setNews, addNews, updateNews, deleteNews, loading, error }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context;
};
