function BookPopup({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="popup-overlay">

      <div className="popup-card">

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <img src={book.coverImage} />

        <h2>{book.title}</h2>

        <p><b>Author:</b> {book.author}</p>

        <p><b>Category:</b> {book.category}</p>

        <p><b>Description:</b> {book.description}</p>

        <p><b>Price:</b> ₹{book.price}</p>

        <p><b>Rating:</b> ⭐ {book.rating}</p>

        <p><b>Publisher:</b> {book.publisher}</p>

        <p><b>Pages:</b> {book.pages}</p>

        <p><b>Language:</b> {book.language}</p>

        <p><b>Year:</b> {book.publishedYear}</p>

      </div>

    </div>
  );
}

export default BookPopup;