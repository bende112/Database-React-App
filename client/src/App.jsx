import { useState ,useEffect } from "react";
import { Routes, Route, Link} from "react-router-dom"
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";
import NewPostPage from "./components/NewPostPage";

export default function App() {
  const [postContents, setPostContents] = useState([]);

  useEffect(() =>{
    getPosts();
  }, []);

  async function getPosts() {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    setPostContents(data);
  }

  return (
    <div>
      <nav>
      <h1>Database React</h1>
      {/* <div>{postContents}</div> */}
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/newPosts">New Post</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/newPosts" element={<NewPostPage />} />
      </Routes>
      <p>© 2024 my footer example@.com</p>
      </nav>
    </div>
  );
}

