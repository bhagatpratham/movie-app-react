import "./App.css";
import AddMovie from "./components/AddMovie";
import { MovieProvider } from "./components/MovieContext";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
