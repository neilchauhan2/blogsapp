import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";
import BlogContext from "../context/BlogContext";

const BlogList = () => {
  const { blogs } = useContext(BlogContext);
  return (
    <div className="blog-list">
      <Link to="new" className="button new-post-btn">
        New Post
      </Link>
      {blogs.map((blog, index) => (
        <BlogItem blog={blog} key={index} />
      ))}
    </div>
  );
};

export default BlogList;
