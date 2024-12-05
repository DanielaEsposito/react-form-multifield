import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useEffect } from "react";

function App() {
  const categories = ["natura", "città", "montagna", "urban", "eustorgio"];
  const [addPost, setAddPost] = useState({
    title: "",
    img: "",
    category: "",
    content: "",
    tags: [],
    published: false,
  });
  const [posts, setPosts] = useState([]);

  // Ciao Daniela! L'errore Uncaught TypeError: addPost.category.map is not a function è dovuto al fatto che stai aggiornando l'intero oggetto addPost
  //  in modo errato nella funzione handlePostChange. Quando selezioni una categoria, la chiave category viene sovrascritta da una stringa (il valore
  //   dell'opzione selezionata), ma in origine era un array. Di conseguenza, quando tenti di usare map su una stringa, ottieni quell'errore.
  //   Per risolvere il problema, puoi aggiornare la funzione handlePostChange in modo che gestisca correttamente i diversi tipi di input, verificando
  //    se stai modificando un array o una singola proprietà. In alternativa, puoi evitare di sovrascrivere addPost.category se non necessario.

  const handlePostChange = (e) => {
    const newValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const newAddPost = {
      ...addPost,
      [e.target.name]: newValue,
    };
    setAddPost(newAddPost);
    //console.log(addPost.category);
    console.log(newAddPost);
  };
  //console.log(e);

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    //creazione dei post
    const newPosts = [...posts, addPost];
    setPosts(newPosts);
    setAddPost("");
  };
  // useEffect(() => {
  //   checked === true ? alert("stai ") : "";
  // });
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

                <div className="col-3">
                  <label htmlFor="post-category" className="form-label">
                    Categorie
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="category"
                    onChange={handlePostChange}
                  >
                    <option value="">Seleziona una categoria</option>
                    {categories.map((categoryName, index) => (
                      <option key={index} value={categoryName}>
                        {categoryName}
                      </option>
                    ))}
                  </select>
                </div>

                {/*CHECKBOX PUBLISHED */}
                <div className="col-3">
                  <label htmlFor="post-published" className="form-label ">
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
            <div className="row row-cols-3 ">
              {posts.map((post) => (
                <div key={post.title} className="col">
                  <div className="card">
                    <div className="card-img-container">
                      <img
                        src={post.img}
                        className="card-img-top img-fluid img-post"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.content}</p>
                      <p>{post.category}</p>
                      <span className="delete-button">
                        <i
                          className="fa-solid fa-trash-can fa-sm delete"
                          onClick={() => handlerDeletePost(post)}
                        ></i>
                      </span>
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
