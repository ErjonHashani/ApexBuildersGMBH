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
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-6 bg-white rounded-lg shadow-md max-w-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The requested news article could not be found.
          </p>
          <button
            onClick={() => router.push("/news")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Back to News
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to News
        </button>
      </div>

      <article className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
              News
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {newsItem.title}
          </h1>

          <div className="flex items-center text-gray-500 mb-8">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>
              {new Date(newsItem.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
            <p className="whitespace-pre-line">{newsItem.body}</p>
          </div>
        </div>
      </article>

      <div className="mt-12 text-center">
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Back to News
        </button>
      </div>
    </div>
  );
};

export default NewsDetailPage;
