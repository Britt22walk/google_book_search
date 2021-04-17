import React, { Component } from "react";
import BookResultItem from "../BookResultItem/BookResultItem";
import "./BookResultList.css";

class BookResultList extends Component {
  render() {
    const { books } = this.props;
    const bookList = books.map((book, idx) => (
      <BookResultItem {...book} key={idx} />
    ));
    return <div className="bookResultList">{bookList}</div>;
  }
}

export default BookResultList;
