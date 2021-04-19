import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: `$${price}` },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='movie name..'
        name='name'
        value={name}
        onChange={updateName}
      ></input>
      <input
        placeholder='price...'
        type='number'
        name='price'
        value={price}
        onChange={updatePrice}
      ></input>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
