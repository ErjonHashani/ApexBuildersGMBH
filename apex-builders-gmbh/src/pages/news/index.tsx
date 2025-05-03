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

  if (loading) return <p className="text-center p-4">Loading news...</p>;
  if (error)
    return <p className="text-red-500 text-center p-4">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Latest News
        </h1>

        {/* Add News Form */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Add New News</h2>
          <form onSubmit={handleAddSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={newNews.title}
                onChange={(e) =>
                  setNewNews({ ...newNews, title: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Content</label>
              <textarea
                value={newNews.body}
                onChange={(e) =>
                  setNewNews({ ...newNews, body: e.target.value })
                }
                className="w-full p-2 border rounded"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Add News
            </button>
          </form>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {news.length === 0 ? (
            <p className="text-center text-gray-500">No news available.</p>
          ) : (
            news.map((newsItem) => (
              <div
                key={newsItem._id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                {editingId === newsItem._id ? (
                  <form onSubmit={(e) => handleEditSubmit(e, newsItem._id)}>
                    <div className="mb-4">
                      <input
                        type="text"
                        value={editData.title}
                        onChange={(e) =>
                          setEditData({ ...editData, title: e.target.value })
                        }
                        className="w-full p-2 border rounded mb-2"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        value={editData.body}
                        onChange={(e) =>
                          setEditData({ ...editData, body: e.target.value })
                        }
                        className="w-full p-2 border rounded"
                        rows={4}
                        required
                      />
                    </div>
                    <div className="space-x-4">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <Link href={`/news/${newsItem._id}`}>
                      <h2 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 cursor-pointer">
                        {newsItem.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mt-2 line-clamp-3">
                      {newsItem.body}
                    </p>
                    <p className="text-sm text-gray-400 mt-4">
                      <strong>Created at:</strong>{" "}
                      {new Date(newsItem.createdAt).toLocaleString()}
                    </p>
                    <div className="mt-4 space-x-4">
                      <button
                        onClick={() =>
                          startEditing(
                            newsItem._id,
                            newsItem.title,
                            newsItem.body
                          )
                        }
                        className="px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteNews(newsItem._id)}
                        className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200"
                      >
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
