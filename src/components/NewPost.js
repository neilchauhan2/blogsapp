import React, { useState, useContext } from "react";
import BlogContext from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const { blogs, setBlogs, id, setId } = useContext(BlogContext);
  const navigate = useNavigate();
  const [post, setPost] = useState({
    id: id.toString(),
    title: "",
    categories: "",
    content: "",
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setBlogs([...blogs, post]);
    setId(id + 1);
    alert("Your post has been successfully added.");
    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Create a New Post</h2>
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
        Submit
      </button>
    </div>
  );
};

export default NewPost;
