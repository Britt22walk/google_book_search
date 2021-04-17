import React, { Component } from "react";
import "./TextSearchBox.css";

class TextSearchBox extends Component {
  render() {
    const { handleSearchClick } = this.props;
    return (
      <div className="textSearchBox">
        <label>Search</label>
        <input type="text" />
        <button
          type="button"
          className="bi bi-menu-button"
          onClick={function () {
            console.log("clicked!");
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

export default TextSearchBox;
