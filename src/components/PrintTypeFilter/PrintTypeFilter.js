import React, { Component } from "react";
import "./PrintTypeFilter.css";

class PrintTypeFilter extends Component {
  render() {
    return (
      <div className="printTypeFilter">
        <label>Print Type</label>
        <select name="print_type" id="print_type">
          <option value="plaeholder">Select</option>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </div>
    );
  }
}

export default PrintTypeFilter;
