// pages/news/[id].tsx
import { useRouter } from "next/router";
import { useNewsContext } from "@/lib/contexts/NewsContext";

const NewsDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { news } = useNewsContext();

  // Find the specific news item
  const newsItem = news.find((item) => item._id === id);

  if (!newsItem) {
    return <div className="p-4 text-red-500">News article not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="mb-4 text-indigo-600 hover:text-indigo-800"
      >
        ← Back to News
      </button>

      <article className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
        <p className="text-gray-500 mb-4">
          Published on {new Date(newsItem.createdAt).toLocaleDateString()}
        </p>
        <div className="prose max-w-none">
          <p className="whitespace-pre-line">{newsItem.body}</p>
        </div>
      </article>
    </div>
  );
};

export default NewsDetailPage;
