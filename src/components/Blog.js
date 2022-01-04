import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <button className="button edit-btn">Edit Post</button>
      <button className="button delete-btn">Delete Post</button>
    </div>
  );
};

export default Blog;
