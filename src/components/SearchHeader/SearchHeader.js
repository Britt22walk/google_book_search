import React, { Component } from "react";
import TextSearchBox from "../TextSearchBox/TextSearchBox";
import FilterOptions from "../FilterOptions/FilterOptions";
import "./SearchHeader.css";

class SearchHeader extends Component {
  render() {
    return (
      <div className="searchHeader">
        <h1>Google Book Search</h1>
        <TextSearchBox
          searchTerm={this.props.searchTerm}
          handleSearch={this.props.handleSearch}
          handleSearchButtonClick={this.props.handleSearchButtonClick}
        />
        <FilterOptions
          bookFilter={this.props.bookFilter}
          printFilter={this.props.printFilter}
          handleBookFilterChange={this.props.handleBookFilterChange}
          handlePrintFilterChange={this.props.handlePrintFilterChange}
        />
      </div>
    );
  }
}

export default SearchHeader;
