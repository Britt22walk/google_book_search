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
    };
  }

  handleSearchClick = () => {
    console.log(this.state.books);
  };
  /*
  componentDidMount() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";
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
        <SearchHeader onClick={this.handleSearchClick} />
        <BookResultList books={books} />
      </main>
    );
  }
}

export default App;
