import React, { Component } from "react";
import BookResultItem from "../BookResultItem/BookResultItem";
import "./BookResultList.css";

class BookResultList extends Component {
  render() {
    const bookList = this.props.books.map((book, idx) => (
      <BookResultItem {...book} key={idx} />
    ));
    return <div className="bookResultList">{bookList}</div>;
  }
}

export default BookResultList;
