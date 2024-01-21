import { Routes, Route, Link} from "react-router-dom"
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";
import NewPostPage from "./components/NewPostPage";
import Categories from "./components/Categories";

export default function App() {

  return (
    <div>
      <nav>
      <h1>Database React</h1>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/newPosts">New Post</Link>
      <Link to="/categories">Category</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/newPosts" element={<NewPostPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <p>© 2024 my footer example@.com</p>
      </nav>
    </div>
  );
}

