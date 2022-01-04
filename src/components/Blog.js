import React, { useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import BlogContext from "../context/BlogContext";

const Blog = () => {
  const { id } = useParams();
  const { blogs, setBlogs } = useContext(BlogContext);
  const navigate = useNavigate();

  let blog = {};
  blogs.forEach((item) => {
    if (item.id === id) {
      blog = {
        ...item,
      };
    }
  });

  const handleDelete = () => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
    alert("Your Post has been successfully deleted");
    navigate("/");
  };

  return (
    <div className="blog">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <Link to={`/edit/${id}`} className="button edit-btn">
        Edit Post
      </Link>
      <button onClick={handleDelete} className="button delete-btn">
        Delete Post
      </button>
    </div>
  );
};

export default Blog;
