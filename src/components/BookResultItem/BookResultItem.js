import React, { Component } from "react";
import "./BookResultItem.css";

class BookResultItem extends Component {
  render() {
    return (
      <div className="bookResultItem">
        <h2>Book Title</h2>
        <img></img>
        <p>Author: </p>
        <p>Price: </p>
        <p>Description</p>
      </div>
    );
  }
}

export default BookResultItem;
