import React from "react";

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogItem;
