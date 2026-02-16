import { useState } from "react";
import { books } from "./data/books";

import BookList from "./components/BookList";
import BookPopup from "./components/BookPopup";

import "./assets/styles.css";

function App() {

  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="container">

      <h1 className="title">📚 Books Library</h1>

      <BookList
        books={books}
        onBookClick={setSelectedBook}
      />

      <BookPopup
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />

    </div>
  );
}

export default App;