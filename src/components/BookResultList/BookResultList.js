import React, { Component } from "react";
import BookResultItem from "../BookResultItem/BookResultItem";
import "./BookResultList.css";

class BookResultList extends Component {
  render() {
    const { books } = this.props;
    const bookList = books.items.map((book, idx) => (
      <BookResultItem {...book} key={idx} />
    ));
    console.log("This is running" + bookList);
    return <div className="bookResultList">{bookList}</div>;
  }
}

export default BookResultList;
