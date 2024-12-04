import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [addPost, setAddPost] = useState({
    title: "",
    img: "",
    category: "",
    content: "",
    published: false,
  });

  const [posts, setPosts] = useState([]);

  const handlePostChange = (e) => {
    const newAddPost = {
      ...addPost,
      [e.target.name]: e.target.value,
    };
    setAddPost(newAddPost);
    console.log(newAddPost);
  };
  //console.log(e);

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
                    className="form-control"
                    type="text"
                    name="title"
                    id="title"
                    value={addPost.title}
                    onChange={handlePostChange}
                  />
                </div>
                {/*INPUT IMG */}
                <div className="col-3">
                  <label htmlFor="post-img" className="form-label">
                    Immagine
                  </label>
                  <input
                    className="form-control mb-4"
                    type="text"
                    name="img"
                    id="post-img"
                    value={addPost.img}
                    onChange={handlePostChange}
                  />
                </div>
                {/*INPUT CONTENT */}
                <div className="col-3">
                  <label htmlFor="post-content" className="form-label">
                    Contenuto
                  </label>
                  <textarea
                    className="form-control mb-3"
                    name="content"
                    id="post-content"
                    value={addPost.content}
                    onChange={handlePostChange}
                  ></textarea>
                </div>
                {/*SELECT CATEGORY*/}
                {/*CHECKBOX PUBLISHED */}
                <div className="col-3">
                  <label htmlFor="post-published" className="form-label">
                    Published
                  </label>
                  <div>
                    <input
                      className=" mb-3"
                      checked={addPost.published}
                      type="checkbox"
                      name="published"
                      id="post-published"
                      onChange={handlePostChange}
                    />
                  </div>
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
                <div key={post.title} className="col">
                  <div className="card">
                    <img src={post.img} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.content}</p>
                    </div>
                  </div>
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
