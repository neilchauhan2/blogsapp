import React, { useState, useContext } from "react";
import BlogContext from "../context/BlogContext";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const navigate = useNavigate();
  const { id } = useParams();
  let blog = {};
  blogs.forEach((item) => {
    if (item.id === id) {
      blog = {
        ...item,
      };
    }
  });
  const [post, setPost] = useState({
    id: blog.id,
    title: blog.title,
    categories: blog.categories,
    content: blog.content,
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const filtered = blogs.filter((blog) => blog.id !== id);

    setBlogs([...filtered, post]);
    alert("Your post has been successfully saved.");
    navigate("/");
  };

  return (
    <div className="edit-post">
      <h2>Edit Post</h2>
      <label htmlFor="title">Title</label>
      <input
        onChange={handleChange}
        type="text"
        name="title"
        value={post.title}
      />
      <br />
      <label htmlFor="categories">Categories</label>
      <input
        onChange={handleChange}
        type="text"
        name="categories"
        value={post.categories}
      />
      <br />
      <label htmlFor="content">Content</label>
      <textarea
        onChange={handleChange}
        type="text"
        rows={4}
        cols={76}
        name="content"
        value={post.content}
      />
      <br />
      <button className="button new-post-btn" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default EditPost;
