// lib/contexts/NewsContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { News, NewNewsItem } from "@/api/models/News";
import useFetch from "hooks/useFetch";

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
  const { data, loading, error } = useFetch<News[]>("/api/news");

  useEffect(() => {
    if (data) {
      setNews(data);
    }
  }, [data]);

  const addNews = (newsItem: NewNewsItem) => {
    const newItem: News = {
      ...newsItem,
      _id: Date.now().toString(), // Generate ID
      createdAt: new Date(), // Set current date
    };
    setNews((prevNews) => [...prevNews, newItem]);
  };

  const updateNews = (id: string, updatedData: Partial<News>) => {
    setNews((prevNews) =>
      prevNews.map((item) =>
        item._id === id ? { ...item, ...updatedData } : item
      )
    );
  };

  const deleteNews = (id: string) => {
    setNews((prevNews) => prevNews.filter((item) => item._id !== id));
  };

  return (
    <NewsContext.Provider
      value={{
        news,
        setNews,
        addNews,
        updateNews,
        deleteNews,
        loading,
        error,
      }}
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
