import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      <button className="button new-post-btn">New Post</button>
      {blogs.map((blog, index) => (
        <BlogItem blog={blog} key={index} />
      ))}
    </div>
  );
};

export default BlogList;
