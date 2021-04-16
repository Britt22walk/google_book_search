import React, { Component } from "react";
import BookResultItem from "../BookResultItem/BookResultItem";
import "./BookResultList.css";

class BookResultList extends Component {
  render() {
    return (
      <div className="bookResultList">
        <BookResultItem />
      </div>
    );
  }
}

export default BookResultList;
