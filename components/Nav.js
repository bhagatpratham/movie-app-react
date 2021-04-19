import React, { useContext } from "react";
import "../App.css";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className='Nav'>
      <h3>Pratham's Movies</h3>
      <p>Number of Movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
