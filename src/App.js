import React, { Component } from "react";
import "./App.css";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import BookResultList from "./components/BookResultList/BookResultList";

const books = [
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
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: "",
      bookFilter: "",
      printFilter: "All",
    };
  }

  updateSearchTerm(userInput) {
    console.log("user input is being added to state!");
    this.setState({
      searchTerm: userInput,
    });
  }

  handleSearchButtonClick() {
    console.log("Search button was clicked!");
  }

  updateBookFilter(bookOption) {
    this.setState({
      bookFilter: bookOption,
    });
  }

  updatePrintFilter(printOption) {
    this.setState({
      printFilter: printOption,
    });
  }
  /*
  handleUserInput = (userInput) => {
    const searchTerms = [...this.state.searchTerm, { searchTerm: userInput }];
    this.setState({
      searchTerm: searchTerms,
    });
    console.log("handle user input");
  };
  /*
  componentDidMount() {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyDVNILpaEUyEjBltP4Hn3_6xQR4r-DSuaQ";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          throw new Error("Something went wrong");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
*/
  render() {
    return (
      <main className="App">
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
        <BookResultList books={books} />
      </main>
    );
  }
}

export default App;
