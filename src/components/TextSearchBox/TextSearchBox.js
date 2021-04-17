import React, { Component } from "react";
import "./TextSearchBox.css";

class TextSearchBox extends Component {
  render() {
    return (
      <div className="textSearchBox">
        <label>Search</label>
        <input type="text" />
        <button
          type="button"
          className="bi bi-menu-button"
          onClick={this.props.onSearchClick}
        >
          Search
        </button>
      </div>
    );
  }
}

export default TextSearchBox;
