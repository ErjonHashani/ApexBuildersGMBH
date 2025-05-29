import { useState } from "react";
import { useNewsContext } from "@/lib/contexts/NewsContext";
import Link from "next/link";

const NewsPage = () => {
  const { news, loading, error, addNews, updateNews, deleteNews } =
    useNewsContext();
  const [newNews, setNewNews] = useState({ title: "", body: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState({ title: "", body: "" });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNews.title && newNews.body) {
      addNews(newNews);
      setNewNews({ title: "", body: "" });
    }
  };

  const startEditing = (
    id: string,
    currentTitle: string,
    currentBody: string
  ) => {
    setEditingId(id);
    setEditData({ title: currentTitle, body: currentBody });
  };

  const handleEditSubmit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    if (editData.title && editData.body) {
      updateNews(id, editData);
      setEditingId(null);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full mb-4"></div>
          <p className="text-gray-600">Loading news...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 p-6 rounded-xl max-w-md text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-red-800 mb-2">
            Error Loading News
          </h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            News Management
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Stay updated with the latest announcements
          </p>
        </div>

        {/* Add News Card */}
        <div className="bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden mb-10">
          <div className="px-6 py-5 border-b border-gray-100 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg
                className="w-5 h-5 text-indigo-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Create New Article
            </h2>
          </div>
          <div className="p-6">
            <form onSubmit={handleAddSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newNews.title}
                  onChange={(e) =>
                    setNewNews({ ...newNews, title: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="Enter a compelling headline"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  value={newNews.body}
                  onChange={(e) =>
                    setNewNews({ ...newNews, body: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  rows={5}
                  placeholder="Write your news content here..."
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition flex items-center shadow-sm hover:shadow-md"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                    />
                  </svg>
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* News List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Articles
            </h2>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
              {news.length} {news.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          {news.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
              <svg
                className="w-12 h-12 mx-auto text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No articles yet
              </h3>
              <p className="mt-2 text-gray-500">
                Create your first news article to get started
              </p>
            </div>
          ) : (
            news.map((newsItem) => (
              <div
                key={newsItem._id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {editingId === newsItem._id ? (
                  <div className="p-6">
                    <form onSubmit={(e) => handleEditSubmit(e, newsItem._id)}>
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          value={editData.title}
                          onChange={(e) =>
                            setEditData({ ...editData, title: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Content
                        </label>
                        <textarea
                          value={editData.body}
                          onChange={(e) =>
                            setEditData({ ...editData, body: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                          rows={5}
                          required
                        />
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => setEditingId(null)}
                          className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <>
                    <Link href={`/news/${newsItem._id}`}>
                      <div className="p-6 hover:bg-gray-50 transition cursor-pointer">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                          {newsItem.title}
                        </h2>
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {newsItem.body}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {new Date(newsItem.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </div>
                      </div>
                    </Link>
                    <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end space-x-3">
                      <button
                        onClick={() =>
                          startEditing(
                            newsItem._id,
                            newsItem.title,
                            newsItem.body
                          )
                        }
                        className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => deleteNews(newsItem._id)}
                        className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 transition flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
