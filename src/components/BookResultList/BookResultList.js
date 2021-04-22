import React from "react";
import BookResultItem from "../BookResultItem/BookResultItem";
import "./BookResultList.css";

function BookResultList(props) {
  console.log("Booklist is populating...", props);
  const bookList = props.items ? (
    props.items.map((book, idx) => <BookResultItem book={book} key={idx} />)
  ) : (
    <h3>NO RESULTS</h3>
  );
  return <div className="bookResultList">{bookList}</div>;
}

export default BookResultList;
