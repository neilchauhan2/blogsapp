import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <button>Edit Post</button>
      <button>Delete Post</button>
    </div>
  );
};

export default Blog;
