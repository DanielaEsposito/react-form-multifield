import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [addPost, setAddPost] = useState("");

  const [posts, setPosts] = useState([
    {
      title: "title",
      img: "",
      category: "",
      content: "",
      published: "",
    },
  ]);

  const handleInputChange = (e) => {
    setAddPost(e.target.value);
    //console.log(e);
  };

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    const newPosts = [...posts, addPost];
    setPosts(newPosts);
    setAddPost("");
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
        <section className="posts py-4">
          <div className="container">
            {/*FORM INPUT  */}
            <form onSubmit={handlerFormSubmit}>
              {/*INPUT TITLE */}
              <div className="row">
                <div className="col-3">
                  <label htmlFor="title" className="form-label">
                    Titolo
                  </label>
                  <input
                    className="form-control mb-3"
                    type="text"
                    name="post-title"
                    id="title"
                    value={posts.title}
                    onChange={handleInputChange}
                  />
                </div>
                {/*INPUT IMG */}
                <div className="col-3">
                  <label htmlFor="img" className="form-label">
                    Immagine
                  </label>
                  <input
                    className="form-control mb-3"
                    type="text"
                    name="post-img"
                    id="img"
                    value={posts.img}
                    onChange={handleInputChange}
                  />
                </div>
                {/*INPUT CONTENT */}
                <div className="col-3">
                  <label htmlFor="content" className="form-label">
                    Contenuto
                  </label>
                  <input
                    className="form-control mb-3"
                    type="text-area"
                    name="post-content"
                    id="content"
                    value={posts.content}
                    onChange={handleInputChange}
                  />
                </div>
                {/*SELECT CATEGORY*/}
                {/*CHECKBOX PUBLISHED */}
                <div className="col-3">
                  <label htmlFor="post-published" className="form-label">
                    Contenuto
                  </label>
                  <input
                    className="form-control mb-3"
                    checked={posts.published}
                    type="checkbox"
                    name="published"
                    id="post-published"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button className="btn btn-primary">Cerca</button>
            </form>
          </div>
        </section>
        <section className="post-list">
          <div className="container">
            <h2 className="post-list-title"> Post List</h2>
            <div className="row row-cols-3">
              {posts.map((post) => (
                <div className="col">
                  <div className="card">
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text"></p>
                      <a href="#" className="btn btn-primary"></a>
                    </div>
                  </div>
                  {/* <div className="card" key={post}>
                    {post}{" "}
                    <i
                      className="fa-solid fa-trash-can fa-sm delete"
                      onClick={() => handlerDeletePost(post)}
                    ></i>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
