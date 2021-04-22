import React, { Component } from "react";
import BookResultItem from "../BookResultItem/BookResultItem";
import "./BookResultList.css";

class BookResultList extends Component {
  render() {
    const { books } = this.props;
    console.log("Booklist is populating...", books);
    const bookList = books.length ? (
      books.map((book, idx) => <BookResultItem {...book} key={idx} />)
    ) : (
      <h3>NO RESULTS</h3>
    );

    return <div className="bookResultList">{bookList}</div>;
  }
}

export default BookResultList;
