import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let API_URL = "https://www.googleapis.com/books/v1/volumes";

  const fetchBooks = async () => {
    if (document.getElementById("choose_search").value === "title") {
      const result = await axios.get(`${API_URL}? 
q=${searchTerm}&maxResults=40`);
      setBooks(result.data);
    } else {
      const result = await axios.get(`${API_URL}? 
q=inauthor:${searchTerm}&maxResults=40`);
      setBooks(result.data);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <section>
      <form onSubmit={onSubmitHandler} id="submit">
        <label>
          <input
            type="search"
            placeholder="Search books"
            value={searchTerm}
            onChange={onInputChange}
          />
          <button
            type="submit"
            class="btn btn- 
  success"
          >
            Search
          </button>
        </label>
      </form>

      <div id="choose_position" class="row">
        <div class="col-2">
          <select id="choose_search" class="form-control-sm">
            <option value="" disabled selected>
              Select search type
            </option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </div>
      </div>

      <ul>
        {books.items.map((book, index) => {
          return (
            <div>
              <div class="border rounded">
                <div class="row">
                  <div
                    class="col-12 d-flex justify-content- 
 center p-4"
                  >
                    <u>
                      <h5>{book.volumeInfo.title}</h5>
                    </u>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <img
                      id="img_book"
                      alt={`${book.volumeInfo.title} book`}
                      src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                    />
                  </div>
                  <div class="col-8">
                    {typeof book.volumeInfo.description === "string" &&
                    book.volumeInfo.description.length > 0 ? (
                      book.volumeInfo.description
                    ) : (
                      <img src="../no_description.jpg" id="description_img" />
                    )}
                  </div>
                </div>

                <div class="row">
                  <div class="col-4"></div>
                  <div class="col-4">
                    <b>Preview:</b>{" "}
                    {typeof book.volumeInfo.previewLink === "string" &&
                    book.volumeInfo.previewLink.length > 0 ? (
                      <a href={book.volumeInfo.previewLink}>Link</a>
                    ) : (
                      "No data"
                    )}
                  </div>
                  <div class="col-4">
                    <b>Published date:</b>
                    {typeof book.volumeInfo.publishedDate === "string" &&
                    book.volumeInfo.publishedDate.length > 0
                      ? book.volumeInfo.publishedDate
                      : "No data"}
                  </div>
                </div>

                <div class="row pb-3">
                  <div class="col-4"></div>
                  <div class="col-4">
                    <b>Free download:</b>
                    {typeof book.accessInfo.pdf.downloadLink === "string" &&
                    book.accessInfo.pdf.downloadLink.length > 0 ? (
                      <a href={book.accessInfo.pdf.downloadLink}>Link</a>
                    ) : (
                      "Not avaliable"
                    )}
                  </div>
                  <div class="col-4">
                    <b>Ebook version:</b>
                    {typeof book.saleInfo.isEbook === "boolean" &&
                    book.saleInfo.isEbook === true
                      ? "Yes"
                      : "No"}
                  </div>
                  <br />
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </ul>
    </section>
  );
};
export default App;

//    componentWillMount(){
//   window.addEventListener('scroll', this.loadMore);
// }

// componentWillUnmount(){
//     window.removeEventListener('scroll', this.loadMore);
// }

// loadMore(){
//     if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
//         // Do load more content here!
//     }
// }
