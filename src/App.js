import React, { Component } from "react";
import "./App.css";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import BookResultList from "./components/BookResultList/BookResultList";
/*
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
];*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
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
      ],
      searchTerm: "",
      bookFilter: "partial",
      printFilter: "all",
    };
  }

  updateSearchTerm(userInput) {
    console.log("user input is being added to state!");
    this.setState({
      searchTerm: userInput,
    });
  }

  handleSearchButtonClick = (event) => {
    console.log("Search button was clicked!");
    event.preventDefault();
    const apiKey = "&key=AIzaSyDVNILpaEUyEjBltP4Hn3_6xQR4r-DSuaQ";
    const searchUrl = "https://www.googleapis.com/books/v1/volumes?";
    const params = {
      q: this.state.searchTerm,
      filter: this.state.bookFilter,
      printType: this.state.printFilter,
    };

    function formatQueryParams(params) {
      const queryItems = Object.keys(params).map(
        (key) => key + "=" + params[key]
      );
      return queryItems.join("&");
    }

    const queryString = formatQueryParams(params);

    const url = searchUrl + queryString + apiKey;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          books: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    const bookList = this.state.books ? (
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
