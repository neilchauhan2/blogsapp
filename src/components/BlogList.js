import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <BlogItem blog={blog} key={index} />
      ))}
    </div>
  );
};

export default BlogList;
