function BookCard({ book, onClick }) {
  return (
    <div className="book-card" onClick={() => onClick(book)}>
      <img src={book.coverImage} alt={book.title} />

      <h3>{book.title}</h3>

      <p className="author">{book.author}</p>

      <p className="price">₹{book.price}</p>

      <p className="rating">⭐ {book.rating}</p>
    </div>
  );
}

export default BookCard;