import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [addName, setAddName] = useState("");

  const [posts, setPosts] = useState(["html", "css"]);

  const handleInputChange = (e) => {
    setAddName(e.target.value);
    //console.log(e);
  };

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    const newPosts = [...posts, addName];
    setPosts(newPosts);
    setAddName("");
  };
  const handlerDeletePost = (postToDelete) => {
    const updatedPosts = posts.filter((post) => post !== postToDelete);

    setPosts(updatedPosts);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <h1>Blog</h1>
        </div>
      </header>
      <main>
        <section className="posts">
          <div className="container">
            <form onSubmit={handlerFormSubmit}>
              <input
                type="text"
                className="my-4 form-control"
                value={addName}
                onChange={handleInputChange}
              />
              <button className="btn btn-primary">Cerca</button>
            </form>
            <ul className="title-post-searched"></ul>
            {posts.map((post) => (
              <li key={post}>
                {post}{" "}
                <i
                  className="fa-solid fa-trash-can fa-sm delete"
                  onClick={() => handlerDeletePost(post)}
                ></i>
              </li>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
