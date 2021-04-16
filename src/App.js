import "./App.css";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import BookResultList from "./components/BookResultList/BookResultList";

function App() {
  return (
    <main className="App">
      <SearchHeader />
      <BookResultList />
    </main>
  );
}

export default App;
