import React, { Component } from "react";
import "./BookTypeFilter.css";

class BookTypeFilter extends Component {
  render() {
    return (
      <div className="bookTypeFilter">
        <label>Book Type</label>
        <select name="book_type" id="book_type">
          <option value="placeholder">Select</option>
          <option value="partial">Partial</option>
          <option value="full">Full</option>
          <option value="free-ebooks">Free E-Books</option>
          <option value="paid-ebooks">Paid E-Books</option>
        </select>
      </div>
    );
  }
}

export default BookTypeFilter;
