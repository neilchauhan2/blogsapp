import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <Link to={`/${blog.id}`} className="button blog-item-btn">
        View Post
      </Link>
    </div>
  );
};

export default BlogItem;
