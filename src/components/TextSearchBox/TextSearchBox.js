import React, { Component } from "react";
import "./TextSearchBox.css";

class TextSearchBox extends Component {
  /*
onSubmitForm = (e) => {
    e.preventDefault();
  };*/
  render() {
    return (
      <form className="textSearchBox">
        <label>Search</label>
        <input
          type="text"
          value={this.props.searchTerm}
          onChange={(e) => this.props.handleSearch(e.target.value)}
        />
        <button
          type="submit"
          name="searchTerm"
          className="bi bi-menu-button"
          onClick={this.props.handleSearchButtonClick}
        >
          Search
        </button>
      </form>
    );
  }
}

export default TextSearchBox;
