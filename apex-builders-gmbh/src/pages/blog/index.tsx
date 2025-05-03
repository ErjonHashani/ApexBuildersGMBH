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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Blog Posts
        </h1>

        {/* Form to create a new blog post */}
        <form onSubmit={handleCreateBlog} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Title"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            required
            className="w-full p-4 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <textarea
            placeholder="Body"
            value={newBlog.body}
            onChange={(e) => setNewBlog({ ...newBlog, body: e.target.value })}
            required
            className="w-full p-4 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-green-400 text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {loading ? "Creating..." : "Create Blog"}
          </button>
        </form>

        {/* Loading Indicator */}
        {loading && <p className="text-center text-gray-500">Loading...</p>}

        {/* Displaying fetched blog posts */}
        <div className="space-y-6">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500">No blog posts available</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog._id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mt-2">{blog.body}</p>
                <p className="text-sm text-gray-400 mt-4">
                  <strong>Created at:</strong>{" "}
                  {new Date(blog.createdAt).toLocaleString()}
                </p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => startEditing(blog)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(blog._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>

                {/* Edit Blog Form */}
                {editingBlog && editingBlog._id === blog._id && (
                  <div className="mt-6 bg-gray-50 p-4 rounded-md">
                    <input
                      type="text"
                      name="title"
                      placeholder="Edit Title"
                      value={editingBlog.title}
                      onChange={handleEditChange}
                      className="w-full p-4 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4"
                    />
                    <textarea
                      name="body"
                      placeholder="Edit Body"
                      value={editingBlog.body}
                      onChange={handleEditChange}
                      className="w-full p-4 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                    <button
                      onClick={() => handleUpdateBlog(blog._id)}
                      disabled={loading}
                      className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-4"
                    >
                      {loading ? "Updating..." : "Save Changes"}
                    </button>
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
