import { useState, useEffect } from "react";
import BlogContext from "./context/BlogContext";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import NewPost from "./components/NewPost";
import Blog from "./components/Blog";
import EditPost from "./components/EditPost";

const App = () => {
  const initState = [
    {
      id: "1",
      title: "React Post",
      categories: "React",
      content:
        "This is the best React Post. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque veritatis porro explicabo doloremque! Perspiciatis unde esse quisquam, qui deserunt dicta dolorum blanditiis voluptatum, veritatis mollitia sapiente dolore magnam sunt nihil officia maxime, rerum inventore molestiae animi iusto nulla doloribus doloremque fuga aut? Similique cumque iste numquam earum provident officiis, incidunt nobis cupiditate laboriosam tempore, beatae tenetur. Iure, ab, quibusdam soluta nostrum aut repudiandae tenetur delectus quae in maiores minus dicta recusandae corporis ipsa impedit deleniti labore dolorum officia, dolore accusantium veniam! Doloremque repellat natus ad laboriosam! Dolor, beatae, magni, quis doloremque optio repellendus possimus veniam a praesentium deserunt reprehenderit!",
    },
    {
      id: "2",
      title: "Redux Post",
      categories: "Redux",
      content:
        "This is the best Redux Post. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque veritatis porro explicabo doloremque! Perspiciatis unde esse quisquam, qui deserunt dicta dolorum blanditiis voluptatum, veritatis mollitia sapiente dolore magnam sunt nihil officia maxime, rerum inventore molestiae animi iusto nulla doloribus doloremque fuga aut? Similique cumque iste numquam earum provident officiis, incidunt nobis cupiditate laboriosam tempore, beatae tenetur. Iure, ab, quibusdam soluta nostrum aut repudiandae tenetur delectus quae in maiores minus dicta recusandae corporis ipsa impedit deleniti labore dolorum officia, dolore accusantium veniam! Doloremque repellat natus ad laboriosam! Dolor, beatae, magni, quis doloremque optio repellendus possimus veniam a praesentium deserunt reprehenderit!",
    },
    {
      id: "3",
      title: "JS Post",
      categories: "JS",
      content:
        "This is the best JS Post. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque veritatis porro explicabo doloremque! Perspiciatis unde esse quisquam, qui deserunt dicta dolorum blanditiis voluptatum, veritatis mollitia sapiente dolore magnam sunt nihil officia maxime, rerum inventore molestiae animi iusto nulla doloribus doloremque fuga aut? Similique cumque iste numquam earum provident officiis, incidunt nobis cupiditate laboriosam tempore, beatae tenetur. Iure, ab, quibusdam soluta nostrum aut repudiandae tenetur delectus quae in maiores minus dicta recusandae corporis ipsa impedit deleniti labore dolorum officia, dolore accusantium veniam! Doloremque repellat natus ad laboriosam! Dolor, beatae, magni, quis doloremque optio repellendus possimus veniam a praesentium deserunt reprehenderit!",
    },
  ];
  window.localStorage.getItem("blogs") !== null
    ? JSON.parse(window.localStorage.getItem("blogs"))
    : localStorage.setItem("blogs", JSON.stringify(initState));

  const [id, setId] = useState(4);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("blogs");
    if (data) setBlogs(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(initState));
  });

  return (
    <Router>
      <BlogContext.Provider value={{ blogs, setBlogs, id, setId }}>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/:id" element={<Blog />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </BlogContext.Provider>
    </Router>
  );
};

export default App;
