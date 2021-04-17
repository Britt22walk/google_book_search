import React, { Component } from "react";
import "./TextSearchBox.css";

class TextSearchBox extends Component {
  render() {
    return (
      <div className="textSearchBox">
        <label>Search</label>
        <input type="text" />
        <button type="submit" className="bi bi-menu-button">
          Search
        </button>
      </div>
    );
  }
}

export default TextSearchBox;
