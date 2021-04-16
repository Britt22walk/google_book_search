import React, { Component } from "react";

class BookTypeFilter extends Component {
  render() {
    return (
      <div className="bookTypeFilter">
        <label>Book Type</label>
        <select name="book_type" id="book_type">
          <option value="unknown">Unknown</option>
        </select>
      </div>
    );
  }
}

export default BookTypeFilter;
