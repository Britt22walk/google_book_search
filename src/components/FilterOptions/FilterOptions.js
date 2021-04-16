import React, { Component } from "react";
import BookTypeFilter from "../BookTypeFilter/BookTypeFilter";
import PrintTypeFilter from "../PrintTypeFilter/PrintTypeFilter";
import "./FilterOptions.css";

class FilterOptions extends Component {
  render() {
    return (
      <div className="filterOptions">
        <PrintTypeFilter />

        <BookTypeFilter />
      </div>
    );
  }
}

export default FilterOptions;
