import React, { Component } from "react";
import "./App.css";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import BookResultList from "./components/BookResultList/BookResultList";

/*const books = [
  {
    title: "Henry the VII",
    image: "books.jpeg",
    author: "Alison Weird",
    price: "$15.50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    title: "Henry I",
    image: "books.jpeg",
    author: "Warren Holister",
    price: "$50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: "",
      bookFilter: null,
      printFilter: null,
    };
  }

  updateSearchTerm(userInput) {
    console.log("user input is being added to state!");
    this.setState({
      searchTerm: userInput,
    });
  }

  handleSearchButtonClick(event) {
    console.log("Search button was clicked!");
    event.preventDefault();
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=steinberg&key=AIzaSyDVNILpaEUyEjBltP4Hn3_6xQR4r-DSuaQ";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const books = Object.keys(data).map((key) => data[key].items[0]);
        console.log(books);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateBookFilter(bookOption) {
    console.log("Book Filter was updated in state!");
    this.setState({
      bookFilter: bookOption,
    });
  }

  updatePrintFilter(printOption) {
    console.log("Print Filter was udpdated in state!");
    this.setState({
      printFilter: printOption,
    });
  }

  render() {
    const bookList = this.state.books.length ? (
      <div>
        <SearchHeader
          handleSearchButtonClick={this.handleSearchButtonClick}
          searchTerm={this.state.searchTerm}
          bookFilter={this.state.bookFilter}
          printFilter={this.state.printFilter}
          handleBookFilterChange={(bookOption) =>
            this.updateBookFilter(bookOption)
          }
          handlePrintFilterChange={(printOption) =>
            this.updatePrintFilter(printOption)
          }
          handleSearch={(userInput) => this.updateSearchTerm(userInput)}
        />
        <BookResultList books={this.state.books} />
      </div>
    ) : (
      <div>
        <SearchHeader
          handleSearchButtonClick={this.handleSearchButtonClick}
          searchTerm={this.state.searchTerm}
          bookFilter={this.state.bookFilter}
          printFilter={this.state.printFilter}
          handlePrintFilterChange={(printOption) =>
            this.updatePrintFilter(printOption)
          }
          handleBookFilterChange={(bookOption) =>
            this.updateBookFilter(bookOption)
          }
          handleSearch={(userInput) => this.updateSearchTerm(userInput)}
        />
        <h2>No Books to Display! Seach for some books!</h2>
      </div>
    );
    return <main className="App">{bookList}</main>;
  }
}

export default App;
