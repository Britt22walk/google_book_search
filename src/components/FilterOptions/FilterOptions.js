import React, { Component } from "react";
import BookTypeFilter from "../BookTypeFilter/BookTypeFilter";
import PrintTypeFilter from "../PrintTypeFilter/PrintTypeFilter";
import "./FilterOptions.css";

class FilterOptions extends Component {
  render() {
    return (
      <div className="filterOptions">
        <PrintTypeFilter
          handlePrintFilterChange={this.props.handlePrintFilterChange}
        />

        <BookTypeFilter
          handleBookFilterChange={this.props.handleBookFilterChange}
        />
      </div>
    );
  }
}

export default FilterOptions;
