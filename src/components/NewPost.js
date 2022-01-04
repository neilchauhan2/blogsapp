import React, { useState } from "react";

const NewPost = ({ blogs, setBlogs }) => {
  const [post, setPost] = useState({
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
    console.log(post);
  };

  return (
    <div className="new-post">
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
      <input
        onChange={handleChange}
        type="text"
        name="content"
        value={post.content}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NewPost;
