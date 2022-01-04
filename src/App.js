import { useState } from "react";
import "./App.css";
import BlogList from "./components/BlogList";
import NewPost from "./components/NewPost";
import Blog from "./components/Blog";

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "React Post",
      category: "React",
      content:
        "This is the best React Post. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque veritatis porro explicabo doloremque! Perspiciatis unde esse quisquam, qui deserunt dicta dolorum blanditiis voluptatum, veritatis mollitia sapiente dolore magnam sunt nihil officia maxime, rerum inventore molestiae animi iusto nulla doloribus doloremque fuga aut? Similique cumque iste numquam earum provident officiis, incidunt nobis cupiditate laboriosam tempore, beatae tenetur. Iure, ab, quibusdam soluta nostrum aut repudiandae tenetur delectus quae in maiores minus dicta recusandae corporis ipsa impedit deleniti labore dolorum officia, dolore accusantium veniam! Doloremque repellat natus ad laboriosam! Dolor, beatae, magni, quis doloremque optio repellendus possimus veniam a praesentium deserunt reprehenderit!",
    },
    {
      title: "Redux Post",
      category: "Redux",
      content:
        "This is the best Redux Post. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque veritatis porro explicabo doloremque! Perspiciatis unde esse quisquam, qui deserunt dicta dolorum blanditiis voluptatum, veritatis mollitia sapiente dolore magnam sunt nihil officia maxime, rerum inventore molestiae animi iusto nulla doloribus doloremque fuga aut? Similique cumque iste numquam earum provident officiis, incidunt nobis cupiditate laboriosam tempore, beatae tenetur. Iure, ab, quibusdam soluta nostrum aut repudiandae tenetur delectus quae in maiores minus dicta recusandae corporis ipsa impedit deleniti labore dolorum officia, dolore accusantium veniam! Doloremque repellat natus ad laboriosam! Dolor, beatae, magni, quis doloremque optio repellendus possimus veniam a praesentium deserunt reprehenderit!",
    },
    {
      title: "JS Post",
      category: "JS",
      content:
        "This is the best JS Post. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque veritatis porro explicabo doloremque! Perspiciatis unde esse quisquam, qui deserunt dicta dolorum blanditiis voluptatum, veritatis mollitia sapiente dolore magnam sunt nihil officia maxime, rerum inventore molestiae animi iusto nulla doloribus doloremque fuga aut? Similique cumque iste numquam earum provident officiis, incidunt nobis cupiditate laboriosam tempore, beatae tenetur. Iure, ab, quibusdam soluta nostrum aut repudiandae tenetur delectus quae in maiores minus dicta recusandae corporis ipsa impedit deleniti labore dolorum officia, dolore accusantium veniam! Doloremque repellat natus ad laboriosam! Dolor, beatae, magni, quis doloremque optio repellendus possimus veniam a praesentium deserunt reprehenderit!",
    },
  ]);

  return (
    <div className="App">
      <BlogList blogs={blogs} />
      <NewPost blogs={blogs} setBlogs={setBlogs} />
      <Blog blog={blogs[0]} />
    </div>
  );
};

export default App;
