import { useState ,useEffect } from "react";

export default function PostPage() {
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
        {postContents.map((post) => {
          return <div key={post.id + post.title}>{post.title}</div>
        })}
      </div>
    );
}
