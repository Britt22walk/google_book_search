import React from "react";
import "./BookResultItem.css";

export default function BookResultItem(props) {
  const { book, idx } = props;
  console.log(book);
  return (
    <div className="bookResultItem" key={idx}>
      <h2>{book.volumeInfo.title}</h2>
      <div className="bookResults_image">
        <img src={book.volumeInfo.authors} />
      </div>
      <p>Author: {book.volumeInfo.authors} </p>
      <p>Price: {book.volumeInfo.authors} </p>
      <p>Description: {book.volumeInfo.description} </p>
    </div>
  );
}
