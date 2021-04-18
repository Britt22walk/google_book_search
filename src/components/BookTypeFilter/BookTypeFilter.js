import React, { Component } from "react";
import "./BookTypeFilter.css";

class BookTypeFilter extends Component {
  render() {
    return (
      <div className="bookTypeFilter">
        <label>Book Type</label>
        <select
          name="book_type"
          id="book_type"
          onChange={(e) => this.props.handleBookFilterChange(e.target.value)}
        >
          <option value="full">Full</option>
          <option value="partial">Partial</option>

          <option value="free-ebooks">Free E-Books</option>
          <option value="paid-ebooks">Paid E-Books</option>
        </select>
      </div>
    );
  }
}

export default BookTypeFilter;
