import { useState, useEffect } from "react";

type Blog = {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Ensure it's initialized as an empty array
  const [newBlog, setNewBlog] = useState({
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null); // For editing a specific blog

  // Fetch all blogs when the component mounts
  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();

        // Ensure that the fetched data is an array
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error("Data is not in expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  // Handle form submission to create a new blog
  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        const data = await response.json();
        setBlogs([data, ...blogs]); // Add the new blog to the top of the list
        setNewBlog({ title: "", body: "" }); // Reset the form
      } else {
        console.error("Error creating blog:", response);
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission to update a blog
  const handleUpdateBlog = async (id: string) => {
    if (editingBlog) {
      setLoading(true);
      try {
        const updatedBlog = {
          title: editingBlog.title,
          body: editingBlog.body,
        };

        const response = await fetch(`/api/blogs/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBlog),
        });

        if (response.ok) {
          const updatedData = await response.json();

          // Update the state with the updated blog data
          setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
              blog._id === id ? { ...blog, ...updatedData } : blog
            )
          );
          setEditingBlog(null); // Reset editing state
          setNewBlog({ title: "", body: "" }); // Reset form
        } else {
          console.error("Failed to update blog");
        }
      } catch (error) {
        console.error("Error updating blog:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Handle start editing a blog
  const startEditing = (blog: Blog) => {
    setEditingBlog(blog); // Set the current blog being edited
  };

  // Handle change in the edit form
  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (editingBlog) {
      setEditingBlog({ ...editingBlog, [e.target.name]: e.target.value });
    }
  };

  // Handle deleting a blog
  const handleDeleteBlog = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setLoading(true);
      try {
        const response = await fetch(`/api/blogs/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          // Remove the deleted blog from the state
          setBlogs(blogs.filter((blog) => blog._id !== id));
        } else {
          console.error("Error deleting blog");
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Blog Management
          </h1>
          <p className="text-lg text-gray-600">
            Create, edit, and manage your blog posts
          </p>
        </div>

        {/* Create Blog Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Create New Post
          </h2>
          <form onSubmit={handleCreateBlog} className="space-y-5">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter blog title"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="body"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Content
              </label>
              <textarea
                id="body"
                placeholder="Write your blog content here..."
                value={newBlog.body}
                onChange={(e) =>
                  setNewBlog({ ...newBlog, body: e.target.value })
                }
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-70"
            >
              {loading ? "Publishing..." : "Publish Blog"}
            </button>
          </form>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center mb-8">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Blog Posts List */}
        <div className="space-y-6">
          {blogs.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No Blog Posts Yet
              </h3>
              <p className="text-gray-500">
                Create your first blog post using the form above
              </p>
            </div>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {blog.title}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600 whitespace-pre-line">
                    {blog.body}
                  </p>

                  <div className="mt-6 flex space-x-3">
                    <button
                      onClick={() => startEditing(blog)}
                      className="flex items-center justify-center bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog._id)}
                      className="flex items-center justify-center bg-red-50 text-red-600 py-2 px-4 rounded-lg hover:bg-red-100 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>

                {/* Edit Blog Form */}
                {editingBlog && editingBlog._id === blog._id && (
                  <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Edit Post
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="edit-title"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="edit-title"
                          name="title"
                          placeholder="Edit title"
                          value={editingBlog.title}
                          onChange={handleEditChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="edit-body"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Content
                        </label>
                        <textarea
                          id="edit-body"
                          name="body"
                          placeholder="Edit content"
                          value={editingBlog.body}
                          onChange={handleEditChange}
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        ></textarea>
                      </div>
                      <button
                        onClick={() => handleUpdateBlog(blog._id)}
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-70"
                      >
                        {loading ? "Saving..." : "Save Changes"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
