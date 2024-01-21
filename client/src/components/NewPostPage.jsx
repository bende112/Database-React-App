import { useState ,useEffect } from "react";


export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    // get the post we've written
    const formData = new FormData();
    const formValues = Object.fromEntries(formData);

    // send the post to the API
    const response = await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const json = await response.json();
    console.log(json);

    // async function postPosts() {
    //   const response = await fetch("http://localhost:8080/posts");
    //   const poste = await response.json();
    // }
    // postPosts();

  }

  return (
    <div>
      {/* <button onClick={}>New Post</button> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type={title} onChange={(event) =>setTitle(event.target.value)} placeholder="type here" />
        <label htmlFor="content">Content</label>
        <textarea name={content} onChange={(event) =>setContent(event.target.value)} placeholder="enter content" />
        <label htmlFor="category">Category</label>
        <select>
          <option value="1">Food Rating</option>
          <option value="2">Location Rating</option>
          <option value="3">General Comments</option>
        </select>
        <div className="btn">
        <button type="submit">New Post</button>
        </div>
      </form>
    </div>
  );
}
